import { useEffect, useRef, useState } from "react";
import { projectHasMedia } from "../content/projects";
import type { Project } from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import ProjectCategoryIcon from "./ProjectCategoryIcon";

function isVideoSource(src: string) {
    return /\.(mp4|webm)$/i.test(src);
}

type ProjectMediaProps = {
    project: Project;
    imageAlt: string;
    className?: string;
    loading?: "lazy" | "eager";
    active?: boolean;
};

export default function ProjectMedia({
    project,
    imageAlt,
    className = "",
    loading = "lazy",
    active,
}: ProjectMediaProps) {
    const [localActive, setLocalActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isActive = active ?? localActive;
    const useLocalPointer = active === undefined;

    const hasMedia = projectHasMedia(project);
    const objectClass = project.thumbnailFit === "cover" ? "object-cover" : "object-contain";
    const posterSrc = assetUrl(project.thumbnail);
    const animatedSrc =
        project.animateOnHover && project.thumbnailAnimated ? assetUrl(project.thumbnailAnimated) : null;
    const animatedIsVideo = animatedSrc ? isVideoSource(animatedSrc) : false;

    useEffect(() => {
        if (!animatedSrc || animatedIsVideo) {
            return;
        }

        const preload = new Image();
        preload.src = animatedSrc;
    }, [animatedIsVideo, animatedSrc]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !animatedIsVideo) {
            return;
        }

        if (isActive) {
            void video.play().catch(() => undefined);
            return;
        }

        video.pause();
        video.currentTime = 0;
    }, [isActive, animatedIsVideo]);

    const mediaClassName = `relative overflow-hidden bg-surface ${className}`.trim();

    if (!hasMedia) {
        return (
            <div
                className={`${mediaClassName} flex items-center justify-center`}
                style={{ aspectRatio: project.thumbnailAspect ?? "16 / 9" }}
            >
                <ProjectCategoryIcon category={project.category} />
            </div>
        );
    }

    return (
        <div
            className={mediaClassName}
            style={{ aspectRatio: project.thumbnailAspect ?? "16 / 9" }}
            onMouseEnter={useLocalPointer ? () => setLocalActive(true) : undefined}
            onMouseLeave={useLocalPointer ? () => setLocalActive(false) : undefined}
        >
            {animatedSrc ? (
                <>
                    <img
                        src={posterSrc}
                        alt={imageAlt}
                        loading={loading}
                        className={`h-full w-full ${objectClass} transition-opacity duration-300 ${
                            isActive ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    {animatedIsVideo ? (
                        <video
                            ref={videoRef}
                            src={animatedSrc}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            className={`absolute inset-0 h-full w-full ${objectClass} transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ) : (
                        <img
                            src={animatedSrc}
                            alt=""
                            aria-hidden="true"
                            className={`absolute inset-0 h-full w-full ${objectClass} transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    )}
                </>
            ) : (
                <img
                    src={posterSrc}
                    alt={imageAlt}
                    loading={loading}
                    className={`h-full w-full ${objectClass} transition-transform duration-500 group-hover:scale-[1.01]`}
                />
            )}
        </div>
    );
}

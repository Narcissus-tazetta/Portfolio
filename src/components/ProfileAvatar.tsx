import { profile } from "../content/profile";
import { assetUrl } from "../lib/assetUrl";

export default function ProfileAvatar({ className }: { className: string }) {
    return <img src={assetUrl(profile.avatar)} alt={profile.displayName} className={className} />;
}

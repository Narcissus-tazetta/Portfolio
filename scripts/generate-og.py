"""Regenerate the geometric OGP artwork (Python + Pillow, macOS Helvetica)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SCALE = 3
BACKGROUND = '#0c0d14'
BANDS = [(990, '#bda4fa')]
# The rise/run follows the inclined Prason mark. Ends extend beyond the canvas.
POLYGONS = [([(x, 0), (x + 76, 0), (x - 118, 630), (x - 194, 630)], color) for x, color in BANDS]
LABELS = [('Prason', 88, 330, 120, '#eeedf7'), ('Software Developer', 94, 390, 27, '#bfbdd0')]
FONT = '/System/Library/Fonts/Helvetica.ttc'
image = Image.new('RGB', (1200 * SCALE, 630 * SCALE), BACKGROUND)
draw = ImageDraw.Draw(image)
for points, color in POLYGONS:
    draw.polygon([(x * SCALE, y * SCALE) for x, y in points], fill=color)
for text, x, baseline, size, color in LABELS:
    font = ImageFont.truetype(FONT, size * SCALE)
    draw.text((x * SCALE, baseline * SCALE), text, font=font, fill=color, anchor='ls')
image.resize((1200, 630), Image.Resampling.LANCZOS).save(ROOT / 'public/og.png', optimize=True)
parts = ['<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">', '<title>Prason — Software Developer</title>', f'<rect width="1200" height="630" fill="{BACKGROUND}"/>']
for points, color in POLYGONS:
    parts.append(f'<polygon points="{" ".join(f"{x},{y}" for x,y in points)}" fill="{color}"/>')
for text, x, baseline, size, color in LABELS:
    parts.append(f'<text x="{x}" y="{baseline}" font-family="Helvetica, Arial, sans-serif" font-size="{size}" fill="{color}">{text}</text>')
parts.append('</svg>')
(ROOT / 'public/og.svg').write_text('\n'.join(parts) + '\n')

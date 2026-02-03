# Asset Optimization Guide - Noir Café Website

This guide helps you optimize the provided assets for the best performance and visual quality.

## 🖼️ Image Optimization

### Step 1: Prepare Images in Batch

**Tools needed:**
- TinyPNG/TinyJPG (online, free)
- ImageMagick (command line)
- Squoosh (Google's web tool)
- VS Code Shortcut Plugin (optional)

### Step 2: Compression Settings by Image Type

#### Food Product Images (Menu & Gallery)
- **Format**: JPEG
- **Quality**: 80-82%
- **Max Width**: 800px (desktop), 400px (mobile)
- **File Size Target**: 80-150 KB per image

**Command Line (ImageMagick):**
```bash
# Single image
convert input.jpg -quality 82 -resize 800x600 output.jpg

# Batch all JPGs in folder
for f in *.jpg; do convert "$f" -quality 82 -resize 800x600 "optimized_$f"; done
```

#### Logo Image
- **Format**: PNG (for transparency) or JPEG
- **Quality**: PNG lossless or JPEG 85%+
- **Size**: Keep original dimensions (usually 200x200 - 500x500px)
- **File Size Target**: 20-50 KB

#### Ambiance/Background Images
- **Format**: JPEG
- **Quality**: 78-80%
- **Max Width**: 1200px
- **File Size Target**: 150-250 KB

### Step 3: Use TinyPNG (Easiest Method)

1. Go to [tinypng.com](https://tinypng.com)
2. Drag and drop all your images
3. Download optimized batch
4. Replace original files with optimized versions

**Expected savings**: 50-70% file size reduction

### Step 4: Create WebP Versions (Advanced)

For modern browsers (90%+ support):

```bash
# Install cwebp
# macOS: brew install webp
# Ubuntu: sudo apt-get install webp
# Windows: Download from webp download page

# Convert to WebP
cwebp input.jpg -q 80 -o output.webp

# Batch convert
for f in *.jpg; do cwebp "$f" -q 80 -o "${f%.jpg}.webp"; done
```

**HTML Implementation:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

## 🎥 Video Optimization

### Current Video File
- **File**: "Where every flavor is a masterpiece, and every moment is unforgettable.Introducing a new standar.mp4"
- **Use**: Hero section background

### Optimization Steps

#### 1. Check Current Specs
```bash
ffprobe "video.mp4"
# Shows: duration, bitrate, resolution, codec
```

#### 2. Compress Video

**Recommended Settings:**
- **Codec**: H.264
- **Bitrate**: 2500 kbps (desktop), 1500 kbps (fallback)
- **Resolution**: 1920x1080 (desktop), 1280x720 (mobile fallback)
- **Frame Rate**: 24-30 fps

**Compression Command:**
```bash
# High quality (desktop)
ffmpeg -i input.mp4 -vcodec h264 -crf 22 -acodec aac -b:a 128k output.mp4

# Medium quality (mobile fallback)
ffmpeg -i input.mp4 -vcodec h264 -crf 26 -s 1280x720 -b:a 96k output_mobile.mp4

# Remove audio (lighter file)
ffmpeg -i input.mp4 -vcodec h264 -crf 22 -an output_noaudio.mp4
```

**File Size Targets:**
- Desktop version: 3-5 MB
- Mobile version: 1-2 MB

#### 3. Video Format Variants

Create multiple formats for compatibility:

```bash
# MP4 (primary)
ffmpeg -i input.mp4 -vcodec h264 -crf 22 output.mp4

# WebM (fallback, smaller)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 output.webm

# Poster image (hero fallback)
ffmpeg -ss 00:00:03 -i input.mp4 -vf scale=1920:1080 -q:v 5 poster.jpg
```

#### 4. HTML Video Implementation

```html
<!-- Optimized video with fallbacks -->
<video autoplay muted loop playsinline poster="poster.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <img src="poster.jpg" alt="Fallback">
</video>
```

#### 5. Performance Monitoring

```css
/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  video {
    display: none;
  }
}

/* Mobile: Disable video, use image */
@media (max-width: 768px) {
  .hero-video {
    display: none;
  }
  
  .hero-background {
    background-image: url('poster.jpg');
    background-size: cover;
  }
}
```

## 🗂️ Directory Structure for Optimized Assets

```
Cafe Noir/
├── Images/
│   ├── logo.jpg (original)
│   ├── logo.webp (optional)
│   ├── food-item-1.jpg (optimized)
│   ├── food-item-1.webp (optional)
│   ├── video.mp4 (optimized, no audio)
│   ├── video.webm (optional, smaller)
│   └── poster.jpg (video fallback)
├── Images/originals/ (backup)
│   └── [original unoptimized files]
└── [HTML, CSS, JS files]
```

## ⚡ Performance Benchmarks

### Before Optimization (Typical)
- Total Images: 800 KB - 2 MB
- Video: 5-10 MB
- Page Load: 3-5 seconds
- Lighthouse Score: 65-75

### After Optimization (Target)
- Total Images: 300-600 KB
- Video: 2-3 MB
- Page Load: 1-2 seconds
- Lighthouse Score: 90-95

### Individual File Size Targets
| File Type | Target Size | Optimization |
|-----------|------------|--------------|
| Logo | 30 KB | 50% compression |
| Food Image | 100 KB | 65% compression |
| Ambiance Image | 150 KB | 60% compression |
| Video (no audio) | 3 MB | 70% reduction |

## 🔧 Tools & Commands Cheatsheet

### Online Tools (No Installation)
- **TinyPNG**: tinypng.com - Drag & drop images
- **Squoosh**: squoosh.app - Google's compression tool
- **CloudConvert**: cloudconvert.com - Convert video formats
- **Ezgif**: ezgif.com - Animated GIF/video preview

### Command Line Tools (Installation)

**macOS:**
```bash
# Install tools
brew install imagemagick ffmpeg

# Use immediately
convert image.jpg -quality 80 output.jpg
ffmpeg -i video.mp4 -vcodec h264 output.mp4
```

**Ubuntu/Linux:**
```bash
sudo apt-get install imagemagick ffmpeg

convert image.jpg -quality 80 output.jpg
ffmpeg -i video.mp4 -vcodec h264 output.mp4
```

**Windows:**
1. Download ImageMagick: imagemagick.org
2. Download FFmpeg: ffmpeg.org
3. Add to PATH
4. Use in PowerShell/CMD

## 📊 Batch Processing Script

### Bash Script (Linux/macOS)
```bash
#!/bin/bash
# optimize_images.sh

echo "🖼️ Starting image optimization..."

# Create output directory
mkdir -p Images/optimized

# Compress all JPGs
for f in Images/*.jpg; do
  echo "Optimizing $f..."
  convert "$f" -quality 82 -strip "Images/optimized/$(basename "$f")"
done

# Convert to WebP
for f in Images/optimized/*.jpg; do
  cwebp "$f" -q 80 -o "${f%.jpg}.webp"
done

echo "✅ Image optimization complete!"
echo "Files saved to Images/optimized/"
```

**Usage:**
```bash
chmod +x optimize_images.sh
./optimize_images.sh
```

### PowerShell Script (Windows)
```powershell
# optimize-images.ps1

Write-Host "🖼️ Starting image optimization..."

# Create output directory
New-Item -ItemType Directory -Path "Images\optimized" -Force

# Compress all JPGs
Get-ChildItem "Images\*.jpg" | ForEach-Object {
  Write-Host "Optimizing $($_.Name)..."
  & convert "$($_.FullName)" -quality 82 -strip "Images\optimized\$($_.Name)"
}

Write-Host "✅ Image optimization complete!"
```

## 🎯 Optimization Checklist

### Images
- [ ] All food images compressed to 80-120 KB
- [ ] Logo optimized to 30-50 KB
- [ ] Ambiance images 100-180 KB
- [ ] WebP versions created (optional)
- [ ] All images have alt text
- [ ] No images larger than 1920px width
- [ ] TinyPNG processing verified

### Video
- [ ] MP4 video 2.5-3 MB max
- [ ] Audio removed (lighter file)
- [ ] Poster image created
- [ ] Video plays smoothly on desktop
- [ ] Mobile fallback image ready
- [ ] WebM version created (optional)
- [ ] Tested on various connections

### SEO & Performance
- [ ] All images tagged with alt text
- [ ] Meta descriptions added
- [ ] Schema markup ready
- [ ] Open Graph tags prepared
- [ ] Lighthouse score 90+
- [ ] Mobile Performance 85+
- [ ] Core Web Vitals optimized

## 📱 Testing Performance

### Online Tools
1. **Google Lighthouse**: Built into Chrome DevTools
   - Cmd+Shift+J > Lighthouse > Generate report

2. **PageSpeed Insights**: pagespeed.web.dev
   - Shows mobile and desktop scores

3. **GTmetrix**: gtmetrix.com
   - Detailed performance breakdown

4. **WebPageTest**: webpagetest.org
   - Network throttling and waterfall charts

### Expected Results
- **Lighthouse Score**: 90-95
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 💡 Pro Tips

1. **Always keep backups** of original images
2. **Use consistent image formats** across similar content
3. **Lazy load images below the fold** (`loading="lazy"`)
4. **Preload critical images**: `<link rel="preload" as="image" href="image.jpg">`
5. **Use srcset for responsive images**:
   ```html
   <img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
        src="medium.jpg" alt="description">
   ```
6. **Monitor performance monthly** - reoptimize as needed
7. **Test on real devices** and throttled networks

## 📞 Support Resources

- **ImageMagick Docs**: imagemagick.org/Usage.php
- **FFmpeg Wiki**: trac.ffmpeg.org/wiki
- **Google Web Vitals**: web.dev/vitals
- **Lighthouse Docs**: developers.google.com/web/tools/lighthouse

---

**Last Updated**: February 2026  
**Website**: Noir Café Attock Premium Website  
**Status**: Ready for Optimization

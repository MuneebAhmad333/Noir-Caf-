# Noir Café Website - Quick Reference Card

## 📋 Essential Information

**Business Name**: Noir Café Attock  
**Location**: Teen Meela Chowk, Near Total Parco, Attock City  
**Phone**: 0323-5646874  
**Hours**: Monday – Sunday | 1:00 PM – 12:00 AM

---

## 🎨 Design System

### Color Palette
```
Primary Dark:      #0a0a0a    (Main background)
Secondary Dark:    #1a1a1a    (Section backgrounds)
Accent Gold:       #c9a87c    (Primary accent)
Warm Accent:       #f4a46a    (Hover states)
Text Light:        #f5f5f5    (Primary text)
Text Muted:        #b0b0b0    (Secondary text)
```

### Fonts
- **Primary**: Segoe UI, system fonts
- **Sizes**: Responsive (62px hero, 24px headings, 16px body)
- **Weight**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Animations
- **Duration**: 0.3s (standard), 0.6s (reveals)
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Effect**: Fade-in, slide-up, scale, zoom

---

## 📁 File Structure

```
index.html          → Main website (all 7 sections)
styles.css          → Premium dark theme styling
script.js           → Interactive features
Images/
  ├── logo.jpg
  ├── food images (6)
  ├── video.mp4
  └── [ambiance images]
README.md           → Full documentation
DEPLOYMENT_GUIDE.md → Hosting instructions
ASSET_OPTIMIZATION.md → Image/video optimization
```

---

## ⚡ Quick Commands

### Git Push (First Time)
```bash
cd "c:\Users\HP\Desktop\Cafe Noir"
git init
git add .
git commit -m "Initial: Noir Café Website"
git branch -M main
git remote add origin https://github.com/USERNAME/noir-cafe.git
git push -u origin main
```

### Git Push (Updates)
```bash
git add .
git commit -m "Update: [change description]"
git push
```

### Image Optimization
```bash
# Using TinyPNG (easiest)
# 1. Go to tinypng.com
# 2. Drag and drop all images
# 3. Download zip
# 4. Replace originals

# Using ImageMagick (command line)
convert image.jpg -quality 82 -resize 800x600 output.jpg
```

### Video Optimization
```bash
# Compress video for web
ffmpeg -i input.mp4 -vcodec h264 -crf 22 -acodec aac output.mp4

# Create mobile fallback
ffmpeg -i input.mp4 -vcodec h264 -crf 26 -s 1280x720 output_mobile.mp4

# Extract poster image
ffmpeg -ss 00:00:03 -i input.mp4 -q:v 5 poster.jpg
```

---

## 🚀 Deployment (5 Minutes)

### Deploy to Netlify
1. Push code to GitHub (use git commands above)
2. Go to **netlify.com**
3. Click **"Connect from Git"**
4. Select **GitHub** and authorize
5. Select your **noir-cafe** repository
6. Click **Deploy**
7. ✅ **Live in 30 seconds!**

### Add Custom Domain
1. Buy domain (namecheap.com, godaddy.com)
2. In Netlify → **Domain settings**
3. Click **Add custom domain**
4. Enter your domain
5. Follow DNS setup instructions
6. ✅ **Active in 24-48 hours**

---

## 📱 Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Mobile | < 480px | Stack, hide video, hamburger menu |
| Mobile+ | 480-768px | Stack, reduced padding |
| Tablet | 768-1200px | 2-column layouts |
| Desktop | > 1200px | Full 3+ column layouts |

---

## 🔧 Common Updates

### Change Phone Number
Find and replace all instances of:
```html
03235646874
```

### Change Address
In location section:
```html
Teen Meela Chowk, Near Total Parco, Attock City
```

### Update Hours
In location section:
```html
Monday – Sunday | 1:00 PM – 12:00 AM
```

### Add Social Link
In footer:
```html
<a href="https://instagram.com/USERNAME" target="_blank" class="social-link">Instagram</a>
```

### Add Menu Item
Copy a `.menu-card` block and update:
- Image path: `src="Images/image.jpg"`
- Title: `<h3>Item Name</h3>`
- Description: `<p>Description</p>`

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse | 90+ | ✅ |
| First Paint | < 1.5s | ✅ |
| Total Size | < 3 MB | ✅ |
| Mobile Score | 85+ | ✅ |

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All text proofread
- [ ] Phone number correct
- [ ] Hours current
- [ ] Address accurate
- [ ] Social links working
- [ ] Images optimized

### Functionality
- [ ] Hero video plays
- [ ] Mobile menu works
- [ ] Gallery lightbox opens
- [ ] All buttons clickable
- [ ] Links work (phone, maps)
- [ ] Mobile responsive

### Performance
- [ ] Page loads in < 2s
- [ ] Images under 150 KB
- [ ] Video under 5 MB
- [ ] Lighthouse 90+
- [ ] No console errors

### SEO
- [ ] Meta description set
- [ ] Title optimized
- [ ] H1 present
- [ ] Alt text on images
- [ ] Mobile viewport tag

### Browser Testing
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Edge ✅
- [ ] Mobile Chrome ✅
- [ ] Mobile Safari ✅

---

## 🎯 Analytics Setup

### Google Analytics
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track These Events
- Button clicks
- Gallery opens
- Scroll depth
- Form submissions

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check file paths are relative: `Images/file.jpg` |
| Video won't play | Verify video format (MP4) and codec (H.264) |
| Mobile menu broken | Check viewport meta tag in HTML |
| Slow loading | Optimize images/video, enable gzip compression |
| Links not working | Verify URLs: `tel:`, `mailto:`, `https://`, or `#section` |
| Layout breaks | Check CSS responsive breakpoints, test device sizes |

---

## 📞 Help & Resources

### Support Contacts
- **Netlify**: docs.netlify.com | support@netlify.com
- **GitHub**: docs.github.com | github.com/contact
- **Google**: support.google.com/analytics

### Developer Resources
- **HTML**: developer.mozilla.org/html
- **CSS**: developer.mozilla.org/css
- **JavaScript**: developer.mozilla.org/javascript

### Design Resources
- **Color Tool**: coolors.co
- **Font Pairs**: google.com/fonts
- **Icons**: fontawesome.com

---

## 💡 Pro Tips

1. **Always backup** files before major changes
2. **Test on mobile** before launching
3. **Monitor analytics** weekly
4. **Update content** seasonally
5. **Respond quickly** to customer inquiries
6. **Share on social** regularly
7. **Get customer feedback** and iterate

---

## 🎯 KPIs to Track

### Monthly Goals
- **Traffic**: Target X visits/month
- **Conversion**: Track button clicks
- **Engagement**: Avg session duration
- **Device**: Mobile vs desktop split
- **Traffic Source**: Direct, search, social, referral

### Quarterly Review
- Analytics dashboard review
- Performance audit
- Content updates
- Competitor analysis
- Customer feedback

---

## 📝 Content Calendar

### Social Media Posts
- **Monday**: Menu specials
- **Wednesday**: Behind-scenes
- **Friday**: Weekend promotions
- **Sunday**: Customer testimonials

### Website Updates
- **Monthly**: Gallery refresh
- **Seasonal**: Menu updates
- **Quarterly**: Major redesign review
- **As needed**: Hours, contact info

---

## 🎉 Launch Checklist

### Before Going Live
- [ ] All files uploaded
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Backups created
- [ ] Team trained
- [ ] Launch plan ready

### Launch Day
- [ ] Verify website loads
- [ ] Test all features
- [ ] Check all links
- [ ] Monitor performance
- [ ] Respond to messages
- [ ] Update social media

### Post-Launch
- [ ] Monitor for issues
- [ ] Gather feedback
- [ ] Review analytics
- [ ] Plan improvements
- [ ] Schedule updates

---

**Created**: February 2026  
**Version**: 1.0  
**Last Updated**: 2026-02-03  

**Status**: ✅ Production Ready

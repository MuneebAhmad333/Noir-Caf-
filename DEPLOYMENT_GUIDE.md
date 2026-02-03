# Noir Café Website - Deployment & Maintenance Guide

Complete instructions for deploying and maintaining your premium café website.

## 🚀 Quick Start

### Local Testing
1. Open the folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Website opens on `http://localhost:5500`

### File Checklist Before Deployment
- [ ] `index.html` - All content updated
- [ ] `styles.css` - All styles applied
- [ ] `script.js` - All interactions working
- [ ] `Images/` - All images and video present
- [ ] `README.md` - Documentation complete
- [ ] All links tested (phone, maps, social)
- [ ] Mobile responsive verified

## 🌐 Deployment Options

### Option 1: Netlify (RECOMMENDED - Easiest)

**Advantages:**
- ✅ Free hosting
- ✅ Free SSL certificate
- ✅ Fast global CDN
- ✅ One-click deployment
- ✅ Preview links for testing
- ✅ Automatic backups

**Steps:**

1. **Create GitHub Account** (if needed)
   - Go to github.com
   - Sign up (free)

2. **Push Code to GitHub**
   ```bash
   cd "c:\Users\HP\Desktop\Cafe Noir"
   git init
   git add .
   git commit -m "Initial commit - Noir Café Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/noir-cafe.git
   git push -u origin main
   ```

3. **Deploy on Netlify**
   - Go to netlify.com
   - Click "Connect from Git"
   - Authorize GitHub
   - Select your repository
   - Click Deploy
   - ✅ Live in 30 seconds!

4. **Custom Domain** (Optional)
   - Buy domain from Namecheap or GoDaddy (~$5/year)
   - In Netlify: Domain settings → Add custom domain
   - Follow DNS setup instructions

**Result**: Website live at `noircafe.netlify.app` or your custom domain

### Option 2: Vercel (Alternative - Also Easy)

**Steps:**

1. Push to GitHub (same as above)
2. Go to vercel.com
3. Click "Import Git Repository"
4. Select your repository
5. Click Deploy
6. ✅ Live instantly!

**Custom Domain**:
- Same as Netlify process
- Domain settings in Vercel dashboard

### Option 3: Traditional Hosting (GoDaddy, Bluehost, etc.)

**Steps:**

1. **Buy Hosting Plan**
   - Shared hosting (~$5-10/month)
   - Minimum: 10 GB space, 100 GB bandwidth

2. **Upload Files via FTP**
   - Get FTP credentials from host
   - Download FileZilla (filezilla-project.org)
   - Connect using FTP details
   - Upload entire Café Noir folder
   - Upload to `public_html/` folder

3. **Configure Server**
   - Enable gzip compression (`.htaccess`)
   - Set up SSL certificate (usually free with hosting)
   - Configure email (optional)

4. **Verify Upload**
   - Visit your domain
   - Test all links and functionality

### Option 4: AWS / Google Cloud (Advanced)

**Best for**: High traffic, scaling needs, advanced features

**Services**:
- AWS S3 + CloudFront
- Google Cloud Storage
- Both: ~$0.50-2/month for small sites

**Not recommended** for this project - too complex for budget/scope

## 📊 Comparison Table

| Provider | Cost | Setup | Speed | SSL | Best For |
|----------|------|-------|-------|-----|----------|
| Netlify | Free | 2 min | ⭐⭐⭐⭐⭐ | ✅ | **Recommended** |
| Vercel | Free | 2 min | ⭐⭐⭐⭐⭐ | ✅ | **Alternative** |
| GitHub Pages | Free | 5 min | ⭐⭐⭐⭐ | ✅ | Static sites |
| Bluehost | $5-10/mo | 15 min | ⭐⭐⭐ | ✅ | Budget option |
| GoDaddy | $3-15/mo | 15 min | ⭐⭐⭐ | ✅ | Domain + hosting |

## 🔒 Pre-Deployment Checklist

### Functionality Testing
- [ ] Hero section loads with video or fallback
- [ ] All buttons clickable (Call, Directions)
- [ ] Phone number link works
- [ ] Google Maps embed loads
- [ ] Gallery lightbox opens/closes
- [ ] Navigation smooth scrolls to sections
- [ ] Mobile menu opens/closes
- [ ] Forms submit (if added)

### SEO Pre-Check
- [ ] Meta description present
- [ ] Title tag optimized
- [ ] H1 tag present (Noir Café)
- [ ] Images have alt text
- [ ] Mobile viewport meta tag
- [ ] robots.txt file (optional)
- [ ] sitemap.xml (optional)

### Performance Pre-Check
- [ ] Images under 150 KB each
- [ ] Video under 5 MB
- [ ] Lighthouse score 90+
- [ ] Mobile load time < 2s
- [ ] No console errors
- [ ] No mixed content (HTTP/HTTPS)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large mobile (414x896)

## 📝 Post-Deployment Steps

### 1. Verify Domain Works
```bash
# Test in multiple browsers
# Desktop Chrome: https://yourdomain.com
# Mobile: https://yourdomain.com on phone
# Check mobile responsiveness: Chrome DevTools > Toggle device toolbar
```

### 2. Set Up Analytics (Optional but Recommended)

**Google Analytics Setup:**
```html
<!-- Add to <head> in index.html -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Steps:
1. Go to analytics.google.com
2. Create new property for your domain
3. Copy GA_ID to your HTML
4. Verify property in Analytics

### 3. Test Conversions

**Track:**
- ✅ Call button clicks
- ✅ Directions button clicks
- ✅ Gallery opens
- ✅ Scroll depth

**Monitor** in Analytics:
- Average session duration
- Bounce rate
- Pages per session
- Geographic data

### 4. Set Up Email Notifications (Optional)

**Monitor for:**
- ✅ 404 errors
- ✅ Broken links
- ✅ Performance issues
- ✅ SSL certificate expiration

Use services like:
- Uptime Robot (uptime.com)
- Site monitoring by hosting provider

## 🔧 Maintenance Schedule

### Daily
- Monitor for errors
- Respond to inquiries (if contact form added)
- Check social media mentions

### Weekly
- Review analytics
- Check all links work
- Monitor performance

### Monthly
- Analytics review
- SEO audit
- Update content if needed
- Check competitor sites
- Backup files

### Quarterly
- Full site audit
- Security scan
- Performance optimization
- Update menu/hours if changed
- Gallery refresh with new images

### Annually
- Domain renewal
- SSL certificate renewal
- Hosting plan review
- Major redesign considerations

## 📱 Content Updates

### Easy Updates in HTML

**Update Phone Number:**
```html
<!-- Find all instances and replace -->
href="tel:03235646874"
<!-- with new number -->
```

**Update Address:**
```html
<!-- In location section -->
<p>Teen Meela Chowk<br>Near Total Parco<br>Attock City</p>
<!-- Update street/details as needed -->
```

**Update Hours:**
```html
<!-- In location section -->
<p>Monday – Sunday<br>1:00 PM – 12:00 AM</p>
<!-- Update hours as needed -->
```

**Add New Menu Item:**
```html
<!-- Copy a menu-card block -->
<div class="menu-card">
    <div class="menu-image">
        <img src="Images/new-item.jpg" alt="New Item">
    </div>
    <div class="menu-info">
        <h3>New Item Name</h3>
        <p>Item description here.</p>
    </div>
</div>
```

**Add Social Media Link:**
```html
<!-- In footer -->
<a href="https://instagram.com/noircafe" target="_blank" class="social-link">
    Instagram
</a>
```

## 🐛 Troubleshooting

### Website Won't Load

**Check:**
1. Domain registered and pointed to host
2. DNS propagation (wait 24-48 hours max)
3. Files uploaded to correct directory
4. Permissions set correctly (644 for files, 755 for folders)

**Test:**
```bash
# Check DNS
nslookup yourdomain.com

# Check HTTP response
curl -I https://yourdomain.com
```

### Images Not Showing

**Solutions:**
1. Check file paths in HTML (should be relative: `Images/file.jpg`)
2. Verify image files uploaded
3. Check MIME types set correctly on server
4. Clear browser cache (Ctrl+Shift+Delete)

### Video Not Playing

**Solutions:**
1. Check video file exists and uploaded
2. Test different browsers (Chrome, Firefox, Safari)
3. Check video format (should be MP4)
4. Verify video has poster image fallback
5. Check file size (under 5 MB ideal)

### Slow Loading

**Fixes:**
1. Optimize images (run through TinyPNG again)
2. Compress video more
3. Enable gzip compression on server
4. Use CDN for static files
5. Minify CSS/JS in production

### Links Not Working

**Check:**
1. Phone: `href="tel:03235646874"` (no spaces)
2. Email: `href="mailto:info@noircafe.com"`
3. Maps: Full Google Maps URL
4. Social: Full URLs with https://
5. Internal: Correct section IDs (#about, #menu)

## 🔐 Security Considerations

### SSL Certificate
- ✅ Must have HTTPS (not HTTP)
- ✅ Netlify/Vercel provide free SSL
- ✅ Traditional hosting often includes free SSL
- ✅ Browser shows 🔒 lock icon when secure

### Content Security
- ✅ No sensitive data exposed
- ✅ No personal info stored
- ✅ No database = no data breach risk
- ✅ Regular backups of files

### Best Practices
```html
<!-- External links should have security attributes -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
    Link
</a>

<!-- Videos from trusted sources only -->
<video src="your-hosted-video.mp4"></video>
```

## 📊 Expected Performance Metrics

### Page Load (After Optimization)
- **First Contentful Paint**: 0.8-1.2s
- **Largest Contentful Paint**: 1.5-2.0s
- **Time to Interactive**: 2.0-2.5s
- **Cumulative Layout Shift**: < 0.05

### Lighthouse Scores
- **Performance**: 90-95
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

### Mobile Scores
- **Performance**: 85-90
- **Overall**: 90+

## 💰 Cost Breakdown ($1000 Budget)

| Item | Cost | Status |
|------|------|--------|
| Domain (.pk or .com) | $7-15/year | ✅ Included |
| Hosting (Netlify Free) | $0 | ✅ Included |
| SSL Certificate | $0 | ✅ Included |
| Email Setup | $0 | ✅ Included |
| CDN | $0 | ✅ Included |
| Analytics | $0 | ✅ Included |
| **Total** | **$7-15/year** | **✅ Under Budget** |

**Remaining Budget**: $985+ for:
- Professional photography (if needed)
- Advanced features (online ordering, etc.)
- Marketing/advertising
- Premium add-ons

## 🎯 Success Metrics

### Track These KPIs
1. **Website Traffic**
   - Monthly visitors
   - Bounce rate
   - Avg session duration

2. **User Engagement**
   - Gallery opens
   - Menu views
   - Button clicks

3. **Conversions**
   - Call button clicks
   - Map direction clicks
   - Form submissions (if added)

4. **Performance**
   - Page load time
   - Mobile vs desktop
   - Device/browser breakdown

5. **Customer Feedback**
   - Review ratings
   - Social mentions
   - Customer inquiries

## 📞 Support & Resources

### Hosting Support
- **Netlify Help**: docs.netlify.com
- **Vercel Support**: vercel.com/support
- **GitHub Pages**: pages.github.com

### Development Help
- **MDN Web Docs**: developer.mozilla.org
- **CSS Tricks**: css-tricks.com
- **Web Dev**: web.dev

### Optimization Tools
- **Lighthouse**: Chrome DevTools
- **PageSpeed**: pagespeed.web.dev
- **GTmetrix**: gtmetrix.com
- **WebPageTest**: webpagetest.org

## 🎉 Congratulations!

Your Noir Café website is now ready to:
- ✅ Drive customer inquiries
- ✅ Showcase your premium brand
- ✅ Generate walk-in traffic
- ✅ Build online presence

**Next Steps:**
1. Deploy to Netlify
2. Share on social media
3. Add business listing (Google My Business)
4. Monitor analytics
5. Gather customer feedback
6. Continue content updates

---

**Created**: February 2026  
**Version**: 1.0 Production  
**Status**: Ready to Deploy  
**Support**: Full documentation included

# Google Analytics Setup Guide

## 📊 Getting Your Google Analytics ID

1. **Create Google Analytics Account**
   - Go to https://analytics.google.com/
   - Sign in with your Google account
   - Click "Start measuring"

2. **Set Up Your Property**
   - Account name: "Devendra Mali Portfolio"
   - Property name: "devendramali.tech"
   - Select your timezone and currency
   - Click "Next"

3. **Get Your Measurement ID**
   - Choose "Web" platform
   - Enter your website URL: https://devendramali.tech
   - Stream name: "Portfolio Website"
   - Click "Create stream"
   - Copy your **Measurement ID** (format: G-XXXXXXXXXX)

## 🔧 Implementation Steps

### 1. Update index.html
Replace `G-XXXXXXXXXX` with your actual Measurement ID in:
- Line 46 in `index.html` (both occurrences)

### 2. Update analytics.js
Replace `G-XXXXXXXXXX` in:
- `src/utils/analytics.js` (line 7)

### 3. Deploy Your Site
Google Analytics will start tracking after deployment.

## 📈 What's Being Tracked

Your portfolio now tracks:

### **Automatic Events:**
- ✅ Page views (all routes)
- ✅ Scroll depth
- ✅ Outbound clicks
- ✅ File downloads

### **Custom Events:**
- ✅ Project case study views
- ✅ Contact form submissions
- ✅ Resume button clicks
- ✅ External link clicks (live sites, GitHub)
- ✅ Social media clicks

## 🔍 Viewing Your Analytics

1. Go to https://analytics.google.com/
2. Select your property
3. Navigate to:
   - **Reports > Engagement > Events** - See custom events
   - **Reports > Engagement > Pages** - See page views
   - **Reports > Realtime** - See live visitors

## 🎯 Custom Events Explained

| Event Name | When It Fires |
|-----------|---------------|
| `view_project` | User views a case study |
| `submit_form` | Contact form submitted successfully |
| `view_resume` | "View Resume" button clicked |
| `click_external_link` | Project live site/GitHub clicked |
| `click_social` | Social media link clicked |

## 🚀 Testing Analytics

1. **Development Testing:**
   - Analytics runs in development mode
   - Check browser console for gtag calls

2. **Production Testing:**
   - Deploy your site
   - Visit your site
   - Go to Google Analytics > Realtime
   - You should see yourself as an active user

## 🔒 Privacy Considerations

- Google Analytics is GDPR compliant when configured correctly
- Consider adding a cookie consent banner for EU visitors
- IP anonymization is enabled by default in GA4

## 📝 Optional Enhancements

### Add Cookie Consent (Future):
```javascript
// Example cookie consent implementation
if (userAcceptsCookies) {
  gtag('consent', 'update', {
    'analytics_storage': 'granted'
  });
}
```

### Track More Events:
Edit `src/utils/analytics.js` to add more tracking functions.

## 🐛 Troubleshooting

**Analytics not showing data?**
1. Check if your Measurement ID is correct
2. Make sure site is deployed (doesn't work on localhost for real data)
3. Wait 24-48 hours for data to populate
4. Check Realtime reports for immediate feedback

**Need Help?**
- Google Analytics Help: https://support.google.com/analytics
- GA4 Documentation: https://developers.google.com/analytics/devguides/collection/ga4

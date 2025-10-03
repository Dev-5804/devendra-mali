/**
 * Google Analytics Configuration
 * 
 * Uses environment variable for Google Analytics Measurement ID
 * Get your ID from: https://analytics.google.com/
 */

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Track page views
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track specific events for your portfolio
export const trackProjectView = (projectName) => {
  event({
    action: 'view_project',
    category: 'Projects',
    label: projectName,
  })
}

export const trackContactFormSubmit = () => {
  event({
    action: 'submit_form',
    category: 'Contact',
    label: 'Contact Form',
  })
}

export const trackResumeView = () => {
  event({
    action: 'view_resume',
    category: 'Resume',
    label: 'Resume Button Click',
  })
}

export const trackExternalLink = (linkName, url) => {
  event({
    action: 'click_external_link',
    category: 'Outbound Links',
    label: `${linkName} - ${url}`,
  })
}

export const trackSocialClick = (platform) => {
  event({
    action: 'click_social',
    category: 'Social Media',
    label: platform,
  })
}

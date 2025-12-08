import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { trackContactFormSubmit, trackExternalLink } from '../utils/analytics'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const contactInfo = [
    {
      label: 'Email',
      value: 'dev.endra.mali.5804@gmail.com',
      link: 'mailto:dev.endra.mali.5804@gmail.com'
    },
    // {
    //   label: 'Phone',
    //   value: '+91 88569 72156',
    //   link: 'tel:+918856972156'
    // },
    {
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      link: null
    }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Dev-5804/', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dev-endra-mali/', icon: 'LI' },
    { name: 'Twitter/X', url: 'https://x.com/Devendr98554068', icon: 'TW' },
    { name: 'Instagram', url: 'https://www.instagram.com/_devendra_mali/', icon: 'IG' },
    { name: 'Fiverr', url: 'https://www.fiverr.com/s/gD30DEX', icon: 'FV' },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Track successful form submission
      trackContactFormSubmit()
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative bg-white text-black overflow-hidden"
    >
      {/* Main Contact Section */}
      <div className="min-h-screen flex items-center px-6 md:px-12 py-20 relative">
        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[350px] font-black opacity-[0.02] leading-none pointer-events-none whitespace-nowrap" aria-hidden="true">
          CONTACT
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - CTA */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-8">
                04 / Get In Touch
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                LET'S CREATE
                <br />
                SOMETHING
                <br />
                <span className="italic font-light">amazing</span>
              </h2>

              <div className="w-32 h-1 bg-black mb-8"></div>

              <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-12">
                Have a project in mind? Want to collaborate? 
                Or just want to say hi? I'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        onClick={() => info.label === 'Email' && trackExternalLink('Email', info.value)}
                        className="text-xl md:text-2xl font-bold inline-block relative hover:translate-x-2 transition-transform duration-300"
                      >
                        {info.value}
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
                      </a>
                    ) : (
                      <p className="text-xl md:text-2xl font-bold">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`bg-black text-white p-8 md:p-12 relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Corner Decoration */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white opacity-30" aria-hidden="true"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white opacity-30" aria-hidden="true"></div>

              <h3 className="text-3xl md:text-4xl font-black mb-8">
                Send a Message
              </h3>

              {/* Success/Error Messages */}
              {submitStatus && (
                <>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 border-2 border-white bg-white text-black animate-fade-in">
                      <p className="font-bold">✓ Message sent successfully!</p>
                      <p className="text-sm opacity-80 mt-1">I'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 border-2 border-red-500 bg-red-500 bg-opacity-10 animate-fade-in">
                      <p className="text-white font-bold">✗ Failed to send message</p>
                      <p className="text-sm opacity-80 mt-1">Please try again or email me directly.</p>
                    </div>
                  )}
                </>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="contact-name" className="block text-sm uppercase tracking-wider mb-2 opacity-80">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-opacity-100 transition-all disabled:opacity-50"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm uppercase tracking-wider mb-2 opacity-80">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-opacity-100 transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm uppercase tracking-wider mb-2 opacity-80">
                    Your Message
                  </label>
                  <textarea 
                    rows="4"
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-opacity-100 transition-all resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                    aria-required="true"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4 bg-white text-black text-sm uppercase tracking-widest font-bold relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-10">
                        Send Message →
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-black opacity-5 hidden lg:block" aria-hidden="true"></div>
      </div>

      {/* Footer Section */}
      <footer className="border-t-2 border-black px-6 md:px-12 py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black mb-4">DEVENDRA MALI</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Information Technology Student & Web Developer crafting digital experiences 
                with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4 opacity-60">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[{name: 'Home', id: 'home'}, {name: 'About', id: 'about'}, {name: 'Projects', id: 'projects'}, {name: 'Contact', id: 'contact'}].map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-lg hover:translate-x-2 inline-block transition-transform duration-300 hover:font-bold cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4 opacity-60">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <span className="text-xs font-black">{social.icon}</span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Devendra Mali. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:font-bold transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:font-bold transition-all duration-300">Terms of Service</Link>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 left-0 w-64 h-64 border-t-2 border-r-2 border-black opacity-5"></div>
    </section>
  )
}

export default Contact

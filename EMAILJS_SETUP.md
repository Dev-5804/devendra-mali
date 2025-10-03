# EmailJS Setup Guide for Contact Form

## 📧 Setting Up EmailJS

Follow these steps to configure EmailJS and make your contact form fully functional:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{name}}
```

**Content:**
```
You have a new message from your portfolio website!

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Make sure to use these variable names:
   - `{{name}}` - for the sender's name
   - `{{email}}` - for the sender's email
   - `{{message}}` - for the message content

5. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it (e.g., `AbCdEfGhIjKlMnOp`)

### Step 5: Update Your Code
Open `src/components/Contact.jsx` and replace these placeholders on lines 41-43:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
)
```

**Example:**
```javascript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  formRef.current,
  'AbCdEfGhIjKlMnOp'
)
```

### Step 6: Test Your Form
1. Save the file
2. Go to your contact section
3. Fill out the form and submit
4. Check your email for the message
5. Verify success/error messages appear correctly

## 🎨 Features Implemented

✅ **Form Validation** - All fields are required
✅ **Loading State** - Button shows "Sending..." during submission
✅ **Success Message** - Green confirmation when email is sent
✅ **Error Handling** - Red error message if sending fails
✅ **Auto-clear** - Form resets after successful submission
✅ **Disabled State** - Form disables during submission
✅ **Auto-dismiss** - Messages disappear after 5 seconds

## 🔒 Security Notes

- Your EmailJS keys are safe to use in frontend code
- EmailJS handles rate limiting automatically (200 emails/month on free plan)
- Consider upgrading if you expect high traffic

## 📊 EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- EmailJS branding in emails

## 🚀 Testing Tips

1. Test with a real email address first
2. Check spam folder if you don't receive emails
3. Verify template variables match form field names
4. Test error handling by using invalid Service ID temporarily

## 💡 Pro Tips

- You can customize the email template styling in EmailJS dashboard
- Add auto-reply template to send confirmation to users
- Monitor usage in EmailJS dashboard
- Set up email notifications for form submissions

## 📝 Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key
- Ensure email service is properly connected in EmailJS
- Check template variable names match form fields

**Error message appears?**
- Open browser console to see detailed error
- Verify all three IDs are correct
- Check EmailJS monthly limit hasn't been exceeded
- Ensure internet connection is stable

**Form doesn't submit?**
- Check browser console for errors
- Verify all form fields have `name` attributes
- Ensure EmailJS library is installed: `npm list @emailjs/browser`

---

Need help? Check the [EmailJS Documentation](https://www.emailjs.com/docs/)

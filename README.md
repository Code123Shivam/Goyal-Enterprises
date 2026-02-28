# Goyal Enterprises - Premium Hardware & Plywood Store

## 🏢 Business Overview

A modern, enterprise-level business website for **Goyal Enterprises**, a premium hardware and plywood store located in Parasia, Chhindwara, Madhya Pradesh, India.

**Phone:** +91-8989774040  
**Email:** niteshgoyal289@gmail.com  
**WhatsApp:** [Chat with us](https://wa.me/918989774040)

---

## ✨ Key Features

### 🎨 **Modern, Premium Design**
- Stunning gradient hero section with animated text
- Glassmorphism and blur effects on navbar
- Smooth scroll animations and transitions
- Colorful, visually exciting interface
- Enterprise-level professional appearance

### 🎯 **Interactive Elements**
- Bilingual support (English 🇬🇧 / Hindi 🇮🇳) with persistent language toggle
- Animated product cards with hover effects
- Floating action buttons (WhatsApp & Call) with pulse animation
- Smooth scroll-to-section navigation
- Mobile-responsive hamburger menu
- Scroll-to-top button

### 📱 **Product Showcase**
- 10 product categories with beautiful gradient cards:
  - Plywood (All Types)
  - Doors
  - Nails & Fasteners
  - Hardware Items
  - Tools
  - Machinery (Drill, etc.)
  - Adhesives (Fevicol)
  - Curtain Hangers
  - Sofa Covers
  - Sofa Seats
- One-click WhatsApp inquiry with pre-filled messages
- Quick product browsing experience

### 🌐 **Contact & Communication**
- Animated contact form (frontend validation)
- Embedded Google Maps
- WhatsApp integration
- Click-to-call functionality
- Complete business address and details

### 🚀 **Performance & Accessibility**
- Fully responsive design (mobile-first approach)
- Smooth animations and transitions
- Intersection Observer for lazy reveal animations
- Optimized for all devices
- Accessible keyboard navigation

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations, gradients, and transitions
- **Vanilla JavaScript** - No frameworks, pure JS for interactions

**No dependencies!** Pure HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
Goyal-Enterprises/
├── index.html       # Main HTML structure
├── style.css        # All styling and animations
├── script.js        # Interactive functionality
└── README.md        # This file
```

---

## 🎨 Design Highlights

### Color Palette
- **Primary:** `#667eea` (Purple)
- **Secondary:** `#764ba2` (Dark Purple)
- **Accent:** `#ff6b6b` (Red)
- **Text Dark:** `#1a1a1a`
- **Light BG:** `#f8f9ff`

### Typography
- **Poppins** - Main font (300, 400, 600, 700, 800)
- **Inter** - Secondary font (300-700)

### Animations
- Hero title slide-down with fade
- Product card reveal on scroll
- Service card hover transforms
- Floating button pulse effect
- Smooth scroll to sections
- Navbar glassmorphism on scroll

---

## ⚙️ JavaScript Features

### Language Toggle
- Bilingual English/Hindi support
- Persistent language preference (localStorage)
- Dynamic text switching

### Navigation
- Sticky navbar with blur effect
- Mobile menu with hamburger toggle
- Smooth scroll navigation
- Active link indicators

### Interactions
- WhatsApp inquiry buttons with product details
- Contact form submission handling
- Floating action buttons (Call, WhatsApp, Scroll-to-Top)
- Scroll reveal animations using Intersection Observer

### Accessibility
- Keyboard navigation support
- ARIA labels
- Semantic HTML
- High contrast ratios

---

## 🚀 How to Use

### 1. **Open the Website**
Simply open `index.html` in any modern web browser.

```bash
# If using a local server (recommended for best experience):
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (using http-server)
npx http-server
```

Then navigate to:
- `http://localhost:8000` (Python)
- `http://localhost:8080` (Node.js)

### 2. **Language Toggle**
Click the language toggle button (top-right corner) to switch between English and Hindi.

### 3. **Product Inquiry**
Click "Inquire via WhatsApp" on any product card to open WhatsApp with pre-filled message.

### 4. **Contact**
- Fill the contact form to send an inquiry via WhatsApp
- Click the floating WhatsApp button for direct chat
- Click the floating phone button to call directly
- View location on embedded Google Map

---

## 📝 Customization Guide

### 🖼️ Replace Placeholder Images
Update the gradient backgrounds in product cards with actual product images:

**In `index.html`:**
```html
<!-- Replace gradient background with actual image -->
<div class="product-image" style="background: url('your-image.jpg') center/cover;">
```

### 🎨 Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

### 📞 Update Contact Information
Update in both `index.html` and anywhere contact is mentioned:
- Phone number: `+91-8989774040`
- Email: `niteshgoyal289@gmail.com`
- WhatsApp: `918989774040`
- Address: Near Chauki Mohalla, Ward No. 4, Parasia, Chhindwara, MP

### 🗺️ Update Google Maps
Replace the iframe src in the contact section with your business location coordinates.

### ➕ Add More Products
Duplicate a product card in the products grid and update:
- Product image/emoji
- Title
- Description
- Product name passed to `sendWhatsAppInquiry()`

---

## ✅ Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers (iOS, Android)

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

---

## 🎯 Features by Section

### Hero Section
- Large animated gradient background
- Animated title and subtitle
- Call-to-action buttons
- Scroll indicator

### Products Section
- 10 product cards in responsive grid
- Gradient image placeholders
- WhatsApp inquiry integration
- Hover animations

### Services Section
- 6 service highlights
- Icon + title + description
- Hover scaling effects
- Reveal animations on scroll

### Contact Section
- Contact form with validation
- Business details
- Embedded Google Map
- Multiple contact methods

### Floating Buttons
- WhatsApp (always available)
- Call (click to dial)
- Scroll to Top (appears when scrolled)

---

## 🔧 Development Notes

### Accessibility
- All interactive elements are keyboard accessible
- Proper semantic HTML structure
- ARIA labels where needed
- High contrast colors

### Performance
- No external dependencies (no jQuery, no frameworks)
- Optimized CSS animations using GPU
- Lazy loading animations with Intersection Observer
- Minimal JavaScript for fast loading

### SEO
- Semantic HTML5 structure
- Meta tags for description
- Proper heading hierarchy
- Mobile-friendly responsive design

---

## 📦 Deployment

### Ready for:
- ✅ **Netlify** - Drag & drop deployment
- ✅ **GitHub Pages** - Free static hosting
- ✅ **Vercel** - One-click deployment
- ✅ **Any static hosting service**

### Deploy to Netlify:
1. Drag and drop the folder to Netlify
2. Done! Your site is live

### Deploy to GitHub Pages:
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Choose the main branch
4. Your site goes live at `username.github.io/repo-name`

---

## 📊 Analytics

The website includes placeholders for:
- Google Analytics integration
- Event tracking (WhatsApp clicks, form submissions)
- User interaction analytics

To enable, add your tracking codes in the JavaScript.

---

## 🎓 Learning Resource

This project is a great example of:
- Modern CSS with animations and gradients
- Vanilla JavaScript without frameworks
- Responsive mobile-first design
- HTML semantic structure
- Production-ready code quality
- Bilingual website implementation

---

## 📝 License

This website template is created for **Goyal Enterprises**. Feel free to customize and use for your business.

---

## 🤝 Support

For questions or customizations:
- **Phone:** +91-8989774040
- **Email:** niteshgoyal289@gmail.com
- **WhatsApp:** [Chat with us](https://wa.me/918989774040)

---

## 🎉 Features Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Bilingual (EN/HI) | ✅ | With localStorage persistence |
| Responsive Design | ✅ | Mobile-first approach |
| Smooth Animations | ✅ | Hero, cards, buttons |
| WhatsApp Integration | ✅ | Inquiry & direct chat |
| Contact Forms | ✅ | Frontend validation |
| Floating Buttons | ✅ | Call, WhatsApp, Scroll-Top |
| Product Cards | ✅ | 10 categories with images |
| Google Maps | ✅ | Embedded location |
| Glassmorphism | ✅ | Navbar with blur effect |
| Dark Mode Ready | ⏳ | Can be enabled for CSS |

---

## 📸 Website Sections

1. **Navbar** - Fixed glassmorphic navigation
2. **Hero** - Full-screen animated hero section
3. **Products** - 10 product cards grid
4. **Services** - Why Choose Us section
5. **Contact** - Form + Map + Details
6. **Footer** - Links + Social + Info
7. **Floating Buttons** - WhatsApp, Call, Scroll-Top

---

**Built with ❤️ using HTML5, CSS3 & Vanilla JavaScript**

*Last Updated: February 2026*

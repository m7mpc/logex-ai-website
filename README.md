# Logex AI - We Build Your AI Assistant

A modern, responsive landing page for Logex AI showcasing intelligent AI solutions for agencies and e-commerce businesses.

## 📁 Project Structure

```
aiproject/
├── assets/
│   ├── css/
│   │   └── styles.css               # All custom styles and animations
│   ├── js/
│   │   └── main.js                  # Interactive functionality and animations
│   ├── images/
│   │   └── logobig.svg              # Logo and image assets
│   └── og/
│       └── og-image.jpg             # Social media preview image
├── index.html                       # Main homepage
└── README.md                        # Project documentation
```

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Animations**: Smooth scroll animations, floating elements, and interactive particles
- **Interactive Elements**: Service card hover effects with mouse tracking
- **Performance Optimized**: Clean separation of HTML, CSS, and JavaScript
- **SEO Ready**: Proper meta tags and Open Graph support

## 🎨 Design Elements

- **Color Scheme**: Dark theme with lime green (#a4d037) accents
- **Typography**: Inter and Plus Jakarta Sans fonts
- **Effects**: Glass morphism, gradient backgrounds, animated text
- **Animations**: CSS keyframes for floating elements and text gradients

## 📱 Sections

1. **Hero Section**: Compelling headline with animated call-to-action
2. **How It Works**: 3-step process visualization
3. **Services**: Two main AI solutions (Agency Lead Gen & E-commerce Assistant)
4. **Benefits**: Key value propositions
5. **FAQ**: Expandable frequently asked questions
6. **Contact**: Lead capture form with service selection

## 🛠️ Setup Instructions

1. Create the folder structure as shown above
2. Place your `logobig.svg` file in `assets/images/`
3. Add an `og-image.jpg` in `assets/og/` for social media previews
4. Copy the code files into their respective locations
5. Open `index.html` in your browser

## 🔧 Customization

### Colors
Update CSS variables in `styles.css`:
```css
:root {
  --logex-dark: #2b303a;
  --logex-lime: #a4d037;
  --logex-lime-light: #b8e04a;
  --logex-lime-dark: #8fb02a;
}
```

### Content
- Edit text content directly in `index.html`
- Modify form fields in the contact section
- Update meta tags for SEO

### Animations
- Adjust animation timings in `styles.css`
- Modify particle system settings in `main.js`
- Customize reveal animation thresholds

## 📊 Performance Notes

- Uses CDN for Tailwind CSS and Google Fonts
- Optimized images recommended (SVG for logo, optimized JPG/PNG for others)
- Smooth scroll behavior with CSS
- Intersection Observer for performance-efficient animations

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 📞 Contact Form

The contact form includes:
- Name and company validation
- Service selection dropdown
- Message textarea
- Basic form submission handling (currently shows alert - integrate with your backend)

## 🎯 Next Steps

1. Replace placeholder images with actual assets
2. Integrate contact form with your backend/email service
3. Add Google Analytics or tracking scripts
4. Set up hosting and domain
5. Test on various devices and browsers
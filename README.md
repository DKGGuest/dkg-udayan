# Udayan Public Empowerment Trust Website

A modern, responsive, SEO-friendly website built with React.js for Udayan Public Empowerment Trust - a non-profit organization dedicated to empowering rural artisans, especially women, and preserving traditional Indian arts and crafts.

## 🎯 Project Overview

This website serves as a digital platform to:
- Showcase the mission and impact of Udayan Trust
- Connect rural artisans with market opportunities
- Provide information about workshops and training programs
- Enable inquiries for handcrafted products
- Facilitate partnerships and collaborations
- Promote women artisan empowerment
- Preserve traditional Indian crafts

## ✨ Features

### Core Functionality
- **15 Main Sections** covering all aspects of the organization
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured content
- **Modern UI/UX** - Earthy color palette, smooth animations, premium design
- **Component-Based Architecture** - Reusable, maintainable React components

### Key Pages

1. **Home** - Hero section, mission statement, featured artisans, products, impact statistics
2. **About Us** - Organization story, mission, vision, values, and impact
3. **Artisans Directory** - Searchable/filterable directory of artisan profiles
4. **Artisan Detail** - Individual artisan stories, specializations, and galleries
5. **Marketplace** - Inquiry-based product catalog with filtering
6. **Product Detail** - Detailed product information with inquiry forms
7. **Women Empowerment** - Dedicated section on women artisan initiatives
8. **Art Preservation** - Information on traditional craft preservation efforts
9. **Workshops** - Training programs and skill development workshops
10. **Market Access** - Platform and market access information
11. **Blog** - Articles and resources (placeholder)
12. **Gallery** - Photo gallery (placeholder)
13. **Partnerships** - Collaboration opportunities
14. **Get Involved** - Registration for artisans, volunteers, and partners
15. **News** - Announcements and updates (placeholder)
16. **FAQ** - Frequently asked questions with accordion interface
17. **Contact** - Contact form, info, and Google Maps integration

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **React Router DOM 7.13** - Client-side routing
- **React Helmet Async 2.0** - SEO meta tag management
- **Lucide React 0.563** - Beautiful icon library
- **Framer Motion 12.34** - Animation library (installed, ready to use)
- **Vite 7.3** - Build tool and dev server
- **Vanilla CSS** - Custom styling with CSS-in-JS approach

## 📁 Project Structure

```
ngo/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── HeroSection.jsx  # Homepage hero
│   │   ├── ArtisanCard.jsx  # Artisan profile card
│   │   ├── ProductCard.jsx  # Product display card
│   │   └── ContactForm.jsx  # Contact/inquiry form
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Artisans.jsx
│   │   ├── ArtisanDetail.jsx
│   │   ├── Marketplace.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── WomenEmpowerment.jsx
│   │   ├── ArtPreservation.jsx
│   │   ├── Workshops.jsx
│   │   ├── MarketAccess.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Gallery.jsx
│   │   ├── Partnerships.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── News.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx              # Main app component with routing
│   ├── index.css            # Global styles and design system
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette (Earthy & Traditional)
```css
--primary: #7D5A50        /* Rich brown */
--primary-light: #A37B6F  /* Light brown */
--secondary: #B4846C      /* Terracotta */
--accent: #E5B299         /* Warm beige */
--bg-warm: #FDF6EC        /* Cream background */
--bg-white: #FFFFFF       /* Pure white */
--text-main: #2C2C2C      /* Dark gray */
--text-muted: #5E5E5E     /* Medium gray */
--border-color: #D6C2B1   /* Light brown border */
```

### Typography
- **Headings**: Outfit (Google Fonts) - Modern, clean
- **Body**: Inter (Google Fonts) - Readable, professional

### Design Principles
- Warm, culturally sensitive aesthetics
- Premium, modern look with traditional elements
- Smooth transitions and micro-animations
- Mobile-first responsive design
- High-quality imagery (using Unsplash placeholders)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd d:\ngo
   ```

2. **Install dependencies** (already done)
   ```bash
   npm install --force
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables
Create a `.env` file for API endpoints and configuration:
```env
VITE_API_URL=your_api_endpoint
VITE_CONTACT_EMAIL=info@udayantrust.org
```

### Backend Integration
The contact forms are currently set up with simulated submissions. To integrate with a backend:

1. Update the `handleSubmit` function in `ContactForm.jsx`
2. Replace the setTimeout simulation with actual API calls
3. Add error handling and validation
4. Configure CORS on your backend

Example:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setIsSuccess(true);
      // Reset form
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## 🎯 SEO Features

- React Helmet Async for dynamic meta tags
- Semantic HTML5 elements
- Proper heading hierarchy (H1-H6)
- Descriptive alt text for images
- Clean URL structure
- Fast page load times

## 🔮 Future Enhancements

### Recommended Additions
1. **Backend API Integration**
   - User authentication for artisans
   - Database for artisan/product management
   - Admin dashboard

2. **Enhanced Features**
   - Multi-language support (Hindi, regional languages)
   - Advanced search with filters
   - Blog CMS integration
   - Newsletter subscription
   - Payment gateway integration (if moving beyond inquiry-based)
   - Social media integration
   - Analytics dashboard

3. **Performance**
   - Image optimization and lazy loading
   - Code splitting
   - PWA capabilities
   - Caching strategies

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - Color contrast improvements

## 📄 License

This project is created for Udayan Public Empowerment Trust.

## 👥 Contributing

This is a custom project for a specific organization. For contributions or modifications, please contact the organization directly.

## 📞 Support

For technical support or questions:
- Email: info@udayantrust.org
- Phone: +91 98765 43210

---

**Built with ❤️ for empowering rural artisans and preserving traditional Indian crafts**

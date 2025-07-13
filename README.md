# Sweet Delights - Coffee & Bakery Website

A beautiful, responsive single-page website for a coffee and bakery business built with Next.js and Tailwind CSS.

## 🚀 Features

### Design & User Experience
- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Component-Based Architecture** - Modular, reusable components
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

### Sections Included
1. **Navbar** - Responsive navigation with mobile menu
2. **Hero Section** - Eye-catching landing area with call-to-action
3. **Category Section** - Menu showcase (Coffee, Cakes, Pastries)
4. **Gallery** - Interactive photo gallery with filters
5. **Why Us** - Company features and statistics
6. **Order Summary** - Business metrics and analytics
7. **Testimonials** - Customer reviews with carousel
8. **Custom Order Form** - Interactive cake ordering system
9. **Contact Form** - Contact form with validation
10. **Footer** - Comprehensive footer with links and social media

### Animations & Interactions
- **Framer Motion** - Smooth page transitions and micro-interactions
- **Hover Effects** - Interactive elements with scale and color transitions
- **Scroll Animations** - Elements animate as they come into view
- **Loading States** - Form submission feedback and loading indicators

## 🛠️ Technologies Used

### Core Technologies
- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS 3** - Utility-first CSS framework
- **JavaScript** - No TypeScript, pure JSX and JavaScript

### Libraries & Dependencies
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library (Feather icons)
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Development Tools
- **ESLint** - Code linting
- **Next.js Config** - Framework configuration

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nitinpatil7/bekery.git
   cd bekery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors & Theme
The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fef7ee',
    500: '#ed7a1a',
    600: '#de5f10',
    // ... more shades
  },
  secondary: {
    50: '#fdf4ff',
    500: '#d946ef',
    // ... more shades
  },
  cream: '#fefbf3',
  chocolate: '#3d2c2e',
  caramel: '#d4a574',
}
```

### Fonts
- **Playfair Display** - Serif font for headings
- **Poppins** - Sans-serif font for body text

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in` - Opacity transitions
- `slide-up` - Vertical slide animations
- `bounce-gentle` - Subtle bounce effects
- `float` - Floating animation for decorative elements

## 🏗️ Project Structure

```
sample-cake/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
├── components/
│   ├── Navbar.js            # Navigation component
│   ├── Hero.js              # Hero section
│   ├── CategorySection.js   # Menu categories
│   ├── Gallery.js           # Photo gallery
│   ├── WhyUs.js             # Features section
│   ├── OrderSummary.js      # Business metrics
│   ├── Testimonials.js      # Customer reviews
│   ├── CustomOrderForm.js   # Cake ordering form
│   ├── ContactForm.js       # Contact form
│   └── Footer.js            # Footer component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── README.md               # Project documentation
```

## 🎯 Component Details

### Navbar Component
- **Responsive Design** - Mobile hamburger menu
- **Scroll Effects** - Background changes on scroll
- **Smooth Navigation** - Animated navigation links
- **CTA Button** - Call-to-action for ordering

### Hero Section
- **Animated Content** - Staggered animations on load
- **Gradient Backgrounds** - Beautiful color transitions
- **Floating Elements** - Decorative animated elements
- **Statistics Display** - Key business metrics

### Category Section
- **Interactive Cards** - Hover effects and animations
- **Menu Items** - Detailed product listings
- **Rating System** - Star ratings for products
- **Special Offers** - Promotional content

### Gallery Component
- **Filter System** - Category-based filtering
- **Hover Effects** - Image overlays and interactions
- **Social Features** - Like, view, and share buttons
- **Responsive Grid** - Adaptive layout for all screens

### Why Us Section
- **Feature Cards** - Animated feature highlights
- **Statistics** - Business metrics with animations
- **Story Section** - Company narrative
- **Visual Elements** - Icons and decorative elements

### Order Summary
- **Real-time Metrics** - Business performance indicators
- **Analytics Charts** - Visual data representation
- **Recent Orders** - Live order tracking
- **Performance Highlights** - Key achievements

### Testimonials
- **Carousel Functionality** - Interactive testimonial slides
- **Rating System** - Star ratings for reviews
- **Customer Information** - Reviewer details
- **Overall Rating** - Aggregate customer satisfaction

### Custom Order Form
- **Form Validation** - Real-time input validation
- **Date Picker** - Future date selection
- **Flavor Selection** - Dropdown menu for cake flavors
- **Success Feedback** - Confirmation messages

### Contact Form
- **Email Validation** - Proper email format checking
- **Message Validation** - Minimum character requirements
- **Google Maps Integration** - Location display (placeholder)
- **Social Media Links** - Social platform connections

### Footer
- **Comprehensive Links** - Organized link categories
- **Newsletter Signup** - Email subscription
- **Social Media** - Platform links with icons
- **Back to Top** - Smooth scroll to top button

## 🎨 Animation & Hover Effects

### Hover Effects Implementation
```css
/* Button hover effects */
.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg;
}

/* Card hover effects */
.card-hover {
  @apply transition-all duration-300 transform hover:scale-105 hover:shadow-xl;
}
```

### Animation Libraries Used
- **Framer Motion** - For complex animations and transitions
- **CSS Transitions** - For simple hover effects
- **Tailwind Animations** - For utility-based animations

### Animation Types
1. **Fade In** - Elements appear with opacity transitions
2. **Slide Up** - Elements slide up from below
3. **Scale** - Elements grow/shrink on interaction
4. **Bounce** - Gentle bouncing effects
5. **Float** - Continuous floating animations

## 📱 Responsive Design

### Breakpoints
- **Mobile** - 320px to 768px
- **Tablet** - 768px to 1024px
- **Desktop** - 1024px and above

### Responsive Features
- **Mobile-First Design** - Built for mobile devices first
- **Flexible Grid System** - Adaptive layouts
- **Touch-Friendly** - Large touch targets
- **Readable Typography** - Scalable text sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Add `export` script to package.json
2. Configure GitHub Actions for deployment

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Google Maps Integration
To add real Google Maps functionality:
1. Get a Google Maps API key
2. Replace the placeholder in ContactForm.js
3. Add the API key to environment variables

## 📝 Customization Guide

### Adding New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.js`
3. Follow the existing component structure

### Modifying Colors
1. Update colors in `tailwind.config.js`
2. Replace color classes in components
3. Test across all sections

### Adding Animations
1. Define animations in `tailwind.config.js`
2. Use Framer Motion for complex animations
3. Apply CSS classes for simple effects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: hello@sweetdelights.com
- Phone: (555) 123-4567
- Website: [sweetdelights.com](https://sweetdelights.com)

---

**Built with ❤️ using Next.js and Tailwind CSS** 
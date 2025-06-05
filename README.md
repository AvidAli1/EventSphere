# EventSphere - Featured Events Website

A modern, responsive web application for discovering and exploring local events. Built as part of a web development internship project, this single-page application showcases upcoming events with an intuitive, mobile-first design.

## Features

### Core Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Search**: Real-time event filtering by name, category, or location
- **Modern UI**: Clean, gradient-based design with smooth animations and hover effects
- **Event Cards**: Comprehensive event information including date, time, location, and pricing
- **Category System**: Color-coded event categories (Music, Technology, Food, Adventure, Art)

### Enhanced Features
- **Animated Hero Section**: Eye-catching Lottie animations with gradient backgrounds
- **Dynamic Search**: Instant filtering without page reloads
- **Sticky Navigation**: Fixed header with smooth scroll effects
- **Interactive Elements**: Hover animations, button transitions, and visual feedback
- **Statistics Section**: Impressive metrics display (500+ Monthly Events, 50K+ Attendees)
- **Professional Footer**: Complete contact information and social media links

## Technologies Used

### Frontend Framework
- **React 18** - Component-based architecture with hooks
- **JavaScript (ES6+)** - Modern JavaScript features and syntax

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Custom CSS Animations** - Smooth transitions and hover effects
- **Responsive Design** - Mobile-first approach with Flexbox and CSS Grid

### Icons & Animations
- **Lucide React** - Beautiful, customizable SVG icons
- **Lottie React** - High-quality animations (globe animations in hero section)

### Data Management
- **JSON Data Storage** - Event information stored in `events.json`
- **React Hooks** - `useState`, `useMemo`, `useEffect` for state management

## Project Structure

```
dynamics360/
├── public/
│   ├── icon.png
│   └── search-icon.png
├── src/
│   ├── assets/
│   │   ├── globe1.json
│   │   └── globe2.json
│   ├── components/
│   │   ├── EventCard.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── data/
│   │   └── events.json
│   └── pages/
│       └── FeaturedEvents.jsx
├── package.json
└── README.md
```

## How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AvidAli1/EventSphere
   cd dynamics360
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to your given local host link to view the application

### Build for Production
```bash
npm run build
# or
yarn build
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px - 768px)
- **Tablets** (768px - 1024px)
- **Desktop screens** (1024px+)

Key responsive features:
- Collapsible mobile navigation menu
- Adaptive grid layouts (1 column on mobile, 2-3 columns on larger screens)
- Scalable typography and spacing
- Touch-friendly interactive elements

## Design Highlights

### Color Scheme
- **Primary Gradient**: Indigo to Purple (`from-indigo-600 to-purple-600`)
- **Background**: Subtle blue gradient (`from-slate-50 via-blue-50 to-indigo-100`)
- **Category Colors**: Distinct color coding for different event types

### Animation Effects
- **Fade-in animations** for event cards with staggered delays
- **Hover effects** with scale transforms and shadow changes
- **Smooth transitions** throughout the interface
- **Interactive Lottie animations** in the hero section

## Event Data Structure

Events are stored in `/src/data/events.json` with the following structure:
```json
{
  "id": 1,
  "name": "Event Name",
  "category": "Music|Technology|Food|Adventure|Art",
  "date": "2025-06-15",
  "time": "19:00",
  "location": "Venue Name, City",
  "price": "Free|$XX",
  "description": "Event description...",
  "image": "image-url"
}
```

## Key Components

### EventCard.jsx
- Displays individual event information
- Handles date/time formatting
- Category-based color coding
- Responsive image handling

### Header.jsx
- Responsive navigation with mobile menu
- Sticky positioning with backdrop blur
- Interactive hover effects

### Footer.jsx
- Comprehensive site information
- Social media links
- Contact details
- Collapsible sections for mobile

### FeaturedEvents.jsx
- Main page component
- Search functionality with real-time filtering
- Hero section with animations
- Event grid layout

## Extra Features Added

1. **Advanced Search**: Filter events by name, category, or location
2. **Lottie Animations**: Professional globe animations in hero section
3. **Interactive Statistics**: Engaging metrics display
4. **Gradient Backgrounds**: Modern visual appeal throughout
5. **Micro-interactions**: Button hover effects and smooth transitions
6. **Professional Branding**: Complete EventSphere brand identity
7. **SEO-Friendly**: Semantic HTML structure
8. **Accessibility**: Proper ARIA labels and keyboard navigation

## Live Demo

[(https://event-sphere-zeta.vercel.app/)](https://event-sphere-zeta.vercel.app/)

## Notes

- All images use placeholder services where actual event images aren't available
- The "Register Now" buttons are styled but don't include backend functionality
- Search functionality works entirely on the frontend with the provided JSON data

---

**Developed by**: Ali Ahmed  
**Submission Date**: June 5th, 2025 (around 10 pm)
**Project Type**: Web Development Internship Assignment
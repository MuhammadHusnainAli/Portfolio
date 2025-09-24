# AI Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion, showcasing the work and expertise of an AI Engineer specializing in Agentic AI, LLM Fine-tuning, and Chatbot Development.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme and gradient accents
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dynamic Content**: All portfolio data managed through a single `data.json` file
- **Interactive Components**: Hover effects, smooth scrolling, and interactive project cards
- **Toast Notifications**: User-friendly feedback system
- **Accessibility**: Built with accessibility best practices
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: CSS Modules, Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with introduction
│   ├── About.tsx        # About section with skills
│   ├── Experience.tsx   # Professional experience timeline
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Contact.tsx      # Contact form and social links
│   └── *.module.css     # Component-specific styles
├── utils/
│   └── helperFunctions.ts # Utility functions
├── assets/
│   └── images/          # Portfolio images
├── data.json            # Portfolio configuration data
├── App.tsx              # Main application component
├── index.css            # Global styles
└── main.tsx             # Application entry point
```

## 🎨 Customization

All portfolio content can be easily customized by editing the `src/data.json` file:

- **Personal Information**: Name, title, bio, contact details
- **Social Links**: LinkedIn, GitHub, Twitter
- **Skills**: Technical and soft skills
- **Experience**: Work history with achievements
- **Projects**: Featured projects with descriptions
- **Education**: Educational background
- **Certifications**: Professional certifications
- **Publications**: Research publications

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Configuration

### Adding Your Information

1. Update `src/data.json` with your personal information, experience, projects, etc.
2. Replace placeholder images in `src/assets/images/` with your actual photos
3. Update social media links and contact information
4. Customize colors and styling in the CSS files if needed

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS module file
3. Import and use in `src/App.tsx`
4. Update `src/data.json` with relevant data

## 🌐 Deployment

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### GitHub Pages
```bash
npm run deploy
```

## 🎯 Features Highlights

- **Smooth Scrolling Navigation**: Click navigation items to smoothly scroll to sections
- **Interactive Project Cards**: Click to expand and see detailed project information
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Easy access to social profiles
- **Mobile-First Design**: Optimized for mobile devices
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Animations powered by Framer Motion
- Icons from React Icons
- Fonts from Google Fonts (Inter)

---

**Note**: Remember to update the contact information, social links, and replace placeholder images with your actual content before deploying to production.





# 🧾 SoftSell — Responsive One-Page Marketing Website

A modern, responsive single-page website for **SoftSell**, a fictional software license resale startup. This project demonstrates front-end design, UI/UX execution, and clean React-based implementation using Vite.

## 📋 Project Overview

This site showcases how users can sell unused software licenses in three easy steps. It includes key marketing sections like a hero call-to-action, process explanation, value proposition, customer testimonials, and a contact/lead capture form — all wrapped in a sleek, responsive design.

## 🚀 Features Implemented

- **Hero Section**  
  - Headline, subheading, and prominent CTA button (e.g., “Sell My Licenses”)

- **How It Works**  
  - Three-step explanation: *Upload License → Get Valuation → Get Paid*  
  - Includes icons for each step for better visual guidance

- **Why Choose Us**  
  - 3–4 tiles with icons and brief text highlighting SoftSell’s benefits

- **Customer Testimonials**  
  - Two dummy reviews with name, role, and company

- **Contact / Lead Form**  
  - Fields: Name, Email, Company, License Type (dropdown), Message  
  - Front-end validation for required fields and proper formatting
 - **Chat Box /**  
  - Fields:  Message  
  - Implementd chat section by using AI api.

## 🎨 Design Choices

- **Framework**: React.js with Vite for fast development and build  
- **Styling**: Tailwind CSS for responsive, utility-first styling  
- **Font & Colors**: Clean, modern font stack with a cool-toned palette for trust and professionalism  
- **Icons**: [Heroicons](https://heroicons.com/) and simple SVGs for clarity and visual balance  
- **Responsiveness**: Fully mobile-optimized layout with intuitive structure

## ⏱️ Time Spent

- Planning & Wireframing: 1 hour  
- Component Development: 3 hours  
- Styling & Responsiveness: 2 hours  
- Form Validation & Final Testing: 1.5 hours  
- Deployment: 30 minutes  

**Total**: ~8 hours

## 📦 Tech Stack

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for deployment

## 🔗 Live Demo

➡️ [View Live Site](https://softsell-website-pi.vercel.app/)  
*(Replace with actual URL)*

## 📂 Setup Instructions

   ### 1. Create a new Vite + React project

```bash
npm create vite@latest softsell-website --template react
cd softsell-websites
```

   ### 2. Install dependencies

   ```bash
     npm install
  ```
     
   ### 3. Set up Tailwind CSS

   ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        Update tailwind.config.js to include:
        @type {import('tailwindcss').Config} 
        export default {
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            
            
            Replace the content of src/index.css with:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;


```
### 4. Run the development server
```bash 
   npm run dev
```


     

    
      
    
    
  







# Overview

This is a professional portfolio website for a portfolio designer and strategic storyteller named Makanaka Mukorombindo. The project showcases expertise in creating portfolios for high-end professionals like consultants, architects, and artisans. Built as a full-stack application with modern web technologies, it features a single-page design with smooth scrolling animations, interactive project showcases, and a modal system for detailed project views.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system featuring professional color palette and typography hierarchy
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth scroll-triggered animations, hover effects, and page transitions
- **Typography**: Multi-font system using Inter (primary), Playfair Display (headlines), and JetBrains Mono (technical details)
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **State Management**: React Query for server state management and local useState for UI interactions

## Backend Architecture
- **Server**: Express.js with TypeScript providing RESTful API structure
- **Development Tools**: Vite for fast development builds and hot module replacement
- **Database Layer**: Prepared for PostgreSQL integration with Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database interface for production

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript
- **Database**: PostgreSQL (configured via Neon Database) for production data persistence
- **Schema**: User management schema with extensible design for portfolio content
- **Migrations**: Automated database migrations using Drizzle Kit

## Design System & User Experience
- **Color Scheme**: Nature-inspired palette with green primary colors, neutral backgrounds, and professional accent colors
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Loading States**: Custom skeleton screens and loading animations for optimal perceived performance
- **Micro-interactions**: Hover effects, scale animations, and smooth transitions throughout the interface
- **Modal System**: Full-screen project detail views with backdrop blur and smooth animations

## Content Architecture
- **Project Showcase**: Structured project data with categories, technologies, problems, solutions, and results
- **Navigation**: Smooth scrolling single-page navigation with fixed header and scroll-aware styling
- **Sections**: Hero, Featured Platforms, Portfolio Grid, About (tools/skills), and Contact with social links
- **Interactive Elements**: Hover-triggered project previews and click-to-expand modal system

# External Dependencies

## UI & Design
- **Radix UI**: Complete set of accessible UI primitives for consistent component behavior
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for design system
- **Framer Motion**: Animation library for scroll-triggered effects and micro-interactions
- **React Icons**: Icon library featuring brand icons for social platforms and tools
- **Embla Carousel**: Touch-friendly carousel component for potential future content sections

## Development & Build Tools
- **Vite**: Fast build tool with hot module replacement and optimized production builds
- **TypeScript**: Static type checking for enhanced development experience and code reliability
- **ESBuild**: Fast bundling for server-side code compilation

## Database & Backend
- **Neon Database**: Serverless PostgreSQL platform for scalable database hosting
- **Drizzle ORM**: Type-safe ORM with automatic TypeScript inference and migration support
- **Express.js**: Minimal web framework for API endpoints and server-side routing

## Form Handling & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library integrated with Drizzle for type-safe data validation
- **Hookform Resolvers**: Integration layer between React Hook Form and validation schemas

## Routing & Navigation
- **Wouter**: Lightweight client-side routing for single-page application navigation
- **React Query**: Server state management with caching, synchronization, and error handling
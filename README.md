# 🚀 ScholarFlow Frontend

<div align="center">

# ScholarFlow – AI Powered Learning Management System (Frontend)

A modern AI-powered Learning Management System frontend built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The application provides dedicated dashboards for Students, Instructors, and Administrators while integrating seamlessly with the ScholarFlow Backend APIs.

---

## 🌐 Live Links

### 🖥️ Live Application

https://scholarflow-frontend-phi.vercel.app/

### ⚙️ Backend API

https://scholarflow-backend.vercel.app/

---

## 📂 Related Repository

### Backend Repository

https://github.com/xKakshil/scholarflow-backend

---

</div>

# 📖 Project Overview

ScholarFlow is a full-stack AI-powered Learning Management System (LMS) designed to simplify online education.

The frontend provides an intuitive interface for:

- Student Learning
- Instructor Course Management
- Admin Dashboard
- AI Learning Assistant
- Analytics
- Enrollment Management

The frontend communicates with the ScholarFlow backend through REST APIs.

---

# ✨ Key Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent Login

---

## 👨‍🎓 Student Module

Students can:

- Browse Courses
- Enroll in Courses
- View Purchased Courses
- Access Lessons
- Learn Course Content
- Ask Questions using AI
- View Learning Dashboard

---

## 👨‍🏫 Instructor Module

Instructors can:

- Create Courses
- Manage Courses
- Add Lessons
- View Students
- Monitor Analytics
- Track Course Performance

---

## 👨‍💼 Admin Module

Administrators can:

- Manage Users
- View Platform Courses
- Monitor Enrollments
- View Revenue Statistics
- Monitor Platform Analytics

---


# 🧪 Demo Credentials

ScholarFlow includes pre-configured accounts for testing different user roles.

> **Live Application:** https://scholarflow-frontend-phi.vercel.app/

---

## 👨‍💼 Administrator

| Field | Value |
|--------|-------|
| Name | Kakshil Kumar |
| Email | test@learner.con |
| Role | ADMIN |
| Password | 123456 |

### Features Available

- Platform Dashboard
- User Management
- Course Management
- Revenue Analytics
- Enrollment Analytics
- Platform Statistics

---

## 👨‍🏫 Instructor

| Field | Value |
|--------|-------|
| Name | Teacher |
| Email | teacher@test.com |
| Role | INSTRUCTOR |
| Password | 123456 |

### Features Available

- Create Courses
- Manage Courses
- Create Lessons
- View Students
- Instructor Analytics

---

## 👨‍🎓 Student

| Field | Value |
|--------|-------|
| Name | Student |
| Email | student@test.com |
| Role | LEARNER |
| Password | 123456 |

### Features Available

- Browse Courses
- Enroll in Courses
- Access Learning Content
- AI Learning Assistant
- My Courses

---

# 📋 Suggested Evaluation Flow

To explore the complete functionality of ScholarFlow, follow the steps below.

### 1. Login as Administrator

- View platform statistics
- Monitor revenue dashboard
- Manage users
- Browse all courses
- View enrollment analytics

---

### 2. Login as Instructor

- Create a new course
- Add lessons
- View enrolled students
- Monitor instructor analytics

---

### 3. Login as Student

- Browse available courses
- Enroll in a course
- Open the learning page
- Study course lessons
- Ask questions using the AI Learning Assistant

---

# 🤖 AI Learning Assistant

ScholarFlow integrates Google Gemini AI to provide educational assistance.

Features:

- Ask questions related to course material.
- Uses relevant course notes whenever available.
- Falls back to general AI knowledge if necessary.
- Displays referenced course content.
- Automatic retry mechanism for temporary AI failures.

---

# 🎨 User Interface

The frontend provides:

- Responsive Layout
- Sidebar Navigation
- Dashboard Cards
- Analytics Panels
- Course Cards
- Loading Indicators
- Empty States
- Toast Notifications
- Mobile Friendly Design

---

# 🛠 Tech Stack

## Framework

- Next.js 16

## Language

- TypeScript

## UI

- React
- Tailwind CSS

## State Management

- React Context API

## API Communication

- Axios

## Notifications

- React Hot Toast

## Deployment

- Vercel

---

# 🏗 Frontend Architecture

```
Browser

↓

Next.js

↓

Pages

↓

Components

↓

Context API

↓

Axios

↓

REST API

↓

ScholarFlow Backend
```

---

# 📂 Project Structure

```
scholarflow-frontend

│

├── public

├── src

│   ├── app

│   ├── components

│   ├── context

│   ├── services

│   ├── types

│   └── hooks

│

├── package.json

├── tsconfig.json

└── README.md
```

---

# 📄 Pages

## Authentication

- Login
- Register

---

## Student

- Dashboard
- Browse Courses
- My Courses
- Learning Page
- AI Assistant

---

## Instructor

- Dashboard
- My Courses
- Students
- Analytics

---

## Admin

- Dashboard
- Users
- Courses
- Revenue
- Enrollments

---

# 🔄 Application Flow

```
User

↓

Login

↓

JWT Authentication

↓

Dashboard

↓

Role Based Access

↓

API Calls

↓

Backend

↓

Database

↓

Response

↓

UI Update
```

---

# 📡 Backend Integration

The frontend communicates with the backend using Axios.

Main API groups:

- Authentication
- Student
- Instructor
- Admin
- AI

All API requests are authenticated using JWT tokens.

---

# 🔑 Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=https://scholarflow-backend.vercel.app/api
```

For local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

# ⚙️ Installation

## 1 Clone Repository

```bash
git clone https://github.com/xKakshil/scholarflow-frontend.git
```

---

## 2 Navigate

```bash
cd scholarflow-frontend
```

---

## 3 Install Dependencies

```bash
npm install
```

---

## 4 Configure Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## 5 Start Development Server

```bash
npm run dev
```

Application runs on

```
http://localhost:3001
```

(or whichever port Next.js assigns.)

---

# 🚀 Deployment

The frontend is deployed on **Vercel**.

Deployment Stack

- Vercel
- Next.js
- React
- Tailwind CSS

Production URL

```
https://scholarflow-frontend-phi.vercel.app/
```

---

# 📱 Responsive Design

ScholarFlow is designed to work across multiple devices.

Supported Devices

- Desktop
- Laptop
- Tablet
- Mobile

Responsive components include

- Sidebar
- Dashboard Cards
- Course Cards
- Analytics
- Navigation
- AI Assistant

---

# 🤖 AI Assistant Workflow

```
Student asks question

↓

Frontend sends API request

↓

ScholarFlow Backend

↓

Course Notes Retrieved

↓

Google Gemini AI

↓

Response Generated

↓

Answer Displayed
```

---

# ⚡ Performance Optimizations

The frontend includes several optimizations.

- Component-based architecture
- Lazy loading where applicable
- Optimized API requests
- Automatic retry mechanism for AI requests
- Loading indicators
- Responsive layouts
- Lightweight UI components

---

# 🎯 User Roles

## 👨‍🎓 Student

- Browse Courses
- Enroll
- Learn Lessons
- AI Tutor
- My Courses

---

## 👨‍🏫 Instructor

- Dashboard
- Create Courses
- Manage Lessons
- Analytics
- Students

---

## 👨‍💼 Admin

- Dashboard
- Users
- Courses
- Revenue
- Enrollments

---

# 🧪 Tested Functionalities

The frontend has been manually tested for:

- User Registration
- Login
- Protected Routes
- Dashboard Navigation
- Course Creation
- Lesson Creation
- Course Enrollment
- Student Learning
- AI Assistant
- Instructor Analytics
- Revenue Dashboard
- Admin Dashboard

---

# ⚠ Known Limitations

Since the application is hosted on free cloud services:

- The backend may take 20–60 seconds to wake up after inactivity.
- AI responses depend on Google Gemini Free API limits.
- Database connections may experience a brief cold-start delay.

Once active, the application responds significantly faster.

---

# 📸 Screenshots

> Add screenshots of the following pages before submission.

- Login Page
- Register Page
- Student Dashboard
- Instructor Dashboard
- Admin Dashboard
- Course Details
- AI Assistant
- Analytics
- Revenue Dashboard

---

# 🔮 Future Improvements

Planned enhancements include:

- Video Upload Support
- Assignment Submission
- Quiz Management
- Course Certificates
- Email Verification
- Password Reset
- Dark Mode
- Real-time Notifications
- AI Streaming Responses
- Semantic Search
- AI Response Caching
- Docker Deployment
- CI/CD Pipeline
- Unit Testing
- Integration Testing
- Multi-language Support

---

# 👨‍💻 Author

**Kakshil Kumar**

B.Tech Electronics Engineering

Indian Institute of Technology (BHU), Varanasi

### GitHub

https://github.com/xKakshil

### LinkedIn

https://www.linkedin.com/in/kakshil/

---

# 📄 License

This project has been developed for educational and portfolio purposes.

Feel free to explore the codebase and use it as a learning resource.

---

# 🙏 Acknowledgements

Special thanks to the technologies that made ScholarFlow possible.

- React
- Next.js
- TypeScript
- Tailwind CSS
- Axios
- Prisma
- Neon PostgreSQL
- Google Gemini AI
- Vercel

---

<div align="center">

# ⭐ ScholarFlow

### AI Powered Learning Management System

Built with ❤️ by **Kakshil Kumar**

If you found this project useful, consider giving it a ⭐ on GitHub.

</div>

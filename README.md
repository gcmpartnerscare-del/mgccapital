
# 🌍 GCM Partners – Web Platform

A dynamic, multilingual, admin-controlled CMS website for **GCM Partners**, offering investment programs and international services across multiple regions.

This platform is built for **scalability**, **content flexibility**, and **global SEO reach**, with a secure admin portal for managing blogs, testimonials, and real-time analytics.

---

## ✅ Core Features

- ✍️ **Admin-Only CMS** (Firebase Auth)
- 🌐 **Multilingual Support** (English, Arabic, French, Hausa, Yoruba, Igbo)
- 📝 **Blog + Testimonial CRUD**
- 🧠 **AI Chatbot Trained on Site Content**
- 📈 **Real-time Analytics (Google Analytics + GTM)**
- 📤 **Image/Video Uploads (Cloudinary)**
- 💬 **Form Submission w/ Review Flow (Formspree)**
- 🔐 **JWT-Free Auth via Firebase**
- 📦 **Modular React + Node.js Architecture**
- 🚀 **Deployment via Vercel + Render**

---

## 🛠 Tech Stack

| Category          | Tech Choices                                  |
|-------------------|------------------------------------------------|
| **Frontend**      | React (Vite), React Router, i18next, Axios     |
| **Auth**          | Firebase Authentication (Admin only)           |
| **Styling**       | Tailwind CSS / CSS Modules                     |
| **Backend**       | Node.js, Express.js, MongoDB (Mongoose)        |
| **Storage**       | MongoDB Atlas, Cloudinary (images/videos)      |
| **Forms**         | Formspree                                       |
| **Analytics**     | Google Tag Manager + Google Analytics           |
| **AI Assistant**  | OpenAI GPT / Botpress (optional)               |
| **Deployment**    | Frontend: Vercel / Netlify                     |
|                   | Backend: Render / Railway                      |

---

## 🧩 Project Structure

```
/mgc-client         # React frontend
  ├── /components
  ├── /pages
  ├── /context
  ├── /routes
  ├── /assets
  └── firebase.js

/mgc-server         # Express backend
  ├── /controllers
  ├── /routes
  ├── /models
  ├── /middleware
  └── server.js
```

---

## 🚦 Build Roadmap (Phases)

### ✅ Phase 1: Firebase Auth + Admin Gating
- React project setup
- Firebase auth integration
- Admin-only `/admin` route via PrivateRoute
- AuthContext to manage login state

### ✅ Phase 2: Backend API + MongoDB
- Express server setup
- Mongoose models: Blog, Testimonial
- CRUD APIs for blog/testimonial entries
- Firebase token verification middleware (optional)

### ✅ Phase 3: Cloudinary Uploads
- Secure image & video upload config
- Blog and Testimonial upload forms accept Cloudinary media URLs

### ✅ Phase 4: Admin Dashboard UI
- Blog/testimonial management UI
- Edit/delete/approve features
- Analytics dashboard view (Google Analytics)

### ✅ Phase 5: Public Website (Multilingual)
- Homepage, About, Programs, Testimonials
- i18next language toggle
- Dynamic `/programs/:id` routing

---

## ✨ Dynamic Pages

| Route                    | Description                                 |
|--------------------------|---------------------------------------------|
| `/`                      | Homepage with CTA, intro screen, chatbot    |
| `/programs/:programId`   | Dynamic program content by country          |
| `/testimonials`          | Display approved testimonials               |
| `/login`                 | Admin login page (Firebase)                 |
| `/admin`                 | Protected dashboard for managing content    |

---

## 🧪 Tools & Integrations

| Tool            | Purpose                                      |
|-----------------|----------------------------------------------|
| **Formspree**   | Serverless form handling & email review flow |
| **Cloudinary**  | Optimized media hosting                      |
| **Google Tag Manager** | Conversion tracking, button/form events |
| **OpenAI / Botpress** | Smart AI chatbot for support             |
| **Sentry**      | Optional error logging/tracing               |

---

## 🧰 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/mgc-capital-platform.git
```

### 2. Setup Frontend (React)
```bash
cd mgc-client
npm install
npm run dev
```

> Add `.env` with Firebase keys:
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
...
```

### 3. Setup Backend (Express)
```bash
cd mgc-server
npm install
npx nodemon server.js
```

> Add `.env` with Mongo URI:
```env
MONGO_URI=mongodb+srv://...
```

---

## ☁️ Deployment

### Frontend:
- Deploy `mgc-client` to [**Vercel**](https://vercel.com) or **Netlify**

### Backend:
- Deploy `mgc-server` to [**Render**](https://render.com)
- Set environment variables in Render Dashboard

---

## 🔒 Admin Auth

- Only admin accounts created in **Firebase Auth Console** can access `/admin`
- React routes are protected via `<PrivateRoute>`
- API can be optionally protected using Firebase Admin SDK token validation

---

## 📈 Analytics

Google Tag Manager (`GTM-XXXXXXX`) tracks:
- Page views
- Button clicks
- Form submissions
- Intro screen bounce/engagement

---

## 🧠 AI Chatbot (Optional)
- Trained on FAQ, service pages, and PDF brochures
- Powered by OpenAI GPT or Botpress
- Floating widget on bottom-right of site

---

## 📬 Forms

| Type           | Location                 | Handled by     |
|----------------|--------------------------|----------------|
| Inquiry Form   | Contact page             | Formspree      |
| Review Form    | Testimonial submission   | Formspree → Admin Approves |
| Newsletter     | Footer & homepage        | Formspree      |
| Booking Form   | CTA / contact            | Google Calendar / Calendly |

---

## 👨‍💻 Developer Notes

- Follow **Phase Plan** to build out features modularly
- Stick to clean, functional React + Express practices
- Frontend-only Firebase login means minimal auth complexity
- Keep MongoDB models flat, secure, and optimized
- Use environment variables for sensitive keys
- Keep Cloudinary and Firebase out of public Git commits

---

## 🧱 Status
> Frontend Environment Set up - Phase 5
> 🚧 In Development — Phases 1 & 2 Complete  
> Next Up: Cloudinary Uploads + Admin UI (Phase 3 & 4)

---

## 🤝 Contributors

- **kngDaveed** – Frontend Web Developer, Project Architect, Design Engineer 
- **GCM Partners** – Project Owners, Documentations and Legals, Requirements and Co-signed Proposal/PRD 

---

## 📜 License

Licensed under MIT – free to adapt, scale, or commercialize with permission from MGC Capital Corporation.

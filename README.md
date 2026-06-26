# OffSec Cyberpunk Portfolio - MERN Stack

A premium cyberpunk game-style portfolio for an Offensive Security Specialist / Red Team Operator / Bug Bounty Hunter.

## What is included

- React + Vite frontend
- Cyberpunk HUD UI
- Glitch hero title
- Animated scanlines and neon grid background
- Neon card hover effects
- Floating terminal panels
- Responsive design
- Replaceable hacker/profile image
- Express + MongoDB backend scaffold
- Project, report, blog, contact, and auth API routes

## Replace the hacker image

Put your own image here:

```txt
client/public/images/hacker.png
```

Keep the same filename:

```txt
hacker.png
```

Best image type: PNG with transparent background.
Recommended size: 900px height or bigger.

## Edit your portfolio details

Edit this file:

```txt
client/src/data/portfolio.js
```

Change:

- name
- email
- GitHub
- LinkedIn
- location
- title
- roles
- skills
- tools
- projects
- reports

## Run project

```bash
cd offsec-cyberpunk-portfolio
npm install
npm run install-all
npm run dev
```

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:5000
```

## Run frontend only

```bash
cd client
npm install
npm run dev
```

## Run backend only

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

## Backend environment

Create server/.env from server/.env.example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/offsec_portfolio
JWT_SECRET=change_this_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change_this_password
```

## Important legal note

Use this portfolio for ethical hacking, legal labs, CTFs, bug bounty programs, responsible disclosure, and authorized security testing only.

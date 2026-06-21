# WanderLust

## Overview

WanderLust is a full-stack accommodation listing platform for travelers and property owners. Users can explore and search stays, view mapped locations, publish their own properties, and share ratings and reviews. The project demonstrates a production-deployed Express application with persistent authentication, media uploads, and MongoDB-backed data.

**Live Demo:** [wanderlust-d291.onrender.com/listings](https://wanderlust-d291.onrender.com/listings)

## Features

- Browse accommodation listings with pricing, location, and property details
- Search destinations by title, location, or country
- Filter stays across categories such as rooms, castles, farms, camping, and forest retreats
- Register, log in, log out, and retain sessions through MongoDB
- Create, edit, and delete listings with owner-only authorization
- Upload listing images to Cloudinary
- Add star ratings and reviews with author-level deletion controls
- Geocode listing locations and display them on interactive Mapbox maps

## Tech Stack

- **Frontend:** EJS, EJS Mate, Bootstrap 5, CSS, JavaScript, Mapbox GL JS
- **Backend:** Node.js, Express.js, Mongoose, Joi, Multer
- **Database:** MongoDB Atlas, MongoDB session store
- **Authentication:** Passport.js, Passport Local, Passport Local Mongoose, Express Session
- **Deployment:** Render; Cloudinary for image storage

## Screenshots

### Home Page

(Add screenshot)

### Listing Details

(Add screenshot)

## Getting Started

### Prerequisites

- Node.js 22
- A MongoDB Atlas database
- Mapbox and Cloudinary accounts

```bash
git clone https://github.com/Sarvxsh555/WanderLust.git
cd WanderLust
npm install
npm run dev
```

Open `http://localhost:8080/listings` in your browser. Use `npm start` to run without watch mode.

## Environment Variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_access_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## Project Structure

```text
WanderLust/
├── controllers/    # Request handlers
├── init/           # Database seed scripts and data
├── models/         # Mongoose data models
├── public/         # CSS, browser JavaScript, and assets
├── routes/         # Listing, review, and user routes
├── utils/          # Error handling and category configuration
├── views/          # EJS pages, layouts, and partials
├── app.js          # Application entry point
├── middleware.js   # Authentication, authorization, and validation
└── schema.js       # Joi validation schemas
```

## Key Learnings

- Full-stack development with server-rendered MVC architecture
- Secure authentication, persistent sessions, and resource authorization
- MongoDB data modeling with related users, listings, and reviews
- RESTful CRUD routing, validation, and centralized error handling
- Integration of third-party mapping, geocoding, and cloud media services

## Author

**Sarvxsh555**

- GitHub: [github.com/Sarvxsh555](https://github.com/Sarvxsh555)
- Email: [sarveshvaranarun@gmail.com](mailto:sarveshvaranarun@gmail.com)

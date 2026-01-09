# Rental Platform (Wanderlust)

A fully functional property rental marketplace inspired by Airbnb. This full-stack web application allows users to publish property listings, view detailed descriptions, and leave reviews. It creates a robust platform for connecting hosts with potential guests.

The project is built using the **MVC (Model-View-Controller)** architectural pattern, ensuring a clean separation of concerns, scalability, and maintainability.

---

## Key Features

### Authentication & Authorization
* **User Signup & Login:** Secure authentication using **Passport.js** (Local Strategy).
* **Session Management:** Persistent login sessions using `express-session` and `connect-mongo`.
* **Role-Based Access Control:**
    * **Guests:** Can view listings and reviews.
    * **Logged-in Users:** Can create new listings and write reviews.
    * **Listing Owners:** Have exclusive rights to edit or delete their own listings.
    * **Review Authors:** Can exclusively delete their own reviews.

### Listing Management (CRUD)
* **Create:** Users can upload detailed property listings with titles, descriptions, prices, and locations.
* **Read:** Interactive dashboard to browse all listings and specific detail pages for individual properties.
* **Update:** Owners can edit listing details and update cover images.
* **Delete:** Owners can remove their listings from the platform.
* **Image Handling:** Seamless image uploads processed via **Multer** and stored directly on **Cloudinary**.

### Reviews & Ratings
* Users can leave text reviews and star ratings for properties.
* Average ratings are often calculated (implementation dependent) to help users make informed decisions.
* Reviews are linked to specific listings and user profiles.

### Security & Validation
* **Schema Validation:** Server-side data validation using **Joi** to ensure data integrity before it reaches the database.
* **Error Handling:** Custom `ExpressError` class and `wrapAsync` utilities to gracefully handle runtime errors and display user-friendly error pages.
* **Flash Messages:** Instant feedback for actions (e.g., "Listing Created!", "Welcome back!").

---

## 🛠️ Technology Stack

### Backend
* **Runtime:** [Node.js](https://nodejs.org/) - JavaScript runtime environment.
* **Framework:** [Express.js](https://expressjs.com/) - Web framework for handling routes and middleware.
* **Database:** [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/)) - NoSQL database for flexible data modeling.

### Frontend
* **Templating Engine:** [EJS](https://ejs.co/) (Embedded JavaScript) with `ejs-mate` for layouts/partials.
* **Styling:** CSS3, Bootstrap (for responsive grid and UI components).

### Tools & Libraries
* **Authentication:** `passport`, `passport-local`, `passport-local-mongoose`.
* **Image Storage:** `cloudinary`, `multer-storage-cloudinary`.
* **Validation:** `joi`.
* **Session Store:** `connect-mongo`.

---

## Project Structure

```text
├── controllers/      # Logic for handling requests (Listings, Reviews, Users)
├── init/             # Database initialization and seeding scripts
├── models/           # Mongoose schemas (Listing, Review, User)
├── public/           # Static assets (CSS, Client-side JS, Images)
├── routes/           # Express routes separated by resource
├── utils/            # Helper functions (Error handling, Async wrappers)
├── views/            # EJS templates for the UI
├── app.js            # Main entry point and application configuration
├── cloudConfig.js    # Cloudinary storage configuration
├── middleware.js     # Custom middleware (Authentication, Validation)
└── package.json      # Project metadata and dependencies

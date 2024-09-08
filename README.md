# ImageGenie (AI Image Generator)

## Overview
The AI Image Generator is a web application that allows users to authenticate themselves to generate amazing and stunning images using the Stability API. Users can share images (posts) in the Community (Open Gallery), see generated posts along with its prompts, download images, and delete posts.

## Key Features
- **AI-Powered Image Generation**: Users can create diverse, high-quality images tailored to their needs using the Stability API.
- **Images Database**: A NoSQL (MongoDB) database of posts is maintained, including details such as image, prompt, and title. Users can search for posts by title or prompt.
- **Community Interaction**: Share your generated images with the community, download images from others, and delete any posts as needed.
- **User-Friendly Interface**: Enjoy a simple and intuitive interface by adjusting parameters to fine-tune the generated images, ensuring they align with your vision.

## Technologies Used

### Front End
- **ReactJS**
- **Tailwind CSS**

### Back End
- **NodeJS**: Handles server-side logic, processes user requests, and interacts with the database.
- **MongoDB (NoSQL)**: Stores all data related to posts (title, images, and prompts).
- **Stability and Cloudinary APIs**: Handles requests for generating images and managing image storage and delivery.

## Getting Started

### Prerequisites
- **NodeJS**
- **MongoDB Compass**
- **Stability API Secret Key**

### Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/ImageGenie.git
   cd ImageGenie
2. Create a `.env` file in the root directory with the following environment variables:

   ```env
   MONGODB_URL=Your_Connection_String
   STABILITY_API_KEY=Your_StabilityAI_API_Key
   CLOUDINARY_CLOUD_NAME=Your_Cloudinary_Cloud_Name
   CLOUDINARY_API_KEY=Your_Cloudinary_API_Key
   CLOUDINARY_API_SECRET=Your_Cloudinary_API_Secret

### Usage

1. Run the Frontend:
   ```bash
   npm run dev
2. Run the Backend Server:
   ```bash
   npm start
3.Sign up or log in using your Google Account.
4.Now, generate your stunning and amazing images!

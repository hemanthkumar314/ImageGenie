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

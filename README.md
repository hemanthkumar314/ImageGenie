<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImageGenie: An AI Image Generator</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2, h3 { color: #2c3e50; }
        ul { padding-left: 20px; }
        img { max-width: 100%; border-radius: 5px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>ImageGenie (An AI Image Generator)</h1>
    
    <h2>Overview</h2>
    <p>The AI Image Generator is a web application that allows users to authenticate themselves to generate Amazing and Stunning images using the Stability API. Users can share images (posts) in the Community (Open Gallery), see generated posts along with their prompts, download images, and delete posts.</p>
    
    <h2>Key Features</h2>
    <ul>
        <li><strong>AI-Powered Image Generation:</strong> Users can create diverse, high-quality images tailored to their needs using the Stability API.</li>
        <li><strong>Images Database:</strong> A NOSQL (MongoDB) database of posts is maintained, including details such as image, prompt, and title. Users can search for posts by title or prompt.</li>
        <li><strong>Community Interaction:</strong> Share your generated images with the community, download images from others, and delete any posts as needed.</li>
        <li><strong>User-Friendly Interface:</strong> Enjoy a simple and intuitive interface by adjusting parameters to fine-tune the generated images, ensuring they align with your vision.</li>
    </ul>
    
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Front End</strong>
            <ul>
                <li>ReactJS</li>
                <li>Tailwind CSS</li>
            </ul>
        </li>
        <li><strong>Back End</strong>
            <ul>
                <li><strong>NodeJS:</strong> Handles server-side logic, processes user requests, and interacts with the database.</li>
                <li><strong>MongoDB (NOSQL):</strong> Stores all data related to posts (title, images, and prompts).</li>
                <li><strong>Stability and Cloudinary APIs:</strong> Handles requests for generating images and managing image storage and delivery.</li>
            </ul>
        </li>
    </ul>
    
    <h2>Getting Started</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>NodeJS</li>
        <li>MongoDB Compass</li>
        <li>Stability API Secret Key</li>
    </ul>
    
    <h3>Installation</h3>
    <ol>
        <li>Clone the Repository:
            <img src="/api/placeholder/400/320" alt="Git clone command" />
        </li>
        <li>Create a .env file in the root directory with the following environment variables:
            <img src="/api/placeholder/400/320" alt="Environment variables" />
        </li>
    </ol>
    
    <h3>Usage</h3>
    <ol>
        <li>Run the Frontend (Command: npm run dev). Open your Browser and navigate to http://localhost:5173</li>
        <li>Run the Backend (Command: npm start). Open your Browser and navigate to http://localhost:8080</li>
        <li>Sign up or log in using your Google Account.</li>
        <li>Now Generate your interested stunning and amazing images</li>
    </ol>
</body>
</html>

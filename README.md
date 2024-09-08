<h1>ImageGenie(AI Image Generator)</h1>
<h2>Overview</h2>
<div>
    The AI Image Generator is a web application that allows users authenticate themselves to generate Amazing and Stunning images using the Stability API. Users can share images(posts) in the Community (Open Gallery), see generated posts along with its prompts, download images, and delete posts. 
</div>
<h2>Key Features</h2>
<div>
    <ul>
        <li><b>AI-Powered Image Generation :</b> Users can create diverse, high-quality images tailored to your needs using the Stability API. </li>
        <li><b>Images Database :</b> A NOSQL(MongoDB) database of posts is maintained, including details such as image,prompt and title.So,Users can search for posts by title or prompt.</li>
        <li><b>Community Interaction :</b> Share your generated images with the community, download images from others, and delete any posts as needed.</li>
        <li><b>User-Friendly Interface :</b> Enjoy a simple and intuitive interface by adjusting parameters to fine-tune the generated images, ensuring they align with your vision.</li>
    </ul>
</div>
<h2>Technologies Used</h2>
<div>
    <ul>
        <li><b>Front End</b>
            <ul>
                <li><b>ReactJS</b></li>
                <li><b>Tailwind CSS</b></li>
            </ul>
        </li>
        <li><b>Back End</b>
            <ul>
                <li><b>NodeJS :</b> Handles server-side logic, processes user requests, and interacts with the database.</li>
                <li><b>MongoDB(NOSQL) :</b> Stores all data related to posts(title,images and prompts).</li>
                <li><b>Stability and Cloudinary APIs :</b> handles requsets for generating images and managing image storage and delivery.</li>
            </ul>
        </li>
    </ul>
</div>
<h2>Getting Started</h2>
<div>
    <h3>Prerequisites</h3>
    <ul>
        <li><b>NodeJS</b></li>
        <li><b>MongoDB Compass</b></li>
        <li><b>Stability API Secret Key</b></li>
    </ul>
    <h3>Installation</h3>
    <div class="step">
        <div class="step-number">1. Clone the Repository:</div>
        <pre style="background-color: #1e1e1e; padding: 10px; border-radius: 5px; font-size: 0.9em;"><code style="color: #ffa500;">git clone https://github.com/yourusername/ImageGenie.git
cd ImageGenie</code></pre>
            <div class="step-number">2. Create a .env file in the root directory with the following environment variables:</div>
            <pre style="background-color: #1e1e1e; padding: 10px; border-radius: 5px; font-size: 0.9em;"><code style="color: #4ec9b0;">MONGODB_URL=Your_Connection_String
STABILITY_API_KEY=Your_StabilityAI_API_Key
CLOUDINARY_CLOUD_NAME=Your_Cloudinary_Cloud_Name
CLOUDINARY_API_KEY=Your_Cloudinary_API_Key
CLOUDINARY_API_SECRET=Your_Cloudinary_API_Secret</code></pre>
        </div>
        <h3>Usage</h3>
        <div>
            <div>1. Run the Frontend(Command : npm run dev).Open your Browser and navigate to http://localhost:5173</div>
            <div>2. Run the Backend(Command : npm start).Open your Browser and navigate to http://localhost:8080</div>
            <div>3. Sign up or log in using your Google Account.</div>
            <div>4. Now Generate your interested stunning and amazing images</div>
        </div>
    </div>

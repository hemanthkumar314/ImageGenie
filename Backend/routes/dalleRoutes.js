// import express, { response } from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from 'openai';

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
// });

// router.route('/').get((req, res) => {
//   res.send("Hello OpenAI");
// });

// router.route('/').post(async (req, res) => {
//     try {
//       const { prompt } = req.body;
  
//       const aiResponse = await openai.images.generate({
//         prompt,
//         n: 1,
//         size: '1024x1024',
//         response_format: 'b64_json',
//       });
  
//       const image = aiResponse.data[0].b64_json;
  
//       res.status(200).json({ photo: image });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error?.message || 'Something went wrong');
//     }
//   });

// export default router;

import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.send("Hello Stable Diffusion API");
});

router.route('/').post(async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await fetch(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      }
    );

  
    const responseData = await response.json();
    const image = responseData.artifacts[0].base64;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Error in image generation:', error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
});

export default router;
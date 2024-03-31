const {VertexAI} = require('@google-cloud/vertexai');

/**
 * TODO(developer): Update these variables before running the sample.
 */
async function sendMultiModalPromptWithVideo(
  projectId = 'gemini-test-418822',
  location = 'us-central1',
  model = 'gemini-1.0-pro-vision',
  // image = 'gs://pleasepleasework/image1.jpeg',
  // mimeType = 'image/jpeg'
) {
  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({project: projectId, location: location});

  const generativeVisionModel = vertexAI.getGenerativeModel({
    model: model,
  });

  // Pass multimodal prompt
  const request = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            fileData: {
              fileUri: 'gs://pleasepleasework/IMG_1872.mp4',
              mimeType: 'video/mp4',
            },
          },
          {
            text: 'What is in the video briefly?',
          },
        ],
      },
    ],
  };

  // Create the response
  const response = await generativeVisionModel.generateContent(request);
  // Wait for the response to complete
  const aggregatedResponse = await response.response;
  // Select the text from the response
  const fullTextResponse =
    aggregatedResponse.candidates[0].content.parts[0].text;

  console.log(fullTextResponse);
}

sendMultiModalPromptWithVideo();




//   // Instantiate the model
//   const generativeVisionModel = vertexAI.getGenerativeModel({
//     model: model,
//   });

//   // For images, the SDK supports both Google Cloud Storage URI and base64 strings
//   const filePart = {
//     fileData: {
//       fileUri: image,
//       mimeType: mimeType,
//     },
//   };

//   const textPart = {
//     text: 'what is shown in this image?',
//   };

//   const request = {
//     contents: [{role: 'user', parts: [filePart, textPart]}],
//   };

//   console.log('Prompt Text:');
//   console.log(request.contents[0].parts[1].text);

//   console.log('Non-Streaming Response Text:');
//   // Create the response stream
//   const responseStream = await generativeVisionModel.generateContent(request);
//   console.log('here');
//   // Wait for the response stream to complete
//   const aggregatedResponse = await responseStream.response;

  

//   // Select the text from the response
//   const fullTextResponse =
//     aggregatedResponse.candidates[0].content.parts[0].text;

//   console.log(fullTextResponse);
// }

// createNonStreamingMultipartContent();

// test


// const { VertexAI } = require("@google-cloud/vertexai");

// const projectId = "gemini-test-418822";
// const location = "us-central1";

// const vertexAI = new VertexAI({ project: projectId, location: location });

// async function run() {
//   const model = vertexAI.preview.getGenerativeModel({ model: "gemini-1.0-pro-vision" });
  
  
//   const request = {
//     contents: [{ role: "user", parts: [{ text: "give me a list of 5 fruits" }] }],
//   };




//   const result = await model.generateContent(request);
//   const response = await result.response;

//   console.log(response.candidates[0].content.parts[0].text);
// }

// run();


///////////////

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const fs = require("fs");
// const dotenv = require('dotenv').config()
// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY.replace(/\n/g, ''));

// // Converts local file information to a GoogleGenerativeAI.Part object.
// function fileToGenerativePart(path, mimeType) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType
//     },
//   };
// }

// async function run() {
//   // For text-and-image input (multimodal), use the gemini-pro-vision model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const prompt = "describe the provided images";

//   const imageParts = [
//     fileToGenerativePart("image1.jpeg", "image/jpeg"),
//     fileToGenerativePart("image2.jpeg", "image/jpeg"),
//   ];

//   const result = await model.generateContent([prompt, ...imageParts]);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

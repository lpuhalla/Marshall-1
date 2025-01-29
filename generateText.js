// Install the transformers library
// npm i @huggingface/transformers

import { pipeline } from '@huggingface/transformers';

// Function to load the pipeline and generate text
async function generateText() {
    // Allocate pipeline
    const pipe = await pipeline('text-generation', 'lpuhalla/Marshall-1');

    // Generate text using the pipeline
    const result = await pipe('Once upon a time');
    console.log(result);
}

// Call the function to generate text
generateText();

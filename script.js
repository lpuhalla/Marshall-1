async function loadModel() {
    // Load the model from Hugging Face
    window.generator = await window.Transformers.pipeline('text-generation', 'lpuhalla/Marshall-D');
}

async function generateText() {
    const prompt = document.getElementById('inputText').value;
    const result = await window.generator(prompt, { max_length: 50 });
    document.getElementById('output').innerText = result[0].generated_text;
}

// Load the model when the page starts
loadModel();

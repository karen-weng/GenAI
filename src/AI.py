from flask import Flask, request, jsonify
import vertexai
from vertexai.generative_models import GenerativeModel, GenerationConfig
from flask_cors import CORS

app = Flask(__name__)
project_id = "genai-418820"  # Replace with your project ID
location = "us-east4"
temperature = 0.5

CORS(app)

def generate_text(prompt):
  vertexai.init(project=project_id, location=location)
  text_generation_model = GenerativeModel("gemini-1.0-pro")
  parameters = GenerationConfig(
    temperature=0.9,          # higher = more creative (default 0.95)
    top_p=0.8,                # higher = more random responses, response drawn from more possible next tokens (default 0.95)
    top_k=40,                 # higher = more random responses, sample from more possible next tokens (default 40)
    max_output_tokens=8191,
  )
  responses = text_generation_model.generate_content(prompt, generation_config=parameters, stream=True)
  return_string = ""
  for response in responses:
    return_string += response.text
  return return_string  # Get the first generated response

@app.route('/generate', methods=['POST'])
def generate():
  prompt = request.json.get('prompt')
  if prompt:
      generated_text = generate_text(prompt)
      return jsonify({'text': generated_text})
  else:
      return jsonify({'error': 'Missing prompt in request'}), 400  # Bad request

if __name__ == '__main__':
  app.run(host='localhost', port=5000, debug=True)
import base64
import io

import numpy as np
import pandas as pd
import tensorflow as tf
from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load datasets
leaf_df = pd.read_csv('leaf.csv')  # Replace with your actual path
plant_df = pd.read_csv('plant.csv')  # Replace with your actual path

# Create mappings
leaf_class_names = leaf_df['plant_name '].tolist()
leaf_class_uses = leaf_df['features'].tolist()
leaf_scientific_names = leaf_df['scientific_name'].tolist()
leaf_description = leaf_df['description'].tolist()

plant_class_names = plant_df['Plant_name'].tolist()
plant_class_uses = plant_df['uses'].tolist()
plant_scientific_names = plant_df['Scientific_name'].tolist()
plant_description=plant_df['Description'].tolist()

def preprocess_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes))
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    print("Received a request at /predict")
    model_type = request.form.get('model_type')  # 'leaf' or 'plant'
    print(f"Model Type: {model_type}")
    file = request.files['image']
    image_bytes = file.read()
    print(f"Received image: {file.filename}")
    processed_image = preprocess_image(image_bytes)

    if model_type == 'leaf':
        model = tf.keras.models.load_model('/Users/bhupanimounika/leaf_classifier_2.h5')
        class_names = leaf_class_names
        class_uses = leaf_class_uses
        scientific_names = leaf_scientific_names
        description=leaf_description
    elif model_type == 'plant':
        model = tf.keras.models.load_model('/Users/bhupanimounika/plant_classifier_2.h5')
        class_names = plant_class_names
        class_uses = plant_class_uses
        scientific_names = plant_scientific_names
        description=plant_description
    else:
        return jsonify({"error": "Invalid model type specified."}), 400

    prediction = model.predict(processed_image)
    predicted_class_index = np.argmax(prediction, axis=1)[0]
    predicted_label = class_names[predicted_class_index]
    predicted_uses = class_uses[predicted_class_index]
    predicted_scientific_name = scientific_names[predicted_class_index]
    predicted_description=description[predicted_class_index]

    # Convert the image to base64
    encoded_image = base64.b64encode(image_bytes).decode('utf-8')

    return jsonify({
        "label": predicted_label,
        "uses": predicted_uses,
        "scientific_name": predicted_scientific_name,
        "description":predicted_description,
        "image": encoded_image
    })

if __name__ == '__main__':
    app.run(debug=True)
    app.run(debug=True)

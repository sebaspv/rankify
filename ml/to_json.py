'''
Translate a trained .h5 model to JSON to use with tensorflow.js
'''
from tensorflowjs.converters import save_keras_model
from tensorflow.keras.models import load_model

model_name = "industry_classifier"
model_path = "./models/" + model_name + ".h5"
# load the keras model
model = load_model(model_path)
# transform and save as JSON
json_path = "./json_models/" + model_name + '.json'
save_keras_model(model, json_path)
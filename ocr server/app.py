import os, logging
from flask import Flask, request, jsonify
from ocr import process_image

app=Flask(__name__)

@app.route('/ocr', methods=["POST"])
def ocr():
        url = request.json['image_url']
        if 'jpg' in url:
            output = process_image(url)
            return jsonify({"output": output})
        else:
            return jsonify({"error": "only .jpg files, please"})

if __name__=="__main__":
    app.run(debug=True)

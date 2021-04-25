Install the requirements using the run.sh file.

Run the server application using $ python app.py.

In another terminal, enter the following command to get the OCR result: 

   $ curl -X POST http://localhost:5000/ocr -d '{"image_url": "<your image file path>"}' -H "Content-Type: application/json"

Only JPG files are accepted for OCR.

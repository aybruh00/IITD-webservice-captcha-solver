import pytesseract
import urllib
from PIL import Image, ImageFilter
import numpy as np

def process_image(path):
    image=Image.open(path)
    image.filter(ImageFilter.SHARPEN)
    return pytesseract.image_to_string(image)

def _get_image(url):
    return Image.open(StringIO(requests.get(url).content))


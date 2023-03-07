from PIL import Image
from PIL.ExifTags import TAGS

image_file = 'assets\python\yahkâskwan_mîkiwahp(lighttipi)02.JPG'
image = Image.open(image_file)

exif = {}

for tag, value, in image._getexif().items():
    if tag in TAGS:
        exif[TAGS[tag]] = value

print(exif)

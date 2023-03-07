from PIL import Image
from PIL.ExifTags import TAGS

image_file = 'assets\python\yahkâskwan_mîkiwahp(lighttipi)02xxx.JPG'
my_img = Image.open(image_file)

exif_data = my_img._getexif()

for tagID in exif_data:
    # get the name of the tag
    tag = TAGS.get(tagID, tagID)
    data = exif_data.get(tagID)

    print(f"{tag}: {data}")

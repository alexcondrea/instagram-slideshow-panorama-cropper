# instagram-slideshow-panorama-cropper
Crop panorama fotos into carousel slices for instagram using the power of javascript

## How it works
Keep in mind that right now this script is only able to slice a panorama image in 5 pieces 
each being 1080px in size. If you need other scenarios, feel free to change the code so it
fits your needs.

## How to use

1. Clone the repository
2. Run `npm run tsc`
3. Start `./build/app.js /path/to/your/image`

## Contributing
If you would like to contribute I would appreciate it a lot.

## What is missing

- A comander to accept width, height, number of chunks and/or chunk size as parameters
- Check if the width is a multiple of the height
- Check for arguments plausibility
- Integrate express so it can we used with an API
- Publish as an npm package

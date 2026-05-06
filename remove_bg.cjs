const { Jimp } = require('jimp');

async function process() {
  const image = await Jimp.read('public/2026-05-06_16-31.jpg');
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // Si el pixel es muy cercano a blanco puro
    if (red > 230 && green > 230 && blue > 230) {
      // Hacemos el canal alpha 0 (transparente)
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await image.write('public/logo-transparent.png');
  console.log('Done!');
}
process();

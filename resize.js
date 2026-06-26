const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'public', 'gallery'),
  path.join(__dirname, 'public', 'wedding')
];

async function resizeImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
      
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      // If image is larger than 1MB, resize it
      if (stat.size > 1024 * 1024) {
        console.log(`Resizing ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        const tempPath = filePath + '.tmp';
        try {
          await sharp(filePath)
            .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 80 }) 
            .toFile(tempPath);
            
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
        } catch (e) {
          console.error(`Error resizing ${filePath}:`, e);
        }
      }
    }
  }
  console.log('Done resizing images.');
}

resizeImages().catch(console.error);

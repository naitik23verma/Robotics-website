#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

// Image URLs and their corresponding local paths
const images = [
  // Hero section images
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f",
    path: "public/images/hero/robot-main-bg.png",
    description: "Main robot blueprint background",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/6e46b4cf75136dd5e44caaa903a48573b2a40909",
    path: "public/images/hero/robot-right-side.png",
    description: "Robot blueprint on the right side",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/cf4f1aced408cc9422d231e2950986152b9dd48a",
    path: "public/images/hero/robot-top-left.png",
    description: "Small decorative robot element (top left)",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/dd60f8e45dbc5e9321c41ce8f864ba1faf662d51",
    path: "public/images/hero/robot-top-center.png",
    description: "Small decorative robot element (top center)",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/d9bfd6da4f7ea802a85d85a40f9d6ae0eed9b4ed",
    path: "public/images/hero/robot-center-left.png",
    description: "Small decorative robot element (center left)",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/178a4ea556bce9319a97f9a14ac9077e9358a5da",
    path: "public/images/hero/robot-top-right.png",
    description: "Small decorative robot element (top right)",
  },
  // Other section images
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/80a18452a4ecf699b1d02202b37519eb50ebe39f",
    path: "public/images/testimonials/testimonial-bg.png",
    description: "Testimonials background decoration",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/494adaa18d29a7b38394519ef3afb10ede2ddaa0",
    path: "public/images/projects/project-bg-1.png",
    description: "Projects background element 1",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/be3d56e4868fe021516169bdb957e5c9be275127",
    path: "public/images/projects/project-bg-2.png",
    description: "Projects background element 2",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/dc954d80bb382046a768c17e994fc2185e53642a",
    path: "public/images/events/event-bg.png",
    description: "Events background decoration",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/8223e8f6095a50a237f723f12f522c16f5b10b8b",
    path: "public/images/achievements/achievement-icon.png",
    description: "Achievement decoration icon",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/f14959dd131549e409467ab8a03c4fd0436e4d72",
    path: "public/images/footer/footer-bg-1.png",
    description: "Footer background element 1",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/4b9574484a3b56f17db1373b3267af0814b0c59b",
    path: "public/images/footer/footer-bg-2.png",
    description: "Footer background element 2",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/84366b6c6f3ca33deccc2841234afc3e374289ab",
    path: "public/images/footer/footer-bg-3.png",
    description: "Footer background element 3",
  },
  {
    url: "https://api.builder.io/api/v1/image/assets/TEMP/44e6b96006c2063186188e1cdb7da46198c2e1a6",
    path: "public/images/gallery/gallery-item-1.png",
    description: "Gallery showcase item",
  },
];

// Function to download a single image
function downloadImage(url, filepath, description) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(
              `Failed to download ${description}: HTTP ${response.statusCode}`,
            ),
          );
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✅ Downloaded: ${description} -> ${filepath}`);
          resolve();
        });

        file.on("error", (err) => {
          fs.unlink(filepath, () => {}); // Delete the file if error
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log("🚀 Starting image download process...\n");

  let successful = 0;
  let failed = 0;

  for (const image of images) {
    try {
      await downloadImage(image.url, image.path, image.description);
      successful++;
    } catch (error) {
      console.error(
        `❌ Failed to download ${image.description}:`,
        error.message,
      );
      failed++;
    }
  }

  console.log(`\n📊 Download Summary:`);
  console.log(`   ✅ Successful: ${successful}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📁 Images saved to: public/images/`);

  if (successful > 0) {
    console.log(`\n🎉 Images are now available locally!`);
    console.log(
      `   To use local images, update your components to use the paths in public/images/`,
    );
    console.log(`   Example: src="/images/hero/robot-main-bg.png"`);
  }
}

// Run the download process
downloadAllImages().catch(console.error);

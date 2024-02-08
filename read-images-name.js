const fs = require("fs");
// const path = ".src/assets/images/laptops";

const FOLDER_IMAGES = [];

fs.readdirSync("./src/assets/images/laptops/laptop-gaming").forEach((file) => {

    FOLDER_IMAGES.push(file)
//   console.log(file)
})
console.log(FOLDER_IMAGES)
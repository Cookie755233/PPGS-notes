<%*
const altText = await tp.system.prompt("Alt text");

// Get all files in the vault and filter for images in /static/images/
const imageFiles = app.vault.getFiles().filter(f => f.path.startsWith("static/images/") && f.name.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i));

// Build a list of just filenames for the suggester
const fileNames = imageFiles.map(f => f.name);

// Show a fuzzy search picker
const selected = await tp.system.suggester(fileNames, imageFiles, true, "Pick an image");

const markdown = `![${altText}](/images/${selected.name} "${altText}")`;
tR += markdown;
_%>
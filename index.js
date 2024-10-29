/* fs module is used to read and write files */
// const fs = require("fs");

// /* read content from file, gives error if not exists */
// /* node follows error first callback
// (error, data) => { if(error) {} else {} } */

// fs.readFile("file.txt", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log(data);
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// /* if file not exist, it will create it and write */
// const content = "Hello, World!";
// fs.writeFile("example.txt", content, "utf-8", (err) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log("File created");
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// /* rename existing file, gives error if not exists */
// fs.rename("example.txt", "example2.txt", (err) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log("File renamed");
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

/* delete file if exists, gives error if not exists */
// fs.unlink("example2.txt", (err) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log("File deleted");
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// fs.stat("file.txt", (err, stats) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		/*  size in bytes */
// 		console.log(stats);
// 		console.log("FIle size:", stats.size);
// 		console.log("Is directory:", stats.isDirectory());
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// /* create folder/directory */
// const directoryName = "my-directory";
// fs.mkdir(directoryName, (err) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log("Directory created");
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// /* remove directory, gives error is not exists */
// const directoryName = "my-directory";
// fs.rmdir(directoryName, (err) => {
// 	if (err) {
// 		console.log("error", err);
// 		return;
// 	} else {
// 		console.log("Directory deleted");
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

// /* check if dir folder exists */
// const directoryPath = "./dir";
// if (fs.existsSync(directoryPath)) {
// 	console.log("Directory exists");
// } else {
// 	console.log("The directory does not exist");
// }

/* --------------------------------------------------------------------------------------------------------------------------------- */

// const path = require("path")

// const fullPath = path.join("folder","subfolder","file.txt")
// console.log(fullPath)

// const absolutePath = path.resolve("folder","subfolder","file.txt")
// console.log(absolutePath)

// const fileName = path.basename('./dir/filename.txt')
// console.log(fileName)

// const dirName = path.dirname('/path/to/filename.txt')
// console.log(dirName)

// const pathInfo = path.parse('/path/to/filename.txt')
// console.log(pathInfo)

// /* .. means one level up which means path */
// const normalizePath = path.normalize("/path/to/../filename.txt")
// console.log(normalizePath)

/* --------------------------------------------------------------------------------------------------------------------------------- */

/* copying from one file to another */
const fs = require("fs");

const sourceFilePath = "./dir/file1.txt";
const destinationFilePath = "./file2.txt";

/* create a readable stream */
const readStream = fs.createReadStream(sourceFilePath);

/* create a writable stream */
const writeStream = fs.createWriteStream(destinationFilePath);

/* pipe the data */
readStream.pipe(writeStream);

readStream.on("error", (err) => {
	console.log("Error reading file", err.message);
});

readStream.on("end", () => {
	console.log("File reading completed");
});

writeStream.on("error", (err) => {
	console.log("Error writing file", err);
});

/* --------------------------------------------------------------------------------------------------------------------------------- */

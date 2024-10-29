/* 
fs module is used to read and write files 

The fs module in Node.js stands for "File System," and it provides a way to work with the file system on your computer or server.
It allows you to read from and write to files, manipulate directories, perform file operations, and more

Most fs module functions come in both synchronous and asynchronous versions.
The asynchronous versions (e.g., fs.readFile()) allow non-blocking file operations,
while synchronous versions (e.g., fs.readFileSync()) block the Node.js event loop until the operation is complete.

Asynchronous methods are typically preferred in Node.js to maintain the application's responsiveness.

node follows error first callback
(error, data) => { if(error) {} else {} }
*/

// const fs = require("fs");

// /* read content from file, gives error if not exists */
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

// /* delete file if exists, gives error if not exists */
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

// /* fs.existsSync() is a synchronous method, so it can block the Node.js event loop.
// an asynchronous approach, fs.access() method */
// const filePath = "./dir";
// fs.access(filePath, fs.constants.F_OK, (err) => {
// 	if (err) {
// 		console.log(`The path "${filePath}" does not exist.`);
// 	} else {
// 		console.log(`The path "${filePath}" exists.`);
// 	}
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

/* 
The path module in Node.js provides utilities for working with file and directory paths. 
It's an essential module when dealing with file system operations and path manipulation in your Node.js applications.

File path formats differ between operating systems. 
For instance, Windows uses backslashes (\) while POSIX (Linux, macOS) uses forward slashes (/). 
The path module abstracts these differences, allowing you to write code that works across all platforms without
worrying about the underlying file system differences. 
*/

const path = require("path")

/* 
joins multiple path segments into a single path string, taking care of platform-specific path separators 
(e.g., backslashes on Windows and forward slashes on Unix-like systems) 
*/
// const fullPath = path.join("folder","subfolder","file.txt")
// console.log(fullPath)

// /* Resolves an absolute path from multiple path segments, starting from the root directory */
// const absolutePath = path.resolve("folder","subfolder","file.txt")
// console.log(absolutePath)

// /* Return the last portion of a path. Often used to extract the file name from a fully qualified path */
// const fileName = path.basename('./dir/filename.txt')
// console.log(fileName)

// /* Returns the directory name of a path */
// const dirName = path.dirname('/path/to/filename.txt')
// console.log(dirName)

// /* Parses a path string into an object with properties like root, dir, base, name, and ext */
// const pathInfo = path.parse('/path/to/filename.txt')
// console.log(pathInfo)

// /* .. means one level up which means path. Normalizes a path by resolving '..' and '.' segments and converting
// slashes to the appropriate platform format */
// const normalizePath = path.normalize("/path/to/../filename.txt")
// console.log(normalizePath)

// /* Checks if a path is an absolute path. */
// const isAbsolute = path.isAbsolute('/path/to/file.txt');
// console.log(isAbsolute)

/* --------------------------------------------------------------------------------------------------------------------------------- */

/* 
copying from one file to another 

Streams are collections of data that might not be available all at once and don't have to fit in memory. 
They allow handling of reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way

Like in video streams, A portion of the video is buffered (pre-loaded) and played while the next portion is being downloaded. 
This approach ensures a smooth viewing experience without requiring the entire file to be downloaded first.
*/
// const fs = require("fs");

// const sourceFilePath = "./dir/file1.txt";
// const destinationFilePath = "./file2.txt";

// /* create a readable stream */
// const readStream = fs.createReadStream(sourceFilePath);

// /* create a writable stream */
// const writeStream = fs.createWriteStream(destinationFilePath);

// /* 
// pipe the data from the source stream to the destination stream, effectively copying the file.
// It sets up error event listeners on both the source and destination streams to handle any errors that may occur during the copy process.
// It sets up a finish event listener on the destination stream to log a success message when the copy is complete 
// */
// readStream.pipe(writeStream);

// readStream.on("error", (err) => {
// 	console.log("Error reading file", err.message);
// });

// readStream.on("end", () => {
// 	console.log("File reading completed");
// });

// writeStream.on("error", (err) => {
// 	console.log("Error writing file", err);
// });

/* --------------------------------------------------------------------------------------------------------------------------------- */

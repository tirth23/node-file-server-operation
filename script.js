/* Server-side development using the http module in Node.js allows you to create a basic HTTP server to handle incoming requests and 
send responses. */

const http = require("http");

/* Create the HTTP Server: Inside the callback function, you can handle incoming HTTP requests.
The req object represents the request, and the res object is used to send the response back to the client */
const server = http.createServer((req, res) => {
	// /*  Set response header */
	// res.setHeader("Content-Type", "text/plain");
	// /* Write response content body of an HTTP response should be a string or Buffer, basically 
  //     in a format that can be transmitted over the network.*/
	// res.write("Plain Text");
	// /* End the response */
	// res.end();

	// res.setHeader("Content-Type", "text/html");
	// res.write(
	// 	"<html><head><title>My First Node Server</title></head><body><h1>Welcome to my first Node Server</h1></body></html>"
	// );
	// res.write("<h2>My name is Node</h2>");
	// res.write("<h3>Node is super cool</h3>");
	// res.end();

	res.setHeader("Content-Type", "application/json");
	const jsonData = {
		message: "Hello World xdgvs",
		date: new Date(),
	};
	const jsonResponse = JSON.stringify(jsonData);
	res.write(jsonResponse);
	res.end();
});

/* specify the port and host (usually 'localhost' for development) on which your server will listen for incoming requests */
const port = 3000;
const host = "localhost";

/* start the server by calling the server.listen() method. This will start listening for incoming HTTP requests 
on the specified port and host. */
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});


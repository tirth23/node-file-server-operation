## Nodejs
### Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code on the server. It was created by Ryan Dahl and first released in 2009. Node.js is built on the V8 JavaScript engine, which is also used in Google Chrome, and it provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable and high-performance network applications.

## Why use nodejs for web server
### Node.js is a popular choice for web servers, especially in scenarios involving heavy I/O operations and small server requirements.
### Node.js is designed around a non-blocking, event-driven architecture. This means it can efficiently handle multiple I/O operations concurrently without blocking the execution of other tasks.

Event-Driven: Node.js operates based on events, responding to triggers or signals that tell it to perform specific actions. Rather than sequentially executing tasks, Node.js listens for events, like a network request or file operation, and reacts when they happen. This is managed by an event loop, which continually monitors and handles events in a queue.

Non-Blocking: In traditional server-side architectures, if a task is in progress (like reading a file), other tasks are blocked from execution until it completes. Node.js, however, is designed to avoid this blocking by using asynchronous calls. For example, if Node.js needs to read a file, it sends the request and then moves on to handle other tasks, coming back to the file when the read is complete. This way, it doesn’t get "stuck" waiting for a task to finish before moving on.

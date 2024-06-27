const http = require("node:http");
const fs = require("fs/promises");

const pages = [];
const htmlContent = "text/html";
const cssContent = "text/css";
pages["/index"] = { contentType: htmlContent, path: "./index.html" };
pages["/"] = pages["/index"];
pages["/contact-me"] = { contentType: htmlContent, path: "./contact-me.html" };
pages["/about"] = { contentType: htmlContent, path: "./about.html" };
pages["/style.css"] = { contentType: cssContent, path: "./style.css" };
const errorPage = { contentType: htmlContent, path: "./404.html" };

const server = http.createServer();

server.on("request", (request, res) => {
  let page = pages[request.url];
  let responseCode = 200;
  if (!page) {
    page = errorPage;
    responseCode = 404;
  }
  res.writeHead(responseCode, { "Content-Type": page.contentType });
  fs.readFile(page.path, "utf-8").then((value) => {
    res.end(value);
  });
});

server.listen(8080);

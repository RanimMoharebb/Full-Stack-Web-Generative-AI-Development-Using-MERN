const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const PORT = 3000;

const server = http.createServer((req, res) => {

  // ======================
  // HOME PAGE
  // ======================
  if (req.url === "/" && req.method === "GET") {

    const filePath = path.join(__dirname, "views", "home.html");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // ======================
  // CONTACT PAGE
  // ======================
  else if (req.url === "/contact" && req.method === "GET") {

    const filePath = path.join(__dirname, "views", "contact.html");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // ======================
  // THANK YOU PAGE
  // ======================
  else if (req.url === "/thankyou" && req.method === "GET") {

    const filePath = path.join(__dirname, "views", "thankyou.html");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // ======================
  // CSS FILE
  // ======================
  else if (req.url === "/css/style.css") {

    const filePath = path.join(__dirname, "public", "css", "style.css");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS not found");
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  // ======================
  // IMAGES (IMPORTANT FIX)
  // ======================
else if (req.url.startsWith("/images/")) {

  const filePath = path.join(__dirname, "public", req.url);

  console.log("Requested URL:", req.url);
  console.log("Resolved Path:", filePath);

  fs.exists(filePath, (exists) => {

    console.log("File exists?", exists);

    if (!exists) {
      res.writeHead(404);
      return res.end("Image not found (file missing)");
    }

    fs.readFile(filePath, (err, data) => {

      if (err) {
        res.writeHead(500);
        return res.end("Error reading image");
      }

      const ext = path.extname(filePath);

      const mimeTypes = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
      };

      res.writeHead(200, {
        "Content-Type": mimeTypes[ext] || "image/jpeg",
      });

      res.end(data);
    });
  });
}
  // ======================
  // FORM SUBMIT
  // ======================
  else if (req.url === "/submit" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {

      const parsedData = querystring.parse(body);
      console.log("Form Data:", parsedData);

      // redirect to thank you page
      res.writeHead(302, { Location: "/thankyou" });
      res.end();
    });
  }

  // ======================
  // 404 PAGE
  // ======================
  else {

    const filePath = path.join(__dirname, "views", "404.html");

    fs.readFile(filePath, "utf-8", (err, data) => {

      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
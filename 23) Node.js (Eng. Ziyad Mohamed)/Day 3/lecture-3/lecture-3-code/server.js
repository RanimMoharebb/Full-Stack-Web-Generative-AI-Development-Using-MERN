const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const querystring = require("node:querystring");
const server = http.createServer();

server.listen(5000);

server.on("request", async (request, response) => {
    
    if (request.url.endsWith(".css"))
    {
        try 
        {
            response.setHeader("Content-Type", "text/css");
    
            const cssFile = await fs.readFile(path.join(__dirname, "public", request.url), { encoding: "utf-8" });
    
            response.write(cssFile);
            response.end();

        } catch(error)
        {
            response.statusCode = 404;
            response.write("Couldn't find your styles.");
            response.end();
        }
        
        return;
    }

    response.setHeader("Content-Type", "text/html");
    
    let fileName = "";

    switch(request.url)
    {
        case "/":
        {
            fileName = "index.html";
            break;
        }

        case "/about":
        {
            fileName = "about.html"
            break;
        }

        case "/submitted":
        {
            fileName = "submitted.html";
            break;
        }

        case "/contact":
        {
            if (request.method.toLowerCase() === "get")
            {
                fileName = "contact.html"
            } else if (request.method.toLowerCase() === "post")
            {
                let userData = "";

                request.setEncoding("utf-8");

                request.on("data", (data) => {
                    userData += data;
                });

                request.on("end", async () => {
                    try 
                    {
                        const formattedUserData = querystring.parse(userData);
    
                        await fs.writeFile(path.join("models", `${formattedUserData.name}.txt`), `Name: ${formattedUserData.name}, Email: ${formattedUserData.email}\n`);
    
                        response.statusCode = 302;
                        response.setHeader("Location", "/submitted");
                        response.end();
                    }
                    catch(error)
                    {
                        response.statusCode = 500;
                        response.write("Error saving user data");
                        response.end();
                    }
                });

                return;
            }

            break;
        }

        default:
        {
            response.statusCode = 404;
            fileName = "not-found.html";
            break;
        }
    }

    try 
    {
        const headerHTML = await fs.readFile(path.join("partials", "header.html"), { encoding: "utf-8" });
        const viewHTML = await fs.readFile(path.join("views", fileName), { encoding: "utf-8" });
        const viewWithHeaderHTML = viewHTML.replace("{{HEADER}}", headerHTML);
        response.write(viewWithHeaderHTML);
    } catch(error)
    {
        response.statusCode = 500;
        response.write("Something went wrong while retrieving your page!");
    }

    response.end();
});

server.on("error", (error) => {
    console.error(error);
});
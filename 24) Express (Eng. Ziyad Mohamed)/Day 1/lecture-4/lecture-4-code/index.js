const express = require("express");
const path = require("node:path");
const fs = require("node:fs/promises");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", (request, response, next) => {
    return response.sendFile(path.join(__dirname, "views", "index.html"));
});

server.get("/about", (request, response, next) => {
    return response.sendFile(path.join(__dirname, "views", "about.html"));
});

server.get("/contact", (request, response, next) => {
    return response.sendFile(path.join(__dirname, "views", "contact.html"));
});

server.get("/submitted", (request, response, next) => {
    return response.sendFile(path.join(__dirname, "views", "submitted.html"));
});

server.post("/contact", async (request, response, next) => {
    const { name, email } = request.body;

    try 
    {
        await fs.mkdir(path.join(__dirname, "data"), { recursive: true });
        await fs.writeFile(path.join(__dirname, "data", `${name}_${Date.now()}.txt`), `Name: ${name}, Email: ${email}\n`);
        return response.redirect("/submitted");
    } catch(error)
    {
        return next(error);
    }
});

server.get("/products", async (request, response, next) => {
    const limit = request.query.limit;

    try
    {
        const products = await fs.readFile(path.join(__dirname, "products", "products.json"), { encoding: "utf-8" });
        let formattedProducts = JSON.parse(products);

        if (!Array.isArray(formattedProducts))
        {
            throw new Error("Invalid products");
        }

        if (limit)
        {
            const limitNumber = parseInt(limit);

            if (isNaN(limitNumber) || limitNumber <= 0)
            {
                return response.status(400).json({ message: "Invalid limit value." });
            }

            formattedProducts = formattedProducts.slice(0, limitNumber);
        }

        return response.status(200).json(formattedProducts);
    } catch(error)
    {
        return next(error);
    }
});

server.get("/products/:id", async (request, response, next) => {
    const productId = request.params.id;

    try
    {
        const products = await fs.readFile(path.join(__dirname, "products", "products.json"), { encoding: "utf-8" });
        let formattedProducts = JSON.parse(products);

        if (!Array.isArray(formattedProducts))
        {
            throw new Error("Invalid products");
        }

        const productIdNumber = parseInt(productId);

        if (isNaN(productIdNumber) || productIdNumber <= 0)
        {
            return response.status(400).json({ message: "Invalid product id." });
        }

        const product = formattedProducts.find(product => product.id === productIdNumber);

        if (!product)
        {
            return response.status(404).json({ message: "Product not found!" });
        }

        return response.status(200).json({ product });
    } catch(error)
    {
        return next(error);
    }
});

server.post("/products", async (request, response, next) => {
    const product = request.body?.product;

    try
    {
        if (!product || !product.name || !product.price)
        {
            return response.status(400).json({ message: "Invalid body in request" });
        }

        const products = await fs.readFile(path.join(__dirname, "products", "products.json"), { encoding: "utf-8" });
        let formattedProducts = JSON.parse(products);
        let newProducts = [];

        if (!Array.isArray(formattedProducts) || !formattedProducts.length)
        {
            newProducts = [ { ...product, id: 1 } ]; 
        } else
        {
            newProducts = [...formattedProducts, { ...product, id: Date.now() }];
        }

        await fs.writeFile(path.join(__dirname, "products", "products.json"), JSON.stringify(newProducts, null, 4));

        return response.status(200).json({ message: "Product added successfully" });
    } catch(error)
    {
        return next(error);
    }
});

server.put("/products/:id", async (request, response, next) => {
    const productId = request.params.id;
    const product = request.body?.product;

    try
    {
        const productIdNumber = parseInt(productId);

        if (isNaN(productIdNumber) || productIdNumber <= 0)
        {
            return response.status(400).json({ message: "Invalid product id." });
        }

        if (!product || !product.name || !product.price)
        {
            return response.status(400).json({ message: "Invalid body in request" });
        }

        const products = await fs.readFile(path.join(__dirname, "products", "products.json"), { encoding: "utf-8" });
        let formattedProducts = JSON.parse(products);

        if (!Array.isArray(formattedProducts))
        {
            throw new Error("Invalid products");
        }
        
        if (!formattedProducts.length)
        {
            return response.status(400).json({ message: "Product Not Found." });
        }

        const toBeUpdatedProduct = formattedProducts.find(product => product.id === productIdNumber);

        if (!toBeUpdatedProduct)
        {
            return response.status(400).json({ message: "Product Not Found." });
        }

        const newProducts = formattedProducts.map(formattedProduct => {
            if (formattedProduct.id === productIdNumber)
            {
                formattedProduct.name = product.name;
                formattedProduct.price = product.price;

                return formattedProduct;
            }

            return formattedProduct;
        });

        await fs.writeFile(path.join(__dirname, "products", "products.json"), JSON.stringify(newProducts, null, 4));

        return response.status(200).json({ message: "Product updated successfully!" });
    } catch(error)
    {
        return next(error);
    }
});

server.delete("/products/:id", async (request, response, next) => {
    const productId = request.params.id;

    try
    {
        const products = await fs.readFile(path.join(__dirname, "products", "products.json"), { encoding: "utf-8" });
        let formattedProducts = JSON.parse(products);

        if (!Array.isArray(formattedProducts))
        {
            throw new Error("Invalid products");
        }

        const productIdNumber = parseInt(productId);

        if (isNaN(productIdNumber) || productIdNumber <= 0)
        {
            return response.status(400).json({ message: "Invalid product id." });
        }

        const product = formattedProducts.find(product => product.id === productIdNumber);

        if (!product)
        {
            return response.status(404).json({ message: "Product not found!" });
        }

        const newProducts = formattedProducts.filter(product => product.id !== productIdNumber);

        await fs.writeFile(path.join(__dirname, "products", "products.json"), JSON.stringify(newProducts, null, 4));

        return response.status(200).json({ message: "Product deleted successfully!" });
    } catch(error)
    {
        return next(error);
    }
});

server.use((error, request, response, next) => {
    console.error(error);
    return response.status(500).send("Something went wrong");
});

server.listen(5000);
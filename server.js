const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
    "/proxy",
    createProxyMiddleware({
        target: "",
        changeOrigin: true,
        router: (req) => req.query.url || "https://www.google.com",
    })
);

app.get("/", (req, res) => {
    res.send(`<h2>LumenProxy is running on GitHub Codespaces!</h2>
    <form action="/proxy">
        <input type="text" name="url" placeholder="Enter URL or search query" required>
        <button type="submit">Go</button>
    </form>`);
});

app.listen(3000, () => console.log("LumenProxy running on port 3000"));

import { makeBadge } from './modules/badge-maker@3.3.1/es2022/badge-maker.mjs'
import getLogo from "./util.js";

export default {
    async fetch(request) {
        const data = {}

        new URLSearchParams(new URL(request.url).search).forEach((value, key) => {
            data[key] = value
        })

        if (typeof data.message !== "string") {
            const html = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Badge Documentation</title>
                <link rel="stylesheet" href="https://unpkg.com/normalize.css/normalize.css" type="text/css">
                <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-dark.css" type="text/css">
            </head>
            
            <body>
            
                <h1>Badge Documentation</h1>
                <h2>Badge Parameters:</h2>
            
                <p>Customize your badges with various parameters to match the visual identity of your project or repository.</p>
            
                <ol>
                    <li><strong>label (Optional):</strong> A short label providing additional context for the badge, displayed on the left side.</li>
                    <li><strong>message (Required):</strong> The main content or message of the badge, typically indicating status or information.</li>
                    <li><strong>labelColor (Optional):</strong> Color of the label text, supporting CSS color values (named colors or hex codes).</li>
                    <li><strong>color (Optional):</strong> Color of the message text, supporting CSS color values (named colors or hex codes).</li>
                    <li><strong>logo (Optional):</strong> URL or color code for a logo to be displayed on the badge. If a color code is provided, it serves as the background color for the logo.</li>
                    <li><strong>logoColor (Optional):</strong> Color of the logo, supporting CSS color values (named colors or hex codes).</li>
                    <li><strong>style (Optional):</strong> Visual style of the badge. Choose from: 'plastic', 'flat', 'flat-square', 'for-the-badge', or 'social' for different designs.</li>
                </ol>
            
                <p>Note: CSS named colors are supported; for hex codes, escape the hashtag (e.g., %23FFF = #FFF).</p>
            
                <p>Feel free to experiment with different parameters and styles using the following example:</p>
            
                <p>Generated Badge URL: <code><span id="url"></span>?label=build&message=passing&logo=github</code></p>
                <img id="preview" />
            
                <h2>Simple Icons</h2>
                <p>We support a variety of logos via <a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">Simple Icons</a>. All simple-icons are referenced using icon slugs. For example:</p>
                <br>
                <p>You can click the icon title on the <a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">Simple Icons</a> website to copy the slug, or find them below.</p>
                <span id="slugs"></span>
                <script type="module">
                    import { marked } from "https://esm.sh/marked@11.1.0";
                    
                    fetch("https://raw.githubusercontent.com/simple-icons/simple-icons/master/slugs.md")
                    .then(data => data.text())
                    .then(data => {
                        document.getElementById('slugs').innerHTML = marked.parse(data);
                    })

                    document.getElementById("url").innerText = location.origin;
                    document.getElementById("preview").src = location.origin + "?label=build&message=passing&logo=github";
                </script>
            </body>
            
            </html>`
            return new Response(html, {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            });
        }

        if (data.logo) {
            data.logo = await getLogo(data.logo, data.logoColor || null)
            delete data.logoColor
        }

        try {
            return new Response(makeBadge(data), {
                headers: {
                    "content-type": "image/svg+xml;charset=UTF-8",
                },
            });
        } catch (e) {
            return new Response(e, {
                headers: {
                    "content-type": "text/plain;charset=UTF-8",
                },
            });
        }
    },
};

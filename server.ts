import { readFileSync } from "fs";
import { serve, file } from "bun";
import { marked } from 'marked';

const PORT = process.env.PORT || 3000;

const filter = (loc) => {
    const name = loc.substring(1);
    if (name.includes(".md")) {
        const file = readFileSync(name, 'utf-8');
        const parsed = marked.parse(file);

        const cssed = parsed + `<link rel="stylesheet" href="https://sindresorhus.com/github-markdown-css/github-markdown-dark.css" crossorigin></head>` + // Adding Stylesheet
            `<script>
        document.body.classList.add("markdown-body");
        </script>` + // Adding Script
            `<style>
        .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 45px;
        }

        @media (max-width: 767px) {
            .markdown-body {
                padding: 15px;
            }
        }
        </style>`; // Adding Style limits

        return new Response(cssed, {
            headers: { 'content-type': 'text/html;charset=UTF-8' }
        });
    };

    return new Response(file(name));
};

console.log(`Server Running at http://localhost:${PORT}/`);
const server = serve({
    fetch ({ url }: Request) {
        const { pathname } = new URL(url);

        if (pathname === '/') {
            return new Response(file('./index.html'));
        }
        if (pathname === '/end') {
            return server.stop();
        }

        return filter(pathname);
    },
    port: PORT, // number or string
});

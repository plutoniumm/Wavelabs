// Bun Server
const { serve, file, resolveSync } = Bun;
// const { path } = import.meta;

const PORT = process.env.PORT || 3000;

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

        return new Response(file(pathname.substring(1)));
    },

    // SSL is enabled if these two are set
    // certFile: './cert.pem',
    // keyFile: './key.pem',

    port: PORT, // number or string
});

import { serve, file } from "bun";

const PORT = process.env.PORT || 3000;

const filter = ( loc ) => {
    const name = loc.substring( 1 );
    return new Response( file( name ) );
};

console.log( `Server Running at http://localhost:${ PORT }/` );
const server = serve( {
    fetch ( { url } ) {
        const { pathname } = new URL( url );

        if ( pathname === '/' ) {
            return new Response( file( './index.html' ) );
        }
        if ( pathname === '/end' ) {
            return server.stop();
        }

        return filter( pathname );
    },
    port: PORT, // number or string
} );
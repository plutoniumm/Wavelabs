const addLinks = ( setup ) => {
    const script = document.createElement( "link" );
    setup.forEach( attr => {
        script.setAttribute( attr[ 0 ], attr[ 1 ] );
    } );
    document.head.appendChild( script );
};

const styles = [
    [
        [ "href", "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.css" ],
        [ "integrity", "sha512-ITH3NSfntO7uI5n+BnxGNXpzDUoOsmAXuG37UDONLxNYIdc0EBBOOQ1xyc+t9ag9ETSuBXFApx+Rod0uURfDYw==" ],
        [ "rel", "stylesheet" ],
        [ "crossorigin", "anonymous" ],
        [ "referrerpolicy", "no-referrer" ]
    ],
    [
        [ "href", "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/theme/moon.min.css" ],
        [ "integrity", "sha512-mzpbI+YpB+bIH9gpH3cBq4u5+YvyAikkgAR4SODr5ZpzBZZtLddurEa5LoJRqRfVc6IUfqj6klr0e9KJjUtKHw==" ],
        [ "rel", "stylesheet" ],
        [ "crossorigin", "anonymous" ],
        [ "referrerpolicy", "no-referrer" ]
    ]
];

styles.forEach( addLinks );


new Reveal( {
    plugins: [ RevealMarkdown ],
    slideNumber: 'c/t',
    touch: true,
    has: true,
    history: true,
} ).initialize();
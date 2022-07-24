const {
    SitemapStream,
    streamToPromise
} = require('sitemap');
const {
    Readable
} = require('stream');
let sitemap;

const generate_sitemap = async (req, res, next) => {

    res.header('Content-Type', 'application/xml');

    if (sitemap) return res.status(200).send(sitemap); // If we have a cached entry send it

    let changefreq = 'daily';

    try {

        let links = [{
                url: '',
                changefreq,
                priority: 1,
                img: [{
                    url: 'https://www.bouvierartesanal.com.ar/images/logos/bouvier-logo-lightversion.png',
                    caption: 'Bouvier Artesanal logo',
                    title: 'Bouvier Artesanal logo'
                }],                
            },
            {
                url: 'productos',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/jabones',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/exfoliantes',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/otros',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/capilares',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/jabones-liquidos',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/limpiadores',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/mascarillas',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/serum',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'productos/tonicos',
                changefreq,
                priority: 0.9,
            },
            {
                url: 'carrito',
                changefreq: 'weekly',
                priority: 0.8,
            },
            {
                url: 'buscar',
                changefreq: 'weekly',
                priority: 0.7,
            },
            // productos 
        ];

        // Additionally, you can do database query and add more dynamic URLs to the "links" array.

        const stream = new SitemapStream({
            hostname: 'https://bouvierartesanal.com.ar/',
            lastmodDateOnly: true,
            xmlns: {
                image: true,
            }
        })
        return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
            sitemap = data; // Cache the generated sitemap
            stream.end();
            return res.status(200).send(data.toString())
        });

    } catch (error) {
        return res.status(500).end();
    }
}

module.exports = {
    generate_sitemap
};
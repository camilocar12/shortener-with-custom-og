// Forzamos a que siempre devuelva la ruta de home.png
const imageURL = function(data) {
  if(data.original_og) {
    return `${data.original_og}`;
  } else {
    // No importa el data.path, siempre retornamos /image/home.png
    return `${data.domain}/image/home.png`;
  }
};

export default (data) => {
 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Find that at...</title>
   <meta name="twitter:card" content="summary_large_image"/>
   <meta name="twitter:site" content="${data.site}"/>
   <meta name="twitter:title" content="¡Estás invitado a nuestra boda! 💍"/>
   <meta name="twitter:description" content="Acompáñanos el 12 de diciembre a celebrar nuestro gran día. Haz clic para ver los detalles."/>
   <meta name="twitter:creator" content="${data.site}"/>
   <meta name="twitter:image" content="${imageURL(data)}"/>
   <meta name="og:image" content="${imageURL(data)}"/>
   <meta name="og:image:secure_url" content="$${imageURL(data)}"/>
   <meta name="image" property="og:image" content="${imageURL(data)}"/>
   <meta property="og:site_name" content="Boda Camilo & Alejandra"/>
   <meta property="og:title" content="¡Estás invitado a nuestra boda! 💍"/>
   <meta property="og:description" content="Acompáñanos el 12 de diciembre a celebrar nuestro gran día. Haz clic para ver los detalles."/>
 </head>
 <body>
  A little OG image help from <a href="https://hawksworx.com">Phil Hawksworth</a>
 </body>
 </html>
 `;
}

console.log('hello')
let title = document.getElementById('hello')
console.log('before:', title.innerText)
title.innerText = 'good bye my lover!';
console.log('after:', title.innerText);
messege = ' Ellame sappa matteruh'
title.innerHTML = `<p>${messege}<p>`
console.log(title.innerHTML)
title.style.color = 'red'


    // // html file
    // < !DOCTYPE html >
    //     <html>

    //         <head>
    //             <link href="style.css" rel="stylesheet" type="text/css" />

    //         </head>

    //         <body>
    //             <div id='hello'>

    //                 <p>Vanakam da mapla </p>
    //             </div>
    //             <script src="script.js"></script>


    //         </body>

    //     </html>
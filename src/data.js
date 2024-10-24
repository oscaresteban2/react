const productos = [
    { nombre: "Xbox One S", precio: 1000.00, id: "1", img: "../img/XboxOneS.png", descripcion: "Microsoft Xbox One S 500gb Consola De Juegos fue presentado el 13 de junio y lanzado el 2 de agosto del 2016 al mercado. Introducción a la nueva Xbox One S. Juega a la mayor alineación de juegos, incluyendo clásicos de Xbox 360, en una consola 40% más pequeña con High Dynamic Range. Guarde más juegos que nunca con un enorme disco duro de 1TB. Transmita video de 4K en Netflix y Amazon Video, y ve películas UHD Blu-ray con una fidelidad visual impresionante.", idCat: "3"},
    { nombre: "PlayStation 5", precio: 900.000, id: "2", img: "../img/PlayStation5.png", descripcion:"Sumérgete en una experiencia de juego sin igual con la Sony PlayStation 5 Slim 1TB Extra DualSense Controller Color. Esta consola de sobremesa, lanzada en 2023, combina un diseño elegante y compacto con un rendimiento potente, ideal para cualquier entusiasta de los videojuegos. Con una capacidad de almacenamiento de 1 TB, tendrás espacio de sobra para tus juegos favoritos y contenido adicional.", idCat: "3"},
    { nombre: "SPIDERMAN 2", precio: 90.00, id: "3", img: "../img/spiderman.png", descripcion:"Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba de fuerza definitiva dentro y fuera de sus trajes mientras luchan por salvar a la ciudad, a sus seres queridos y a ellos mismos, del monstruoso Venom y la peligrosa nueva amenaza simbionte.Explora la enorme Nueva York de Marvel con mayor velocidad de balanceo y las nuevas alas de telaraña, mientras cambias rápidamente entre Peter y Miles para disfrutar de las diferentes historias, habilidades épicas y equipo de alta tecnología.", idCat: "4"},
    { nombre: "EA FC 24", precio: 65.00, id: "4", img: "../img/EAFC24.png", descripcion:"EA SPORTS FC™ 24 representa una nueva era para el Juego de Todos: más de 19,000 futbolistas con licencia total, más de 700 equipos y más de 30 ligas en la experiencia futbolística más auténtica jamás creada Siéntete más cerca del juego con tres tecnologías de última generación que potencian un realismo sin igual en cada partido: HyperMotionV , PlayStyles optimizados por Opta y un motor Frostbite™ revolucionado.", idCat: "4"},
    { nombre: "NINTENDO", precio: 500.000, id: "5", img: "../img/NINTENDO.png", descripcion:"Pantalla OLED de 7 pulgadas (17.78 cm) Deleita tus ojos con colores brillantes y contrastes definidos cuando juegues en el camino. Mira la diferencia que ofrece una pantalla vibrante cuando compites a toda velocidad o cuando combates a tus enemigos.", idCat: "3"},
    { nombre: "Mafia Definitive", precio: 80.00, id: "6", img: "../img/Mafia.png", descripcion:"Un percance con la mafia introduce al taxista Tommy Angelo en el crimen organizado. A pesar de su reticencia inicial, las ventajas de unirse a la familia Salieri son demasiadas como para ignorarlas.", idCat: "2"},
    { nombre: "MARIO", precio: 115.00, id: "7", img: "../img/MARIO.png", descripcion:"Haz equipo con Mario, Luigi, la princesa Peach, Rabbid Peach, Rabbid Luigi y sus amigos en un viaje galáctico para derrotar a una entidad malvada y salvar a tus compañeros Spark. ¡Explora planetas a través de la galaxia conforme descubres misteriosos secretos y disfrutas de atractivas misiones!", idCat: "5"},
    { nombre: "Auriculares Gamer Maxell Force", precio: 80.00, id: "8", img: "../img/Auriculares.png", descripcion:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Maxell FORCE 9 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.", idCat: "1"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        },)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        },)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },)
    })
}


// componente mejorado

const productos = [
    { nombre: "bob", precio: 999, img: "https://static.wikia.nocookie.net/memes-pedia/images/c/c3/3bacac4b40b4a76733cc6188b9bdc31b.jpg/revision/latest?cb=20220324222502&path-prefix=es" },
    { nombre: "gta", precio: 1300, img: "https://static.wikia.nocookie.net/rockstargames/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest/scale-to-width-down/250?cb=20131025091952&path-prefix=es" },
    { nombre: "tazo", precio: 69000, img: "https://http2.mlstatic.com/D_NQ_NP_624793-MLM76940687774_062024-O.webp" },
    { nombre: "chat", precio: 1, img: "https://pontia.tech/wp-content/uploads/2023/10/que-es-chat-gpt-1.jpg" },
    { nombre: "red bull", precio: 20, img: "https://t3.ftcdn.net/jpg/04/31/62/14/360_F_431621440_FFG7fwFMxdVlADPCaOPKOkD94nQkL1nQ.jpg" },
    { nombre: "ferrari", precio: 20, img: "https://www.pixartprinting.es/blog/wp-content/uploads/2024/03/Cover-Pixart_Ferrari.jpg" },
    { nombre: "playera", precio: 15000, img: "https://resources.claroshop.com/medios-plazavip/t1/1721346977WhatsAppImage20240718at53948PMjpeg" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});
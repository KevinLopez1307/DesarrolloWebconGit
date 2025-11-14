// componente mejorado

const productos = [
    { nombre: "bob", precio: 999, img: "https://assets.puzzlefactory.com/puzzle/409/852/original.jpg" },
    { nombre: "gta", precio: 1300, img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/12120/capsule_616x353.jpg?t=1634144450" },
    { nombre: "tazo", precio: 69000, img: "https://http2.mlstatic.com/D_NQ_NP_624793-MLM76940687774_062024-O.webp" },
    { nombre: "chat", precio: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfLTUFsrIaow85ievF7HzMf2cMUJ6DVNc4A&s" },
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
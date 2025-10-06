const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonCatJugador = document.getElementById("boton-cat")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarCat = document.getElementById("seleccionar-cat")
const spanCatJugador = document.getElementById("cat-jugador")

const spanCatEnemigo = document.getElementById("cat-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let cats = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeCats
let inputSaurio
let inputMia
let inputMikumi
let inputNala
let catJugador
let catJugadorObjetos
let ataquesCat
let ataquesCatEnemigo
let botonFuego
let botonViento 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/mapelementcat.png"
let alturaQueBuscamos
let anchoDelMpapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMpapa > anchoMaximoDelMapa) {
    anchoDelMpapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMpapa * 600 / 800

mapa.width = anchoDelMpapa
mapa.height = alturaQueBuscamos

class Cat {
    constructor(nombre, foto, vida, fotoMapa,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarCat() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
         )
    }
}

let saurio = new Cat("Saurio", "./assets/Elementcat_Saurio.png", 5, "./assets/saurio.png")

let mia = new Cat("Mia", "./assets/Elementcat_Mia.png", 5, "./assets/mia.png")

let mikumi = new Cat("Mikumi", "./assets/Elementcat_Mikumi.png", 5, "./assets/mikumi.png")

let nala = new Cat("Nala", "./assets/Elementcat_Nala.png", 5, "./assets/nala.png")

let saurioEnemigo = new Cat("Saurio", "./assets/Elementcat_Saurio.png", 5, "./assets/saurio.png",)

let miaEnemigo = new Cat("Mia", "./assets/Elementcat_Mia.png", 5, "./assets/mia.png",)

let mikumiEnemigo = new Cat("Mikumi", "./assets/Elementcat_Mikumi.png", 5, "./assets/mikumi.png",)

let nalaEnemigo = new Cat("Nala", "./assets/Elementcat_Nala.png", 5, "./assets/nala.png",)

saurio.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🪨", id: "boton-tierra" },
)

saurioEnemigo.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🪨", id: "boton-tierra" },
)

mia.ataques.push(
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🪨", id: "boton-tierra" },
)

miaEnemigo.ataques.push(
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🪨", id: "boton-tierra" },
)

mikumi.ataques.push(
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🪨", id: "boton-tierra" },
)

mikumiEnemigo.ataques.push(
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🪨", id: "boton-tierra" },
)

nala.ataques.push(
    { nombre: "🪨", id: "boton-tierra" },
    { nombre: "🪨", id: "boton-tierra" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
)

nalaEnemigo.ataques.push(
    { nombre: "🪨", id: "boton-tierra" },
    { nombre: "🪨", id: "boton-tierra" },
    { nombre: "🍃", id: "boton-viento" },
    { nombre: "🌊", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
)

cats.push(saurio,mia,mikumi,nala)


function iniciarJuego() {
   
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
 
    cats.forEach((cat) => {
        opcionDeCats = `
        <input type="radio" name="cat" id=${cat.nombre} /> 
        <label class="tarjeta-de-elementcat" for=${cat.nombre}>
            <p>${cat.nombre}</p>
            <img src=${cat.foto} alt=${cat.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeCats

     inputSaurio = document.getElementById("Saurio")
     inputMia = document.getElementById("Mia")
     inputMikumi = document.getElementById("Mikumi")
     inputNala = document.getElementById("Nala")

    })

    botonCatJugador.addEventListener("click", seleccionarCatJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse") 
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta) 
                        jugadorId = respuesta
                    })
            }
        })            
}

function seleccionarCatJugador() {

    sectionSeleccionarCat.style.display = "none"
 
    if (inputSaurio.checked) {
        spanCatJugador.innerHTML = inputSaurio.id
        catJugador = inputSaurio.id
    } else if (inputMia.checked) {
        spanCatJugador.innerHTML = inputMia.id
        catJugador =  inputMia.id
    } else if (inputMikumi.checked) {
        spanCatJugador.innerHTML = inputMikumi.id
        catJugador = inputMikumi.id
    } else if (inputNala.checked) {
        spanCatJugador.innerHTML = inputNala.id
        catJugador = inputNala.id
    } else {
        alert("Selecciona un cat")
    } 

    seleccionarCat(catJugador)

    extraerAtaques(catJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
  
}

function seleccionarCat(catJugador) {
    fetch(`http://localhost:8080/cat/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            cat: catJugador 
        })
    })
}

function extraerAtaques(catJugador) {
    let ataques
    for (let i = 0; i < cats.length; i++) {
        if (catJugador === cats[i].nombre) {
            ataques = cats[i].ataques
        }
        
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesCat = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesCat
    })

     botonFuego = document.getElementById("boton-fuego")
     botonViento = document.getElementById("boton-viento")
     botonAgua = document.getElementById("boton-agua")
     botonTierra = document.getElementById("boton-tierra")
     botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e)  => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🍃") {
                ataqueJugador.push("VIENTO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🌊") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo() 
        })
    })
    
}

function seleccionarCatEnemigo() {
    let catAleatorio = aleatorio(0, cats.length -1)

    spanCatEnemigo.innerHTML = cats[catAleatorio].nombre
    ataquesCatEnemigo = cats[catAleatorio].ataques
    secuenciaAtaque()

}

function ataqueAleatorioEnemigo() {
    console.log("Ataques enemigo", ataquesCatEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesCatEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 2 || ataqueAleatorio ==3) {
        ataqueEnemigo.push("VIENTO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio ==4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if(ataqueJugador.length === 5) {
        combate()  
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'VIENTO') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'VIENTO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
         } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal("Perdiste :(")
    }
}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal
    
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

function pintarCanvas() {
    catJugadorObjetos.x = catJugadorObjetos.x + catJugadorObjetos.velocidadx
    catJugadorObjetos.y = catJugadorObjetos.y + catJugadorObjetos.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    catJugadorObjetos.pintarCat()

    enviarPosicion(catJugadorObjetos.x, catJugadorObjetos.y)

    saurioEnemigo.pintarCat()
    miaEnemigo.pintarCat()
    mikumiEnemigo.pintarCat()
    nalaEnemigo.pintarCat()
    if (catJugadorObjetos.velocidadx !== 0 || catJugadorObjetos.velocidady !== 0) {
        revisarColision(miaEnemigo)
        revisarColision(saurioEnemigo)
        revisarColision(mikumiEnemigo)
        revisarColision(nalaEnemigo)
    }
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/cat/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/jason"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                })
        }
    })
}

function moverDerecha() {
    catJugadorObjetos.velocidadx = 5
}

function moverIzquierda() {
    catJugadorObjetos.velocidadx = -5
}

function moverAbajo() {
    catJugadorObjetos.velocidady = 5
}

function moverArriba() {
    catJugadorObjetos.velocidady = -5
}

function detenerMovimiento() {
    catJugadorObjetos.velocidadx = 0
    catJugadorObjetos.velocidady = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowLeft":
            moverIzquierda()
            break;
        case "ArrowRight":
            moverIzquierda()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mapa.width = 420
    mapa.height = 340
    catJugadorObjetos = obtenerObjetoCat(catJugador)
    console.log(catJugadorObjetos, catJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoCat() {
    for (let i = 0; i < cats.length; i++) {
        if (catJugador === cats[i].nombre) {
            return cats[i]
        } 
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaCat = 
        catJugadorObjetos.y
    const abajoCat = 
        catJugadorObjetos.y + catJugadorObjetos.alto
    const derechaCat = 
        catJugadorObjetos.x + catJugadorObjetos.ancho
    const izquierdaCat = 
        catJugadorObjetos.x

    if (
        abajoCat < arribaEnemigo ||
        arribaCat > abajoEnemigo ||
        derechaCat < izquierdaEnemigo ||
        izquierdaCat > derechaEnemigo 
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colision");
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarCatEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)

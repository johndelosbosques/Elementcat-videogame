const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const Jugadores = []

class Jugador {
    constructor(id) {
        this.id
    }
}

class Cat {
    constructor(nombre) {
        this.id = this.id
    }

    asignarCat(cat) {
        this.cat = cat
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    Jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/cat/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.cat || ""
    const cat = new Cat(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >=0) {
        jugadores[jugadorIndex].asignarCat(cat)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/cat/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >=0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    res.end()
})

app.listen(8080, () => {
    console.log("Sevidor funcionando")
})

class Coach extends Person {
    constructor(name, club, // bd de clubs
    nation, // bd nations
    position, _salary) {
        super(name, club, nation, position);
        this._salary = _salary;
    }
    entrenar() {
        throw new Error("Method not implemented.");
    }
    comprarJugador() {
        throw new Error("Method not implemented.");
    }
    hacerCambio() {
        throw new Error("Method not implemented.");
    }
    crearEstrategia() {
        throw new Error("Method not implemented.");
    }
    get salary() {
        return this._salary;
    }
}

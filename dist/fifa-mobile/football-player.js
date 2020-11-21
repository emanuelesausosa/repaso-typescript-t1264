// specs
// name
// club
// nation
// height
// position
// foot
class FootballPlayer extends Person {
    constructor(name, club, // bd de clubs
    nation, // bd nations
    position, _height, _foot) {
        super(name, club, nation, position);
        this._height = _height;
        this._foot = _foot;
    }
    defense() {
        throw new Error("Method not implemented.");
    }
    ataque() {
        throw new Error("Method not implemented.");
    }
    disparo() {
        throw new Error("Method not implemented.");
    }
    get height() {
        return this._height;
    }
    get foot() {
        return this._foot;
    }
}

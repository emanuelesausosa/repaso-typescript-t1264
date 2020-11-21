// specs
// name
// club
// nation
// height
// position
// foot
class Person {
    constructor(_name, _club, // bd de clubs
    _nation, // bd nations
    _position // lista positions
    ) {
        this._name = _name;
        this._club = _club;
        this._nation = _nation;
        this._position = _position;
    }
    get name() {
        return this._name;
    }
    get club() {
        return this._club;
    }
    get nation() {
        return this._nation;
    }
    get position() {
        return this._position;
    }
    set name(value) {
        this._name = value;
    }
    set position(value) {
        this._position = value;
    }
}

// specs
// name
// club
// nation
// height
// position
// foot

class Person {
  constructor(
    private _name: string,
    private _club: string, // bd de clubs
    private _nation: string, // bd nations
    private _position: Positions // lista positions
  ) {}

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

  set name(value: string) {
    this._name = value;
  }

  set position(value: Positions) {
    this._position = value;
  }
}

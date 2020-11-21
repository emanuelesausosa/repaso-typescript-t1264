// specs
// name
// club
// nation
// height
// position
// foot

class FootballPlayer extends Person implements Player {
  constructor(
    name: string,
    club: string, // bd de clubs
    nation: string, // bd nations
    position: Positions,
    private _height: number,
    private _foot: Foots
  ) {
    super(name, club, nation, position);
  }
  defense(): void {
    throw new Error("Method not implemented.");
  }
  ataque(): void {
    throw new Error("Method not implemented.");
  }
  disparo(): void {
    throw new Error("Method not implemented.");
  }

  get height() {
    return this._height;
  }

  get foot() {
    return this._foot;
  }
}

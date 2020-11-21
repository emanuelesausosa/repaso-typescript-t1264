

class Coach extends Person 
implements Coaching, AccionesPartido, Administrar {
  constructor(
    name: string,
    club: string, // bd de clubs
    nation: string, // bd nations
    position: Positions,
    private _salary: number
  ) {
    super(name, club, nation, position);
  }
    entrenar(): void {
        throw new Error("Method not implemented.");
    }
    comprarJugador(): void {
        throw new Error("Method not implemented.");
    }
    hacerCambio(): void {
        throw new Error("Method not implemented.");
    }
    crearEstrategia(): void {
        throw new Error("Method not implemented.");
    }
  get salary() {
    return this._salary;
  }
}

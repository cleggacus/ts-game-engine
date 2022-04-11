class Keyboard {
  private _keysDown: Map<string, boolean>;

  public constructor() {
    this._keysDown = new Map();
    this.init();
  }

  public init(): void {
    addEventListener("keydown", e => {
      this._keysDown.set(e.key, true);
    })

    addEventListener("keyup", e => {
      this._keysDown.set(e.key, false);
    })
  }

  public isKeyDown(key: string): boolean {
    return !!this._keysDown.get(key);
  }
}

export default Keyboard;
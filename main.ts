class Stack {
  empty : boolean;

  constructor() {
    this.empty = true
  }

  isEmpty() : boolean {
    return this.empty
  }

  push(element: number) : void {
    this.empty = false
  }
}

export {
  Stack
}

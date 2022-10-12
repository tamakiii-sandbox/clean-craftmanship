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

  pop() : number {
    this.empty = true
    return -1
  }
}

export {
  Stack
}

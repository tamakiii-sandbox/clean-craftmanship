class Stack {
  size: number;

  constructor() {
    this.size = 0
  }

  isEmpty() : boolean {
    return this.size == 0
  }

  push(element: number) : void {
    this.size++
  }

  pop() : number {
    if (this.size == 0) {
      throw new Error("Underflow");
    }
    this.size--
    return -1
  }

  getSize() : number {
    return this.size
  }
}

export {
  Stack
}

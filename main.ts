class Stack {
  size: number
  element: number

  constructor() {
    this.size = 0
    this.element = 0
  }

  isEmpty() : boolean {
    return this.size == 0
  }

  push(element: number) : void {
    this.size++
    this.element = element
  }

  pop() : number {
    if (this.size == 0) {
      throw new Error("Underflow");
    }
    this.size--
    return this.element
  }

  getSize() : number {
    return this.size
  }
}

export {
  Stack
}

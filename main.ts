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

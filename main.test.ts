// url_test.ts
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { Stack } from './main.ts'

Deno.test("nothing", () => {
  const stack = new Stack
  assertEquals(stack.constructor.name, "Stack")
})

Deno.test("Can create stack", () => {
  const stack = new Stack
  assertEquals(stack.isEmpty(), true)
})

Deno.test("after one push is not empty", () => {
  const stack = new Stack
  stack.push(0)
  assertEquals(stack.isEmpty(), false)
  assertEquals(stack.getSize(), 1)
})

Deno.test("after two pushes size is two", () => {
  const stack = new Stack
  stack.push(0)
  stack.push(0)
  assertEquals(stack.getSize(), 2)
})

Deno.test("popping empty stack throws underflow", () => {
  const stack = new Stack
  let error = undefined
  try {
    stack.pop()
  } catch (e: any) {
    error = e
  }
  assertEquals(error.message, "Underflow")
})

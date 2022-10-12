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

Deno.test("Can create stack", () => {
  const stack = new Stack
  stack.push(0);
  assertEquals(stack.isEmpty(), false)
})

// url_test.ts
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { Stack } from './main.ts'

Deno.test("nothing", () => {
  const stack = new Stack
  assertEquals(stack.constructor.name, "Stack")
});

// url_test.ts
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { MyStack } from './main.ts'

Deno.test("nothing", () => {
  const stack = new MyStack
  assertEquals(stack.constructor.name, "MyStack")
});

// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function removeEvenNums(stack) {
  // your code here
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    let current = stack.pop();
    if (current % 2 !== 0) {
      tempStack.push(current);
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(3);
stack.push(6);

removeEvenNums(stack);
console.log(stack.printStack()); // [5, 1, 3]

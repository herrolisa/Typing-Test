#Typing Test

Create a typing game that creates measures a user's word per minute.

##HTML Markup
1. Create a container that will be used to display messages to the user.
2. Create a `<textarea>` that the user will type into.
3. Add a `keyup` event listener onto the `<textarea>` element.
  1. If the text in the `<textarea>` is equal to the target text, emit a custom `finished` event.
5. Create a button that will be used to start the game.
6. Create a `start` function that accepts a callback function as it's only argument.
  1. The `callback` function should accept 2 arguments, `err` and `wpm`.
7. When the user clicks on the button, it should set up an event listener that will invoke the `callback` function when a `finished` event is emitted.

## Stretch Goal
1. Add an event listener to check if the user has tried to copy the text from the page.
  1. If the user tries to copy the text, invoke the `callback` method with an error message.
  2. https://developer.mozilla.org/en-US/docs/Web/Events/copy
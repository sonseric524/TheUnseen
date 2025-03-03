
#### index.js

```javascript
#!/usr/bin/env node

const texts = [
  "The Codex of Nyzzorath – Said to contain the true names of the forgotten gods, speaking them drives men mad.",
  "The Tome of Endless Night – A book that, once opened, dims all light in the room and whispers unknown knowledge.",
  "The Black Scrolls of Uth'Mar – Found buried beneath a ruined monastery, containing visions of a world yet to come.",
  "The Chronicle of the Hollow King – An account of an empire erased from history, now only existing in dreams.",
  "The Mirror Manuscript – A book that cannot be read unless reflected in still water, revealing dark truths."
];

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

console.log("Welcome to Scribes of the Unseen!");
console.log("Here is a forbidden text and its cryptic message:");
console.log(getRandomText());

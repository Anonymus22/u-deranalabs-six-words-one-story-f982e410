import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — a complete story in exactly six words.
// Final: present tense — an ongoing wound, not a memory. Two beats:
// what she treasures (his letters), what she destroys (mine).
const story = "She keeps his letters. Burns mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");

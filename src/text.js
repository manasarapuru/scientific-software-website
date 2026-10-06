// Splits text on **double asterisks**: every other piece is an emphasised phrase.
export function parseEmphasis(text) {
  return text.split('**').map((piece, i) => ({ text: piece, strong: i % 2 === 1 }));
}

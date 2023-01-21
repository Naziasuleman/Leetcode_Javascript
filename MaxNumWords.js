var mostWordsFound = function (sentences) {
  let array = sentences.map((x) => x.split(" ").length);
  return Math.max(...array);
};

sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

console.log(mostWordsFound(sentences));

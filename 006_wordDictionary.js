/* 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。
 */

const wordDictionary = function () {
  this.words = {};
};
wordDictionary.prototype.addWord = function (word) {
  if (!word || !word.length) return;
  let len = word.length;
  if (this.words[len]) {
    this.words[len].push(word);
  } else {
    this.words[len] = [word];
  }
};
wordDictionary.prototype.search = function (word) {
  let len = word.length;
  if (!this.words[len]) return false;

  if (!word.includes('.')) return this.words[len].includes(word);

  let reg = new RegExp(word);

  return this.words[len].some(i => reg.test(i));
};

const w = new wordDictionary();
w.addWord('bad');
w.addWord('dad');
w.addWord('mad');
console.log("🚀 ~ file: 06_ wordDictionary.js ~ line 19 ~ w.search('pad')", w.search('pad'));
console.log("🚀 ~ file: 06_ wordDictionary.js ~ line 20 ~ w.search('bad')", w.search('bad'));
console.log("🚀 ~ file: 06_ wordDictionary.js ~ line 22 ~ w.search('.ad')", w.search('.ad'));
console.log("🚀 ~ file: 06_ wordDictionary.js ~ line 24 ~ w.search('b..')", w.search('b..'));

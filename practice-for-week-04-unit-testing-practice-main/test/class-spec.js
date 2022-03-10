const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let newWord = new Word('A word');
      // expect.fail("replace with your code");
      expect(newWord.word).to.equal('A word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      let actualWord = 'something'
      let newWord = new Word(actualWord);

      expect(newWord.word).to.equal(actualWord);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
    let newWord = new Word('something');
    expect(newWord.removeVowels()).to.equal('smthng');

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let newWord = new Word('something');
      expect(newWord.removeConsonants()).to.equal('oei');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let newWord = new Word('trash');
      expect(newWord.pigLatin()).to.equal('ashtray');
    });
  });
});

const expect = require("chai").expect;
const meditations = require("./index");

describe("meditations", function () {
  describe("random", function () {
    it("should return a random string", function () {
      expect(meditations.random()).to.be.a('string');
    });
  });

  describe("retrieve", function () {
    it("should return a specified quote from meditations", function () {
      let quote = meditations.retrieve(1,1);
      expect(quote).to.equal("From my grandfather Verus I learned good morals and the government of my temper. ");
    });

    it("should return an error if book number is out of bounds", function(){
      expect(meditations.retrieve(-1, 0)).to.be.an('error');
      expect(meditations.retrieve(12, 0)).to.be.an('error');
    });
    
    it("should return an error if phrase number is out of bounds", function(){
      expect(meditations.retrieve(1, 19)).to.be.an('error');
      expect(meditations.retrieve(5, 41)).to.be.an('error');
      expect(meditations.retrieve(7, -2)).to.be.an('error');
    });
  });
});

var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // test
  it('it has a sample test', function() {
    assert.equal(true, true)
  });

  // calculator.add()

  it('it should add 1 to 4 and get 5', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.strictEqual(calculator.runningTotal, 5)
  });

  // calculator.subtract()

  it('it should subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  });

  // calculator.multiply()

  it('it should multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  });

  // calculator.divide()

  it('it should divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  });

  // calculator.numberClick()

  it('it should concatenate multiple number button clicks', function() {
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 232)
  });

  // calculator.operatorClick()

  it('it should chain multiple operations together', function() {
    calculator.numberClick(10)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 20)
  });

   // calculator.clearClick()

  it ('it should clear the running total without affecting the calculation', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')

    assert.equal(calculator.runningTotal, 4)
  });

}); 
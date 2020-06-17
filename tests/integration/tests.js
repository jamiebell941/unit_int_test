const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  it('it should display running total', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click()
    element(by.css('#number1')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('11')
  });

  it('it should update the display result', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  });

  it('it should display expected below 0', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')
  });

  it('it should display expected decimal point', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('0.2857142857142857')
  });

  it('it should display expected large numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('999999989999900000000')
  });

  it('it should display divided by 0 ', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity') //Infinity is a numeric value that represents positive infinity
  });


});

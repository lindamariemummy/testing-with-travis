var Counter = require('../counter.js');
var expect = require('chai').expect;

describe('counter', function() {
  var count = new Counter();

  it('initializes correctly', function() {
    expect(count.getValue()).to.eql(0);
  });
  it('increments correctly', function() {
  expect(count.increment().getValue()).to.eql(1);
  });
  it('increments correctly x 2', function() {
  expect(count.increment().getValue()).to.eql(2);
  });

});
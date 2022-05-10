import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('First Test', () => {
  it('First test', () => {
    expect(add(1, 1)).to.be.equal(2);
  });
});

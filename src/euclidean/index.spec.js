const { expect } = require('chai');
const solution = require('./index');

describe('test suite', () => {
  it('work', () => {
    expect(solution(4, 2)).to.equal(2);
    expect(solution(6, 3)).to.equal(3);
    expect(solution(8, 6)).to.equal(2);
    expect(solution(0, 6)).to.equal(6);
    expect(solution(0, 6)).to.equal(6);
  });
});

import Board from './index.js'

describe('test to pass', () => {
  const wrapper = new Board();

  it('should pass', () => {
    expect(wrapper).toBe('true');
  });
});

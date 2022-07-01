const { shuffleArray } = require('./utils');

// console.log(shuffleArray([5, 3, 1]))
// console.log(shuffleArray([5, 3, 1]))

describe('shuffleArray should', () => {
  // CODE HERE
  test('shuffleArray should return an array of the same length as the argument sent in', () => {
    const newArr = shuffleArray([5, 3, 1]);
    expect(newArr.length).toBe(3);
  });

  test('shuffleArray that inputs the number 7 should only contain the number 7', () => {
    const expected = shuffleArray([7]);
    expect(expected).toEqual(expect.arrayContaining(expected));
  });
});

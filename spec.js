describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('how many times does swap run', function() {
    debugger;
    bubbleSort([2, 1]);
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with a single item', function() {
    expect(bubbleSort([17])).toEqual([17]);
  });

  it('handles an array with multiple items', function() {
    expect(bubbleSort([6, 9, 3, 5])).toEqual([3, 5, 6, 9]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});

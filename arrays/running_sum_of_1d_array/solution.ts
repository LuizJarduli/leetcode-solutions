function sum(a: number, b: number = 0): number {
  return a + b;
}

function runningSum(nums: number[]): number[] {
  return nums.map((num, i, list) => {
    if (i === 0) return num;

    const previousNumber = list[i - 1];
    const currentNumberWillBe = previousNumber + num;
    list[i] = currentNumberWillBe;

    return currentNumberWillBe;
  });
}

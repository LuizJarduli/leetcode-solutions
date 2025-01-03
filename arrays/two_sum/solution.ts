export default function twoSum(nums: number[], target: number): number[] {
  return hashMapTwoSum(nums, target);
}

/**
 * Solution 1: Brute Force
 *
 * @deprecated
 */
function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

function hashMapTwoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();
  const twoSumResult: number[] = [];

  nums.forEach((number, index) => hashMap.set(number, index));

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    const diffToTarget = target - number;
    const hasDiff = hashMap.has(diffToTarget);
    const isSame = hashMap.get(diffToTarget) === index;

    if (hashMap.size === 1) {
      twoSumResult.push(...[hashMap.get(number)! - 1, hashMap.get(number)!]);
      break;
    } else if (!hasDiff || isSame) {
      continue;
    } else {
      twoSumResult.push(...[index, hashMap.get(diffToTarget)!]);
      break;
    }
  }

  return twoSumResult;
}

export default function vowelStrings(
  words: string[],
  queries: number[][]
): number[] {
  const prefixSum = createPrefixSum(words);

  return queries.map(([startIndex, endIndex]) =>
    startIndex > 0
      ? prefixSum[endIndex] - prefixSum[startIndex - 1]
      : prefixSum[endIndex]
  );
}

function createPrefixSum(words: string[]): number[] {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let currentSum = 0;

  return words.map((word) => {
    if (
      word.length > 0 &&
      vowels.has(word[0]) &&
      vowels.has(word[word.length - 1])
    ) {
      currentSum += 1;
    }
    return currentSum;
  });
}

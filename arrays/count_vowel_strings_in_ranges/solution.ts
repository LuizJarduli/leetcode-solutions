export default function vowelStrings(
  words: string[],
  queries: number[][]
): number[] {
  const prefixSum = createPrefixSum(words);

  return queries.reduce((acc, cur) => {
    const [startIndex, endIndex] = cur;
    const arrayInRange = prefixSum.slice(startIndex, endIndex + 1);
    const wordsWithVowelsInRange = startIndex
      ? arrayInRange[arrayInRange.length - 1] - arrayInRange[0]
      : arrayInRange[endIndex];

    acc.push(wordsWithVowelsInRange);

    return acc;
  }, [] as number[]);
}

function matchVowelsAtStartAndEnd(word: string): boolean {
  const regexForMultiChars = /^[AaEeIiOoUu](?:\w+)[AaEeIiOoUu]$/s;
  const regexForAMaxOfTwoChars = /^[AaEeIiOoUu][AaEeIiOoUu]?$/s;

  return (word.length <= 2 ? regexForAMaxOfTwoChars : regexForMultiChars).test(
    word
  );
}

function createPrefixSum(words: string[]): number[] {
  return words.reduce((acc, cur, index) => {
    if (index === 0) {
      acc.push(matchVowelsAtStartAndEnd(cur) ? 1 : 0);
    } else {
      const previousValue = acc[acc.length - 1];
      acc.push(
        matchVowelsAtStartAndEnd(cur) ? previousValue + 1 : previousValue
      );
    }

    return acc;
  }, [] as number[]);
}

function groupAnagrams(strs: string[]): string[][] {
  return mapAnagrams(strs);
}

function mapAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  orderStrings(strs).forEach((str, index) => {
    if (map.has(str)) return map.get(str).push(strs[index]);

    map.set(str, [strs[index]]);
  });

  return mapEntriesAsMatrix(map);
}

function orderStrings(strs: string[]): string[] {
  return strs.map((str) => str.split("").sort().join(""));
}

function mapEntriesAsMatrix(map: Map<string, string[]>): string[][] {
  return Array.from(map.values());
}

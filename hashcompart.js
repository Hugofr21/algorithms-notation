function shSimple(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

const string1 = "adlkoaabbdabçababbasbbsssjjbbbssaabb";
const string2 = "abb";

function findPatternHashAll(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len2 === 0) return { indices: [], message: "Pattern empty" };
  if (len2 > len1)
    return { indices: [], message: "Pattern larger than string" };

  const targetHash = shSimple(str2);
  const matches = [];

  // Iterate only up to the last index where a substring of length len2 fits
  for (let i = 0; i <= len1 - len2; i++) {
    const substr = str1.substring(i, i + len2);
    const h = shSimple(substr);

    // Debug log: tested substring and its hashes
    console.log(`i=${i}  substring="${substr}"  hash=${h}`);

    // First filter by hash (fast), then confirm by content comparison (avoids collisions)
    if (h === targetHash) {
      if (substr === str2) {
        console.log(
          `Hash matched and content confirmed at i=${i} (substr="${substr}")`
        );
        matches.push(i);
      } else {
        // Rare case: same hash, different content -> collision
        console.warn(
          `Collision detected at index ${i}: same hash but substr="${substr}" != "${str2}"`
        );
      }
    }
  }

  return { indices: matches, count: matches.length };
}

const resultado = findPatternHashAll(string1, string2);
console.log("Resultado:", resultado);

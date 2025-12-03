function buildAlphabetMaps(alphabet) {
  const numberOfLetters = new Map();
  const numberCharacters = new Map();
  for (let i = 0; i < 26; i++) {
    numberOfLetters.set(alphabet[i], i);
    numberCharacters.set(i, alphabet[i]);
  }
  return { charToNum: numberOfLetters, numToChar: numberCharacters };
}

function mod(a, b) {
  return ((a % b) + b) % b;
}

function normalizeKeyToNumbers(key, chartNumber, textLength) {
  let keys = [];
  for (let k of key) {
    console.log(k);
    if (!chartNumber.has(k))
      throw new Error("Key contains characters not in the alphabet");
    keys.push(chartNumber.get(k));
  }
  return keys.map((num, index) => num % 26);
}

function keyValueForPosition(keyNums, pos) {
  return keyNums[pos % keyNums.length];
}

function encryptVigenereModP(plaintext, key, alphabet) {
  const p = alphabet.length;
  const { charToNum, numToChar } = buildAlphabetMaps(alphabet);
  const keyNums = normalizeKeyToNumbers(key, charToNum, p);
  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    const ch = plaintext[i];
    if (!charToNum.has(ch))
      throw new Error("Text contains characters not in the alphabet");
    const pNum = charToNum.get(ch);
    const kNum = keyValueForPosition(keyNums, i);
    const cNum = mod(pNum + kNum, p);
    ciphertext += numToChar.get(cNum);
  }
  return ciphertext;
}

function decryptVigenereModP(ciphertext, key, alphabet) {
  const p = alphabet.length;
  const { charToNum, numToChar } = buildAlphabetMaps(alphabet);
  const keyNums = normalizeKeyToNumbers(key, charToNum, p);
  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i++) {
    const ch = ciphertext[i];
    if (!charToNum.has(ch))
      throw new Error("Texto cifrado contém símbolo fora do alfabeto");
    const cNum = charToNum.get(ch);
    const kNum = keyValueForPosition(keyNums, i);
    const pNum = mod(cNum - kNum, p);
    plaintext += numToChar.get(pNum);
  }
  return plaintext;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const key = "CHAVE";
const plaintext = "ATACARAOAMANHA";
const ct = encryptVigenereModP(plaintext, key, alphabet);
const pt = decryptVigenereModP(ct, key, alphabet);
console.log("Ciphertext:", ct);
console.log("Plaintext recovered:", pt);

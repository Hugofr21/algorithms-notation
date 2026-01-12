function monoalphabeticCipher(ciphertext) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = alphabet.toLowerCase();
  let result = "";
  let text = ciphertext.split("");

  for (let char of text) {
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      let newIndex = (index + 3) % 26;
      result += alphabet[newIndex];
    } else if (lowerAlphabet.includes(char)) {
      let index = lowerAlphabet.indexOf(char);
      let newIndex = (index + 3) % 26;
      result += lowerAlphabet[newIndex];
    } else {
      result += char;
    }
  }

  return result;
}

const ciphertext = monoalphabeticCipher(
  "lhpohes gvjhe ztytwojmmtel lgsfcgver segpsltjyl vftstelc djfl rml catrroel jscvjqjyfo mjlesl lcjmmfqe egvj gsfyhtyq sjfgver csfaotyq lfxtyq gjywplesl lxljm dxcel mpyctyq ztytwojmmtelel mfcgv spres mjm psgvty bfml ofle mjlc dtc tygfycfctjy dfsyl zpygvel csfao yealqsjpml atyl lgsjql qyfsotelc fseyf ojllel gjzmselltyq wpyhtelc zpltgl weygel afyher rstnesl aefleo rtyhes mvflel yphe rstnes qojder dtwwer lojml mfcgvel reocfl djzder djpygtyq gstmmoeafsel reg cpdel qspyqe mflctel csflvtyq vfcl avfghtyq vftsdfool mzer rsjye wjjol psol mplvtyq catrroe mvfqe lgseey leqzeycer wjseqsjpyrer lmjtoes msjwtoel docl djpyger cjpstlcl goefy gojddesl mjrl qjddoe gjy gpdtyql lyftotyq rjayojfr swgl vjle atrqec gjzmfgces frfl qotcgver gspzd zftodjzdl lyfsh",
  3
);

console.log(ciphertext);

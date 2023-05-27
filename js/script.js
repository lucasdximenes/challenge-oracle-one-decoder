const encryptButton = document.getElementById("btn-encrypt");
const decryptButton = document.getElementById("btn-decrypt");
const copyButton = document.getElementById("btn-copy");
const noTextP = document.getElementsByClassName("no-text")[0];
const outputContainer = document.getElementsByClassName("output-container")[0];

const encrypt = (text) => {
  const wordsArray = text.split(" ");
  const encryptedArray = wordsArray.map((word) => {
    const wordArray = word.split("");
    const encryptedWord = wordArray.map((letter) => {
      switch (letter) {
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "a":
          return "ai";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return letter;
      }
    });
    return encryptedWord.join("");
  });
  return encryptedArray.join(" ");
};

const decrypt = (text) => {
  const wordsArray = text.split(" ");
  const decryptedArray = wordsArray.map((word) => {
    let wrd = "";
    for (let index = 0; index < word.length; index++) {
      const letter = word[index];
      switch (letter) {
        case "e":
          let wordE =
            letter +
            word[index + 1] +
            word[index + 2] +
            word[index + 3] +
            word[index + 4];
          if (wordE === "enter") {
            wrd += "e";
            index += 4;
          } else {
            wrd += letter;
          }
          break;
        case "i":
          let wordI =
            letter + word[index + 1] + word[index + 2] + word[index + 3];
          if (wordI === "imes") {
            wrd += "i";
            index += 3;
          } else {
            wrd += letter;
          }
          break;
        case "a":
          let wordA = letter + word[index + 1];
          if (wordA === "ai") {
            wrd += "a";
            index += 1;
          } else {
            wrd += letter;
          }
          break;
        case "o":
          let wordO =
            letter + word[index + 1] + word[index + 2] + word[index + 3];
          if (wordO === "ober") {
            wrd += "o";
            index += 3;
          } else {
            wrd += letter;
          }
          break;
        case "u":
          let wordU =
            letter + word[index + 1] + word[index + 2] + word[index + 3];
          if (wordU === "ufat") {
            wrd += "u";
            index += 3;
          } else {
            wrd += letter;
          }
          break;
        default:
          wrd += letter;
          break;
      }
    }
    return wrd;
  });
  return decryptedArray.join(" ");
};

encryptButton.addEventListener("click", () => {
  const textAreaElement = document.getElementById("textarea-input");
  const textAreaValue = textAreaElement.value.toLowerCase();
  if (textAreaValue.length > 0) {
    noTextP.style.display = "none";
    // Clear only output-text
    const outputText = document.getElementsByClassName("output-text");
    if (outputText.length > 0) {
      outputText[0].remove();
    }
    const encryptedText = encrypt(textAreaValue);
    const newTextP = document.createElement("p");
    newTextP.className = "output-text";
    newTextP.innerHTML = encryptedText;
    outputContainer.insertBefore(newTextP, copyButton);
    copyButton.style.display = "block";
  }
});

decryptButton.addEventListener("click", () => {
  const textAreaElement = document.getElementById("textarea-input");
  const textAreaValue = textAreaElement.value.toLowerCase();
  if (textAreaValue.length > 0) {
    noTextP.style.display = "none";
    // Clear only output-text
    const outputText = document.getElementsByClassName("output-text");
    if (outputText.length > 0) {
      outputText[0].remove();
    }
    const decryptedText = decrypt(textAreaValue);
    const newTextP = document.createElement("p");
    newTextP.className = "output-text";
    newTextP.innerHTML = decryptedText;
    outputContainer.insertBefore(newTextP, copyButton);
    copyButton.style.display = "block";
  }
});

copyButton.addEventListener("click", () => {
  const outputText = document.getElementsByClassName("output-text")[0];
  if (outputText.innerHTML.length > 0) {
    navigator.clipboard.writeText(outputText.innerHTML);
    alert("Text copied to clipboard");
    // Clear only output-text
    if (outputText.length > 0) {
      outputText[0].remove();
    }
    copyButton.style.display = "none";
    noTextP.style.display = "block";
  }
});

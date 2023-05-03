const productNameinputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

console.dir(productNameinputElement);

const maxAllowedChars = productNameinputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameinputElement.addEventListener("input", updateRemainingCharacters);

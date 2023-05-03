// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(documnet);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a"); // same CSS selector
anchorElement.href = "https://academind.com";

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

// console.log(firstParagraph.textContent); Text만 나오게 됨
console.log(firstParagraph.innerHTML); // contains HTML elements

// firstParagraph.textContent = 'Hi! this is <strong>important</strong>'; 태그들이 그대로 나옴
firstParagraph.innerHTML = 'Hi! this is <strong>important</strong>';


 
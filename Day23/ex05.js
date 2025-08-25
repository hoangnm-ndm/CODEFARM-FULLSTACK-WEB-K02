const pElement = document.getElementsByTagName("p")[0];
console.log({ pElement });

pElement.title = "Đoạn văn";

pElement.setAttribute("a", 10);
console.log(pElement.getAttribute("a"));

pElement.setAttribute("bookmark", "Đoạn văn mẫu");
console.log(pElement);
pElement.removeAttribute("bookmark");

/**
 * * style
 * * classList
 */

pElement.style.fontSize = "32px";
pElement.style.color = "blue";
pElement.style.cssText = `
text-decoration: underline;
font-weight: 900;
font-size: 12px
`;

console.log(pElement.className);
console.log(pElement.classList);

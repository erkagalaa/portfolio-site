const ungu = document.querySelector(".description");
// console.log("ahaha", ungu);

ungu.style.color = "purple";

const nameString = ungu.textContent;
// console.log('nameString before: ', nameString);
const upperCaseName = nameString.toUpperCase();
// console.log('nameString after: ', upperCaseName);`
ungu.textContent = upperCaseName;
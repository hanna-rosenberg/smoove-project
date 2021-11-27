const javaInput = document.querySelector("input");
console.log(javaInput);

const showButton = (e) => {
  document.getElementById("hiddenButton").style.visibility = "visible";
};

javaInput.addEventListener("input", showButton);
javaInput.addEventListener("propertychange", showButton);

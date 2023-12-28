console.log("Hello");

let expression = "";

const buttons = document.querySelectorAll("#buttons-container button");
const output = document.getElementById("calc-output");

function onClick(e) {
  const val = e.target.getAttribute("data-val");
  if (val === "=") {
    console.log("Evaluate called!");
    try {
      output.innerHTML = eval(expression);
    } catch (err) {
      console.log(err);
      output.innerHTML = NaN;
      expression = "";
    }

    expression = "";
    return;
  }
  if (val === "clear") {
    console.log("clear called!");
    expression = "";
    output.innerHTML = "";
    return;
  }
  if (val === "delete") {
    console.log("delete called!");
    expression = expression.slice(0, -1);
    output.innerHTML = expression;
    return;
  }
  expression = expression + val;
  output.innerHTML = expression;
}
for (let button of buttons) {
  button.addEventListener("click", onClick);
}

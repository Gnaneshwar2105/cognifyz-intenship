
function changeColor() {
  let btn = document.getElementById("colorBtn");
  btn.style.backgroundColor = btn.style.backgroundColor === "blue" ? "green" : "blue";
}


function greetUser() {
  let now = new Date();
  let hour = now.getHours();
  let message;

  if (hour < 12) {
    message = "Good Morning!";
  } else if (hour < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  alert(message);
}


function addNumbers() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("result").innerText = "⚠️ Please enter both numbers.";
  } else {
    let sum = n1 + n2;
    document.getElementById("result").innerText = "Result: " + sum;
  }
}

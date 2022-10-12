const container = document.querySelector(".container");

const createBlock = (num) => {
  const span = document.createElement("span");
  span.classList.add("block");
  switch (num) {
    case "FizzBuzz":
      span.innerHTML = num;
      span.classList.add("red");
      container.appendChild(span);
      break;
    case "Fizz":
      span.innerHTML = num;
      span.classList.add("green");
      container.appendChild(span);
      break;
    case "Buzz":
      span.innerHTML = num;
      span.classList.add("yellow");
      container.appendChild(span);
      break;

    default:
      span.innerHTML = num;
      container.appendChild(span);
      span.classList.add("blue");
      break;
  }
};

const divisibleCheck = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return createBlock("FizzBuzz");
  if (num % 3 === 0) return createBlock("Fizz");
  if (num % 5 === 0) return createBlock("Buzz");
  createBlock(num);
};

const fizzBuzz = (totalOfNumbers) => {
  for (let i = 0; i < totalOfNumbers; i++) {
    divisibleCheck(i + 1);
  }
};

fizzBuzz(100);

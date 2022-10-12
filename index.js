const createBlock = (item) => {
  const container = document.querySelector(".container");
  const span = document.createElement("span");
  span.classList.add("block");
  span.innerHTML = item;
  container.appendChild(span);

  switch (item) {
    case "FizzBuzz":
      span.classList.add("red");
      break;
    case "Fizz":
      span.classList.add("green");
      break;
    case "Buzz":
      span.classList.add("yellow");
      break;

    default:
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

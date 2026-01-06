 let result = document.getElementById("result");

  function clearScreen() {
    result.textContent = "0";
  }

 function dlt() {
  let text = result.textContent;

  if (text.length > 1) {
    result.textContent = text.slice(0, -1);
  } else {
    result.textContent = "0";
  }
}

  function append(value) {
    let text = result.textContent;
    if(text === "0")
      {
     result.textContent = value;
      }
    else{
     result.textContent = text + value;
      }
}

  function calculate() {
    let finalResult;
    try {
      finalResult = eval(result.textContent);
    } catch {
      finalResult = "Error";
    }
    result.textContent = finalResult}
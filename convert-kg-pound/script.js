const butn =  document.querySelector("#btn");


butn.addEventListener('click', getWeight);

function getWeight(e){
  e.preventDefault();
  let result = document.querySelector("#result");
  let inputValue = document.querySelector("#value").value;
  let finalResult = inputValue*2.205;
  finalResult.toFixed(4);
  result.value = finalResult;

  result.textContent = result;
  
}
getWeight();







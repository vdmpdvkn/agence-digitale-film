
  const addThrottleToElement = (buttonSelector, elementSelector, delay) => {
    const button = document.querySelector(buttonSelector);
    const element = document.querySelector(elementSelector);
  
    let isProcessing = false;
  
    button.addEventListener('click', function() {
      if (!isProcessing) {
        isProcessing = true;
  
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
  
        setTimeout(function() {
          isProcessing = false;
        }, delay); // задержка в указанное количество миллисекунд
      }
    });
  };
  
  export default addThrottleToElement;
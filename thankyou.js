let b = localStorage.getItem(`ratingValue`);
document.querySelector(`.message`).innerHTML = `You selected ${b} out of 5`;
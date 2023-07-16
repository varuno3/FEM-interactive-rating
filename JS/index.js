let optionList = document.querySelectorAll(`.option`);
let ratingValue;
optionList.forEach((element, index) => {
    element.addEventListener("click", () => {
        optionList.forEach((elem, key) => {
            optionList[key].classList.remove('option-active');
            ratingValue = 0;
        })
        optionList[index].classList.add('option-active');
        ratingValue = index + 1;
        localStorage.setItem(`ratingValue`, `${ratingValue}`);
        let a = localStorage.getItem(`ratingValue`);
        console.log(a);
    })
})


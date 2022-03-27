

// let buttonAddInput = document.querySelector('.btn');
let buttonAddInput = document.querySelector('[data-action="add"]');


buttonAddInput.addEventListener('click', ()=> {

    console.log(1);
    let testContainer = document.querySelector('.auto-test');
    let mainContainer = document.querySelector('.option');

    testContainer.innerHTML += `
    <div class="test"
        <span>Введите вопрос:</span><input class="input" type="text">
        <span>Вариант ответа 1</span><input class="input" type="text">
        <span>Вариант ответа 2</span><input class="input" type="text">
        <span>Вариант ответа 3</span><input class="input" type="text">
    </div>`

    mainContainer.innerHTML += `
    <div class="btn-wrap">
        <span>Готово</span><button class="btn" data-action="add"><ion-icon name="checkmark-outline"></ion-icon></button>
    </div>`

});
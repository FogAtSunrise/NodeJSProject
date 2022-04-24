//Модальные формы со страницы контрагентов
const modalAddProduct = document.getElementById("modalAddProduct");
const modalDeleteProduct = document.getElementById("modalDeleteProduct");
const modalChangeProduct = document.getElementById("modalChangeProduct");

//Открытие форм
function openForm(modal) {
    clearInputs(modal);
    modal.style.display = "block";
}

//Закрытие форм
function closeForm(modal) {
    modal.style.display = "none";
}

//Очистить все поля формы
function clearInputs(modal) {
    let inputs = modal.querySelectorAll('input[type="text"]');
    inputs.forEach(function (item) {
        item.value = "";
    })
}

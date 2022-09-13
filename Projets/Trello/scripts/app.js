"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidation;
//// function principale appelée lors du forEach
function addContainerListener(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    const currentForm = currentContainer.querySelector('form');
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closeFormListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
}
//// ici démarrage de la boucle pour chaque container
itemsContainer.forEach((container) => {
    addContainerListener(container);
});
//// fonctions liées à la première fonction
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function closeFormListeners(btn) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
//////////////// 
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
function handleAddItem(e) {
    const btn = e.target;
    /// ci dessous on vérifie si le container est fermé :
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainersItem(btn);
    toggleForm(actualBtn, actualForm, true);
}
/// fonction pour ouvrir/fermer le container
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainersItem(btn) {
    actualBtn = btn,
        actualContainer = btn.parentElement;
    actualUl = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInput = actualContainer.querySelector('input');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function createNewItem(e) {
    e.preventDefault();
    /// validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    /// création Item
    const ItemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
    <p> ${ItemContent}<p/>
    <button>X</button>
    </li>`;
    actualUl.insertAdjacentHTML("beforeend", li);
    /// ci dessous on rajoute la possibilié de supprimer l'elmt juste créé
    const item = actualUl.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    actualTextInput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener('click', () => {
        const eltToRemove = btn.parentElement;
        console.log(btn);
        console.log(eltToRemove);
        eltToRemove.remove();
    });
}
//// Add new container
const addContainerBtn = document.querySelector('.add-container-btn');
const addContainerForm = document.querySelector('add-new-container form');
const addContainerFormInput = document.querySelector('.add-new-container input');
const validationNewContainer = document.querySelector('.add-new-container .validation-msg');
const addContainerCloseBtn = document.querySelector('.close-add-list');
const addNewContainer = document.querySelector('.add-new-container');
const containersList = document.querySelector('.main-content');
addContainerBtn.addEventListener('click', () => {
    console.log('test');
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener('submit', createNewContainer);
function createNewContainer(e) {
    e.preventDefault;
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector('.items-container');
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `<div class="items-container" draggable="true">
    <div class="top-container">
        <h2>${addContainerFormInput.value}</h2>
        <button class="delete-container-btn">x
        </button>
    </div>
    <ul></ul>
    <button class="add-item-btn"> Add an item
    </button>
    <form autocomplete="off">
        <div class="top-form-container">
            <label for="item">Add a new item
            </label>
            <button type="button" class="close-form-btn">X</button>
        </div>
        <input type="text" id="item">
        <span class="validation-msg"></span>
        <button type="submit">Submit</button>
    </form>
</div>`;
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = "";
    addContainerListener(newContainer);
}

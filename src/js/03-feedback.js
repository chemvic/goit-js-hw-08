import throttle from 'lodash.throttle';

const formData = {};
const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

showCurrentData();

inputEl.addEventListener('input', throttle(onInput,500));
textareaEl.addEventListener('input', throttle(onInput,500));

function onInput(event) {
  
    formData.email = inputEl.value;
    formData.message = textareaEl.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
    
}
 
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();    
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    console.log(savedData);
    localStorage.removeItem(STORAGE_KEY);  
    inputEl.value = "";
   textareaEl.value = "";
}

function showCurrentData() {
    if (savedData!==null) {
         inputEl.value = savedData.email||"";
   textareaEl.value = savedData.message||"";
    }
}
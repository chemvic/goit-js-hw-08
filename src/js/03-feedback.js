import throttle from 'lodash.throttle';

// const currentDataForm = '';
const formData = {};
const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

//    console.log(savedData);
// throttle(onInput,500)
showCurrentData();

formEl.addEventListener('input', onInput);

function onInput(event) {
    const {email,message} = event.currentTarget.elements;    
    const data = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
   
    
}
 
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    // event.currentTarget.reset();
   
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
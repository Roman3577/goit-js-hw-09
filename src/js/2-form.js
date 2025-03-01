const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const tex = form.querySelector(".txt");
const input = form.querySelector(".input");


const formData = { email: "", message: "" };


populateForm();


form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


function onFormInput(event) {
    formData[event.target.name] = event.target.value.trim(); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;

    Object.assign(formData, JSON.parse(savedData)); 

    input.value = formData.email || "";
    tex.value = formData.message || "";
}


function onFormSubmit(event) {
    event.preventDefault();

  
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

   
    console.log("Відправлено:", formData);

    
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(formData, { email: "", message: "" }); 
    form.reset();
}
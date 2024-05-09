const myForm = document.querySelector('#myForm');
const errorMsg = document.querySelector('#error-msg');
const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    if(data.email.length == 0 || !pattern.test(data.email)){
        errorMsg.style.display = 'block';
    }
    else{
        errorMsg.style.display = 'none';
        myForm.reset();
    }


})
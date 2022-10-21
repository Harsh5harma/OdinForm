
let flag = false;
let flag2=false;
let submit = document.querySelector(".butt");
submit.addEventListener("click",()=>{
    let pass=document.getElementById("psswd").value;
    let cpass = document.getElementById("cpsswd").value;
    const password = document.querySelector('.Pass');

    if (pass!==cpass){
        let error = document.createElement('small');
        error.textContent="* Password Not Same."
        error.style.color="red";
        error.style.fontSize="16px";11
        error.style.marginLeft="1vw";
        if(!flag){
            password.appendChild(error);
            flag=true;
            flag2=false;
        }
    }else{
        if (!flag2){
            password.removeChild(password.lastChild);
            flag2=true;
        }
        flag=false;
    }
})


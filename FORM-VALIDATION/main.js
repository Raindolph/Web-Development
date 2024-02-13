    const allfield = document.getElementById("all_fields")
    const usernamerequired = document.getElementById("username_field");
    const passwordrequired = document.getElementById("password_field");
    const input_username = document.getElementById("username");
    const input_password = document.getElementById("password");
    const btn = document.getElementById("button");
    let visblebtn = document.querySelector("#visiblebtn")

    password.addEventListener('key up', (e)=>{
        e.preventDefault 
    })



    btn.addEventListener("click", (e)=>{
        e.preventDefault();

        if(username.value === "" && password.value === ""){
            allfield.innerHTML = "All fields required"
        }
        else{
            if(input_username.value === ""){
                usernamerequired.innerHTML = "Username Required"
                allfield.style.display = "none"
            }
            else if(input_password.value === ""){
                passwordrequired.innerHTML = "Password Required "
                allfield.style.display = "none"
            }
            else{
                alert("Your Form Has been Submitted Successfully")
            }
        }
    })

allfield.addEventListener('keyup', (e)=>{
    e.preventDefault()

    if(username.length > 1){
        allfield.style.display = "none"
    }
})

password.addEventListener('keyup', (e)=>{
    e.preventDefault()

    const passwordvalue = password.value;
    if(passwordvalue.length <= 5){
        password_field.style.color = 'red'
        password_field.innerHTML = "Weak"
    }
    else if(passwordvalue.length > 5 && passwordvalue.length <= 8){
        password_field.style.color = "blue"
        password_field.innerHTML = "Moderate"
    }
    else if(passwordvalue.length > 8){
        password_field.style.color = "Green"
        password_field.innerHTML = "Strong"
    }
})

visblebtn.addEventListener('click', (e)=>{
    e.preventDefault()

    if(password.type === "password"){
        password.type = "text"
        visblebtn.src = "./images/eye-off-line.png";
    }else{
        password.type = "password";
        visblebtn.src = "./images/eye-line.png"
    }
})

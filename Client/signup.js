
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const phone = document.querySelector("#phone");

let gender = "";

const submitButton = document.querySelector("#submitButton");

document.querySelector("#gender").addEventListener("change",(e)=>{
    gender=e.target.value;
})


 async function handleSubmit(){
    // console.log(gender.value);
    try {
        if(password.value!==confirmPassword.value){
            alert("Password does not match ")
            return;
        }

        body={
            name:name.value,
            email:email.value,
            age:age.value,
            password:password.value,
            phone: phone.value,
            gender:gender,
        }
    console.log(body);

    const blob = await fetch("http://localhost:8000/auth/signup",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(body)

    });
    alert("Data Added Successfully")
    const data = await blob.json();

    console.log(data);



    } catch (error) {
        console.log(error);
    }

}

submitButton.addEventListener("click",()=>{
    handleSubmit()

})

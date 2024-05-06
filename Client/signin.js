
const email = document.querySelector("#email");

const password = document.querySelector("#password");

const submitButton = document.querySelector("#submitButton");


 async function handleSubmit(){
    try {
  
        body={
           
            email:email.value,
           
            password:password.value

        }
    console.log(body);

    const blob = await fetch("http://localhost:8000/auth/signin",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(body)
       
    });
    alert("login successfully ")
    const data = await blob.json();

    console.log(data);

    localStorage.setItem("tokenSaveByMe",data.token);

    } catch (error) {
        console.log(error);
    }

}

submitButton.addEventListener("click",()=>{
    handleSubmit()

})

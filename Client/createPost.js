let token = localStorage.getItem("tokenSaveByMe");
const caption=document.querySelector("#caption");
const image=document.querySelector("#image");
const tags=document.querySelector("#tags");
let imgUrl=""

console.log(token);

image.addEventListener("change",(e)=>{
    const image=e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', (e) => {
        imgUrl=e.target.result;
    })
})

async function handleSubmit(){
    console.log("helllooo handleSubmit is  running");
    try {
        const blob=await fetch("http://localhost:8000/post/createPost",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${token}`
            },
            body:JSON.stringify({caption:caption.value,image:imgUrl,tags:tags.value.split(",")})
        })
        const data=await blob.json();
        console.log(data);
       
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#submitBtn").addEventListener("click",()=>{
    handleSubmit()
    alert("POSTED")
    // window.location.reload()
})
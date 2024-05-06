fetch("http://localhost:8000/post/getPost", {
    headers: {
        authorization: `bearer ${localStorage.getItem("tokenSaveByMe")}`
    }

})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
       let str = "";
       str+= data.posts.map((ele)=>{
        return `
        <div class="card my-2 p-2">
        <img src=${ele.image}>
        <h4>${ele.caption}</h4>
        ${
            ele.tags.map((ele)=>{
                return `#${ele}`
            }).join(" ")
        }

        </div>
         
        `
       }).join("")
       document.querySelector("#posts").innerHTML= str;
    })
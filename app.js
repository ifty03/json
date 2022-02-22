function userINfo(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(data => userName(data))
}

    const userName = data => {
        const ul = document.getElementById("userArea");
        for(user of data){
            const li = document.createElement("li");
            li.innerText = user.name;
            ul.appendChild(li);
        }
    }
    
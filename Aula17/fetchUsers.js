const fetchApiUser = async () =>{
    const response = await fetch("https://dummyjson.com/users")
    const data = await response.json()

    console.log(data.users[1].password);
    
}

fetchApiUser()
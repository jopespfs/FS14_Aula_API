fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
       /* json.forEach(element => {
            console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`)            
        });*/
        
        json
            .filter(ele => ele.id % 2 === 0)
            .forEpwdach(element => 
                console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`))
    })
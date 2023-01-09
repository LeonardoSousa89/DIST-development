const doc=document


let obj={
    userid: doc.getElementById('userid'),
    username: doc.getElementById('username'),
    email: doc.getElementById('email'),
    workername: doc.getElementById('workername'),
    workeremail: doc.getElementById('workeremail'),
    workerpost: doc.getElementById('workerpost'),
    workeraddress: doc.getElementById('workeraddress'),
    workerphonenumber: doc.getElementById('workerphonenumber'),
    workerage: doc.getElementById('workerage'),
    user_id: doc.getElementById('user_id'),
    data: doc.getElementById('data'),
    createUser: doc.getElementById('createUser'),
    createWorker: doc.getElementById('createWorker')
}


obj.data.addEventListener('click', ()=>{

    doc.location.href='./get/index.html'

})


obj.createUser.addEventListener('click',(event)=>{
    
    event.preventDefault()

    let URL='http://127.0.0.1:8766/dist/worker/user-account/administration'
    
    let data={ userid: obj.userid.value, 
               username: obj.username.value, 
               email: obj.email.value 
    }

    let config={ method: 'POST', 
                 body: JSON.stringify(data),
                 headers:{
                    'Content-type':'application/json'
                }
    }

    fetch(URL,config)
        .then(response=>{
            response.json()
            doc.location.href='./get/index.html'
        })
        .catch(error=>console.log(error))   

})


obj.createWorker.addEventListener('click',(event)=>{
    
    event.preventDefault()

    let URL='http://127.0.0.1:8766/dist/worker/administration'

    let data={ workername: obj.workername.value, 
               workeremail: obj.workeremail.value, 
               workerpost: obj.workerpost.value, 
               workeraddress: obj.workeraddress.value, 
               workerphonenumber: obj.workerphonenumber.value, 
               workerage: obj.workerage.value,
               user_id: obj.user_id.value 
    }

    let config={ method: 'POST', 
                 body: JSON.stringify(data),
                 headers:{
                    'Content-type':'application/json'
                }
    }

    fetch(URL,config)
    .then(response=>{
        response.json()
        doc.location.href='./get/index.html'
    })
    .catch(error=>console.log(error))  

})

const doc=document


let obj={
    reload: doc.getElementById('reload'),
    back: doc.getElementById('back'),
    user_id: doc.getElementById('user_id'),
    data: doc.getElementById('data'),
    containerUser: doc.getElementById('containerUser'),
    containerWorker: doc.getElementById('containerWorker')
}


obj.reload.addEventListener('click',()=>{

    doc.location.reload()

})


obj.back.addEventListener('click', (event)=>{
    
    event.preventDefault()

    doc.location.href='../index.html'

})


obj.data.addEventListener('click', (event)=>{
    
    let user_id=obj.user_id.value

    event.preventDefault()

    getUsersData(user_id)
    getWorkersData(user_id)

})


function getUsersData(user_id){

    let URL=`http://127.0.0.1:8766/dist/worker/user-account/${user_id}/administration`
    
    let config={ method: 'GET' }

    fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    response.map(e=>{
                        
                        let username=e.username
                        let email=e.email

                        let usernameP=doc.createElement('p')
                        let emailP=doc.createElement('p')

                        let containerInternal=doc.createElement('div')

                        let containerUser=obj.containerUser

                        usernameP.append(username)
                        containerInternal.append(usernameP)

                        emailP.append(email)
                        containerInternal.append(emailP)

                        containerUser.append(containerInternal)
                        

                    })
                })
            }else{
                response.json().then(response=>alert(response.msg))
            }
        })
        .catch(error=>console.log(error))

}


function getWorkersData(user_id){

    let URL=`http://127.0.0.1:8766/dist/worker/${user_id}/administration`
    
    let config={ method: 'GET' }

    fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    response.data.map(e=>{
                        
                        let workername=e.workername
                        let workeremail=e.workeremail
                        let workerpost=e.workerpost
                        let workeraddress=e.workeraddress
                        let workerphonenumber=e.workerphonenumber
                        let workerage=e.workerage

                        let workernameP=doc.createElement('p')
                        let workeremailP=doc.createElement('p')
                        let workerpostP=doc.createElement('p')
                        let workeraddressP=doc.createElement('p')
                        let workerphonenumberP=doc.createElement('p')
                        let workerageP=doc.createElement('p')

                        let containerWorker=obj.containerWorker

                        let containerInternal=doc.createElement('div')

                        workernameP.append(workername)
                        containerInternal.append(workernameP)

                        workeremailP.append(workeremail)
                        containerInternal.append(workeremailP)

                        workerpostP.append(workerpost)
                        containerInternal.append(workerpostP)

                        workeraddressP.append(workeraddress)
                        containerInternal.append(workeraddressP)

                        workerphonenumberP.append(workerphonenumber)
                        containerInternal.append(workerphonenumberP)

                        workerageP.append(workerage)
                        containerInternal.append(workerageP)

                        containerWorker.append(containerInternal)

                    })
                })
            }else{
                response.json().then(response=>alert(response.msg))
            }
        })
        .catch(error=>console.log(error))

}
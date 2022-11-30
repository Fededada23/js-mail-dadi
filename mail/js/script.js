const email = ['ciao@gmail.com','filippo@gmail.com', 'ciccio@mastrobattista.com', 'ciao@gmail.com'];
let cerca = prompt('inserisci mail per accedere');
let flag = false;

for(let i=0; i<email.length; i++){

    if(email[i] == cerca){
        flag = true;
    }
}

if(flag){
    console.log('email presente nella lista')
}

else{
    console.log('email non presente nella lista')
}
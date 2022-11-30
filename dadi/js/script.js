n_player = Math.floor(Math.random() * 5) +1;
n_computer = Math.floor(Math.random() * 5) +1;
console.log(`il numero del giocatore è ${n_player}`);
console.log(`il numero della cpu è ${n_computer}`);

if (n_player == n_computer){
    console.log('pareggio');
    
}

else if (n_player > n_computer){
    console.log(n_player);
    console.log(n_computer);
    console.log('il giocatore ha vinto');
}

else{
    console.log('cpu vince');
}
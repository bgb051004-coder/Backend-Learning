for(let i = 17; i >= 0; i--){
    let isPrime = true;
    if(i <= 1){
        isPrime = false;
    }else{
        for(let j = 2; j <= i - 1; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        console.log(`${i} la so nguyen to.`);
    }else{
        console.log(`${i} khong la so nguyen to.`)
    }
}
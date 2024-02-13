function evenOrOdd(){
    let num = prompt("Enter a number")
    if(num % 2 == 0 ){
        alert("The number you provided is an EVEN number");
    }
    else{
        alert("The number you provided is an ODD number")
    }
}

function color(){
    const colors = ['yellow', 'orange', 'blue', 'aqua']
    const randomNumbers = Math.floor(math.random()*4)
    const finalColor = colors[randomNumbers]
    document.body.style.backgroundColor = finalColor
}
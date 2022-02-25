






   


    const symbol = ["♦", "♥", "♠", "♣"];
    
   let randomNumber = () =>{
       
    const numb = ["A", "2", "3", "4", "5" , "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumb = Math.floor(Math.random() * numb.length)
    
    return numb[indexNumb];
    console.log("randomSymbol")
}
window.onload = () => {

    let indexSym = symbol [Math.floor(Math.random() * symbol.length)];

        let number = document.getElementById("number")
        let up = document.getElementById("up")
        let down = document.getElementById("down")

        up.innerHTML =indexSym
        down.innerHTML =indexSym
        number.innerHTML =randomNumber()

        if (indexSym == "♥" || indexSym =="♦") {
            up.style.color = "red"
            down.style.color = "red"
            number.style.color = "red"
        } else {
            up.style.color ="black"
            down.style.color ="black"
            number.style.color = "black"
        }
        
        };




        const element = document.querySelector("#button").addEventListener("click", window.onload);

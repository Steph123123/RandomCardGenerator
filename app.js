


window.onload = () => {
    document.querySelector("#button").addEventListener("click", () =>{
        document.querySelector(".card").classList.add("randomSymbol");
        document.querySelector(".card").innerHTML.add("randomNumber");
    }

    
    
    }

   function randomNumber() {


    let symbol = ["spades", "hearts", "clubs", "diamonds"];
    let indexSymbol = Math.floor(Math.random() * symbol.length);

    return symbol[indexSymbol];
}

   let randoSymbol = () =>{
       
    let numb = ["A", "2", "3", "4", "5" , "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumb = Math.floor(Math.random() * numb.length)
    
    return numb[indexNumb];
}


//no termina de correr la funcion
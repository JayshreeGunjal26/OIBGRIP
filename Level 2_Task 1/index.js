let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener("click", (a) => {
        switch(a.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'ANS':
                try{
                    display.innerText = math.evaluate(display.innerText);
                } catch{
                    display.innerText = 'INVALID INPUT';
                }
                break;
            default:
                display.innerText += a.target.innerText
        }
    });
});

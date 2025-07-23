result=document.getElementById('result');
input=document.getElementById('userInput');
toFarenhite=document.getElementById('toFarenhite');
toCelcius=document.getElementById('toCelcius');

function conversion(){
    let userInput=Number(input.value);
    if(toFarenhite.checked)
    {
        let cal=(userInput*9/5)+32;
        result.textContent=cal.toFixed(1);
    }
    else if(toCelcius.checked)
    {
        let cal=(userInput-32)*5/9;
        result.textContent=cal.toFixed(1);
    }
    else
    {
        result.textContent="Please select the units";
    }
}
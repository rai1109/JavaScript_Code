document.addEventListener('click',multiply);

function multiply(){
    var num1 = parseInt(document.getElementById('num1').value);
    
    var num2 = parseInt(document.getElementById('num2').value);

    console.log(num1*num2);

}
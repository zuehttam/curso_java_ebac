const form = document.getElementById("form-comparador");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    const mensagem = document.getElementById('mensagem');

    if (numeroB > numeroA) {
        mensagem.innerText = `Parabéns, o número 'B': ${numeroB} é maior que o número A: ${numeroA}`;;
        mensagem.style.backgroundColor = "green";
    } else if (numeroA > numeroB) {
        mensagem.innerText = `Ops, o número 'A': ${numeroA} é maior que o número B: ${numeroB}`;
        mensagem.style.backgroundColor = "red"; 
    } else {
        mensagem.innerText = 'Os números são iguais.';
        mensagem.style.backgroundColor = "gray"; 
    }
});
$(document).ready(function () {

    $('#cpf').mask('000.000.000-00', { placeholder: "000.000.000-00" });

    $('#telefone').mask('(00) 00000-0000', { placeholder: "(00) 00000-0000" });
    
    $('#cep').mask('00000-000', { placeholder: "00000-000" });

});

document.addEventListener('DOMContentLoaded', function () {
    const tipoMoradia = document.getElementById('tipo-moradia');
    const casaCampos = document.getElementById('casa-inputs');
    const apartamentoCampos = document.getElementById('apartamento-inputs');

    tipoMoradia.addEventListener('change', function () {
        if (tipoMoradia.value === 'casa') {
            casaCampos.classList.remove('hidden');
            apartamentoCampos.classList.add('hidden');
        } else if (tipoMoradia.value === 'apartamento') {
            casaCampos.classList.add('hidden');
            apartamentoCampos.classList.remove('hidden');
        } else {
            casaCampos.classList.add('hidden');
            apartamentoCampos.classList.add('hidden');
        }
    });
});

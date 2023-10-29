$(document).ready(function() {
    $('[type="submit"]').on('click', function() {
        const nomeAtividade = $('#input-tarefa').val();
        let ul = $('ul');
        let li = $('<li></li>').text(nomeAtividade).appendTo(ul);
        $('#input-tarefa').val("");
    });

    $('ul').on('click', 'li', function(e) {
        let li = e.target;
        $(li).addClass('clicado')
    });
});

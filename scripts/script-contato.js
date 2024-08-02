document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault()

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var mensagem = document.getElementById('mensagem').value

    var resposta = document.getElementById('formResposta')
    resposta.innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>`

    document.getElementById('formContato').reset() //limpar o formulário
})
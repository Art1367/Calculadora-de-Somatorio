function calcularSomatorio() {
    var inputNumero = document.getElementById('numero');
    var resultadoElement = document.getElementById('resultado');

    // Obtém o número digitado pelo usuário
    var numero = parseInt(inputNumero.value);

    // Verifica se o número é um inteiro positivo
    if (Number.isInteger(numero) && numero > 0) {
        // Calcula o somatório e os números somados
        var somatorio = 0;
        var numerosSomados = [];

        for (var i = 1; i < numero; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                somatorio += i;
                numerosSomados.push(i);
            }
        }

        // Exibe o resultado na página
        resultadoElement.innerHTML = 'O somatório dos múltiplos de 3 ou 5 é: ' + somatorio +
            '<br>Números somados: ' + numerosSomados.join(', ');
    } else {
        // Exibe uma mensagem de erro se o número não for válido
        resultadoElement.textContent = 'Por favor, digite um número inteiro positivo válido.';
    }
}
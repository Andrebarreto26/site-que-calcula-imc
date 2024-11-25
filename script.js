document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || !nome || isNaN(idade) || idade <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para nome, idade, peso e altura.";
        resultadoDiv.style.color = "red";
        resultadoDiv.style.backgroundColor = "#f8d7da";
        resultadoDiv.style.padding = "10px";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 39.9) {
        classificacao = 'Obesidade';
    } else {
        classificacao = 'Obesidade grave';
    }

    resultadoDiv.innerHTML = `
        <strong>Nome:</strong> ${nome}<br>
        <strong>Idade:</strong> ${idade} anos<br>
        <strong>Peso:</strong> ${peso} kg<br>
        <strong>Altura:</strong> ${altura} m<br>
        <strong>IMC:</strong> ${imc.toFixed(2)}<br>
        <strong>Classificação:</strong> ${classificacao}
    `;
    resultadoDiv.style.color = "black";
    resultadoDiv.style.backgroundColor = "";
    resultadoDiv.style.padding = "10px";
});

document.getElementById('limpar').addEventListener('click', function() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
});
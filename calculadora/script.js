const form = document.getElementById('form');



form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('valor');
    let descrição = '';

    value.classList.add('atenção');

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        descrição = 'Abaixo do peso';
    }   else if (imc >= 18.5 && imc < 24.9) {
        descrição = 'Peso ideal';
        value.classList.remove('atenção');
        value.classList.add('normal');
    } else if (imc >= 25 && imc < 29.9) {
        descrição = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        descrição = 'Obesidade grau 1';
    }
    else if (imc >= 35 && imc < 39.9) {
        descrição = 'Obesidade grau 2';
    } else if (imc >= 40) {
        descrição = 'Obesidade morbida';
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descrição; 
});
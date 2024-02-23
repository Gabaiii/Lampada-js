const turnOn = document.getElementById('Ligar');
const turnOff = document.getElementById('Desligar');
const lamp = document.getElementById('lamp');

//como criar uma função

function Ligar (){
    lamp.src = 'Lamppjs.jpg'
}

turnOn.addEventListener('click', Ligar);

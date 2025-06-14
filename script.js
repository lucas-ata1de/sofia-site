//var
let menuOpener = document.querySelector('.menuOpener')
let aberto = false
let menuOptions = document.querySelector('.menuOptions')

let imgs = document.querySelector('.slides')
let img = document.querySelectorAll('.slides img')
let ID = 0;
let rightButton = document.querySelector('.rightButton')
let leftButton = document.querySelector('.leftButton')
let player = document.querySelector('#player')




//events
setInterval(Novadata,60000)
Novadata()

rightButton.addEventListener('click',carroselforward)
leftButton.addEventListener('click',carroselbackward)
player.addEventListener('click',playAudio)

//functions
function menu() {
    if (aberto) {
        menuOpener.style.transform = 'rotate(0deg)';
        aberto = false;
        menuOptions.classList.remove('show');
        setTimeout(() => {
            menuOptions.style.display = 'none';
        }, 500);
    } else {
        menuOpener.style.transform = 'rotate(90deg)';
        aberto = true;
        menuOptions.style.display = 'block';
        setTimeout(() => {
            menuOptions.classList.add('show');
        }, 0);
    }
}
function carroselforward(){
    ID++;
    ID = (ID > img.length -1)?0:ID;
    imgs.style.transform = `translateX(${-ID * 500}px)`;
}
function carroselbackward(){
    ID-=1;
    ID = (ID === -1)?img.length - 1:ID
    imgs.style.transform = `translateX(${-ID * 500}px)`;
}
function Novadata() {
    let startDate = new Date("2023-01-18");
    let currentDate = new Date();
    startDate.setHours(18)

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate() - 1;
    let hours = currentDate.getHours() - startDate.getHours();
    let minutes = currentDate.getMinutes() - startDate.getMinutes();

    // Correções para valores negativos ou incorretos
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Ajustar os dias para o último dia do mês anterior
        currentDate.setMonth(currentDate.getMonth() - 1);
        days = days + (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate());
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Atualizar os elementos HTML com os valores calculados
    document.querySelector('.yearArea').innerHTML = years;
    document.querySelector('.monthArea').innerHTML = months;
    document.querySelector('.dayArea').innerHTML = days;
    document.querySelector('.hrArea').innerHTML = hours;
    document.querySelector('.minArea').innerHTML = minutes;
}
function playAudio(){
    let audio = document.querySelector('#audio audio')
    let input = parseInt(document.querySelector('#audioSearcher').value.trim())
    let text = document.querySelector('#audio p')
    document.querySelector('#audioSearcher').value = ''
    if(input >= 1){
        text.innerHTML = ''
        audio.setAttribute('src',`daily audios/audio${input}.opus`)
        audio.style.display = 'block'
    }else{
        text.innerHTML = "Nenhum audio encontrado"
        audio.style.display = 'none'
    }
}
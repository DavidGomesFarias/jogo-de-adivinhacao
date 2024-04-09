const btn = document.querySelector('.btn')
const resposta = document.querySelector('.resposta')
const wrapper = document.querySelector('.wrapper')
const numeroAleatorio = Math.floor(Math.random() * 101)
let span = document.querySelector('.p')
let count = 10
let countAcima = 0
span.textContent = `Tentativas: ${count}`
let numeroDigitado = document.querySelector('.input')
numeroDigitado.focus()
span.style.color = 'green'
wrapper.style.boxShadow = '0px 0px 10px green'
btn.addEventListener('click', () => {
    count--
    countAcima++
    span.textContent = `Tentativas: ${count}`
    if(count >= 7) {
        span.style.color = 'green'
        wrapper.style.boxShadow = '0px 0px 10px green'
    } else if(count < 7 && count >= 4) {
        span.style.color = 'yellow'
        wrapper.style.boxShadow = '0px 0px 10px yellow'
    } else if(count <= 3) {
        span.style.color = 'red'
        wrapper.style.boxShadow = '0px 0px 10px red'
    }

    let numeroDigitado = document.querySelector('.input')
    if(numeroDigitado.value == numeroAleatorio) {
        const reiniciar = document.querySelector('.reiniciar')
        const resposta = document.querySelector('.resposta')
        const jogo = document.querySelector('.jogo')
        jogo.style.display = 'none'
        if(countAcima == 1) {
            resposta.innerHTML = `<p class="p-jogar-novamente" style="color: green;">Incrível, você acertou de primeira!!!!,o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 2) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Uau!, você é muito sortudo, acertou na <span style="color: green;">2° tentativa</span>, o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 3) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Caraca!, você é sortudo, acertou na <span style="color: green;">3° tentativa</span>, o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 4) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Parabéns, você usou <span style="color: yellow;">${countAcima} tentativas</span>, o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 5) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Parabéns, você usou <span style="color: yellow;">${countAcima} tentativas</span> o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 6) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Parabéns, você usou <span style="color: yellow;">${countAcima} tentativas</span> o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 7) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Foi por pouco,mas você acertou!, você usou <span style="color: red;">${countAcima} tentativas</span>  o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 8) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Foi por pouco,mas você acertou!, você usou <span style="color: red;">${countAcima} tentativas</span> o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 9) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Foi por pouco,mas você acertou!, você usou <span style="color: red;">${countAcima} tentativas</span> o número da sorte é ${numeroAleatorio}</p>`
        } else if(countAcima == 10) {
            resposta.innerHTML = `<p class="p-jogar-novamente">Foi por pouco,mas você acertou!, você usou <span style="color: red;">${countAcima} tentativas</span> o número da sorte é ${numeroAleatorio}</p>`
        }
        
        reiniciar.innerHTML = `<button class="btn-reiniciar">Jogar novamente</button>`
        const reiniciarJogo = document.querySelector('.btn-reiniciar')
        reiniciarJogo.addEventListener('click', () => {
            location.reload()
        })
        count = 10
    } else if(numeroDigitado.value < numeroAleatorio) {
        resposta.innerHTML = `<p>O número que você digitou é menor que o número da sorte</p>`
    } else if(numeroDigitado.value > numeroAleatorio) {
        resposta.innerHTML = `<p>O número que você digitou é maior que o número da sorte</p>`
    }

    if(count == 0) {
        const reiniciar = document.querySelector('.reiniciar')
        const resposta = document.querySelector('.resposta')
        const jogo = document.querySelector('.jogo')
        jogo.style.display = 'none'
        resposta.innerHTML = `<p class="p-jogar-novamente" style="color: red;">Kkkkkkkkkk, seu animal!!!, você conseguiu usar TODAS as tentativas e não acertou, o número da sorte era ${numeroAleatorio}</p>`
        span.style.color = 'red'
        wrapper.style.boxShadow = '0px 0px 10px red'
        reiniciar.innerHTML = `<button class="btn-reiniciar">Reiniciar o jogo</button>`
        const reiniciarJogo = document.querySelector('.btn-reiniciar')
        reiniciarJogo.addEventListener('click', () => {
            location.reload()
        })
    }


    numeroDigitado.value = ''
    numeroDigitado.focus()
    
})
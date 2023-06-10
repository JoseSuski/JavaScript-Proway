function advinha(pNum, pResultado) {
    if ((isNaN(pNum.value)) || (pNum.value.trim() === '')) {
        alert('Necessário informar o valor')
        pNum.focus()
        return
    }

    rnd = Math.floor(Math.random() * 10)
    console.log(rnd)
    res = new Promise((resolve, reject) => {
        if (rnd == pNum.value)
            resolve('Acertou. Parabéns...!')
        else
            reject(`Errou. O valor gerado foi ${rnd}.`)
    })

    res
        .then(valor => pResultado.innerHTML = valor)
        .catch(erro => pResultado.innerHTML = erro)
}
function pesquisaCNPJ(pCNPJ, pRes) {
    if (!(pCNPJ) || (pCNPJ.value.trim() == '')) {
        alert('Necessário informar o CNPJ')
        pCNPJ.focus()
        return
    }

    cnpj = pCNPJ.value.replace('/', '').replaceAll('.', '').replace('-', '')
    url = `https://publica.cnpj.ws/cnpj/${cnpj}`

    req = new XMLHttpRequest()
    req.open('GET', url)
    req.onreadystatechange = function () {
        if ((req.status == 200) && (req.readystate == 4)) {
            res = JSON.parse(req.responseText)
            console.log(pRes)
            p = new Promise((resolve, reject) => {
                resolve('<b>DADOS DE RETORNO</b>' +
                    '<br <b>/>Razão Social:</b> ' + res['razao_social'] +// OU pRes.innerHTML = res.razao_social
                    '<br /><b>Capital Social:</b> ' + res['capital_social'])
                reject('Erro no retorno de dados')
            })
            p.then(valor => pRes.innerHTML = valor)
                .catch(erro = pRes.innerHTML = erro)
        }
    }
    req.send()
}
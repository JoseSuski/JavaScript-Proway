function consultaCEP(pCEP) {
    if (!(pCEP))
        return
    cep = pCEP.replace('-', '')
    if (cep.length != 8) {
        document.querySelector('#invalido').innerHTML = 'Cep inválido'
        limpaCampos()
        return
    }
    url = `https://viacep.com.br/ws/${pCEP}/json/`
    req = new XMLHttpRequest()
    req.open('GET', url)
    console.log(req)
    res = req.onreadystatechange = function () {
        if ((req.status == 200) && (req.readyState == 4)) {
            try {
                res = JSON.parse(req.responseText)
                document.querySelector('#invalido').innerHTML = (res.erro) ? 'CEP Inválido' : ''
                if (!(res.erro)) {
                    document.querySelector('#txtCEP').value = res.cep
                    document.querySelector('#txtLogradouro').value = res.logradouro
                    document.querySelector('#txtComplemento').value = res.complemento
                    document.querySelector('#txtBairro').value = res.bairro
                    document.querySelector('#txtLocalidade').value = res.localidade
                    document.querySelector('#txtUF').value = res.uf
                    document.querySelector('#txtIBGE').value = res.ibge
                    document.querySelector('#txtDDD').value = res.ddd
                    return
                }
                limpaCampos()
            } catch (error) {
                console.log(error)
            }
        }
    }
    req.send()

}

function limpaCampos() {
    document.querySelector('#txtLogradouro').value = ''
    document.querySelector('#txtComplemento').value = ''
    document.querySelector('#txtBairro').value = ''
    document.querySelector('#txtLocalidade').value = ''
    document.querySelector('#txtUF').value = ''
    document.querySelector('#txtIBGE').value = ''
    document.querySelector('#txtDDD').value = ''
}
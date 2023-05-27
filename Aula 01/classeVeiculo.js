export {Carro}

class Veiculo {

    constructor(modelo, ano) //Parâmetros
    {
        //Atributos da Classe sendo criados pelo método constutor
        this._modelo = modelo
        this._ano = ano
        this._ligado = false
        this._velocidade = 0
        this._marcha = 0
        this._velocidadeMaxima = 70
        this._velocidadeMinima = -10

    }

    ligar() {

        if (this._ligado) {
            console.log('O veículo já está ligado.')
            return
        }
        this._ligado = true
        console.log('Veículo está ligado')

    }

    desligar() {

        if (this._ligado) {
            this._ligado = false
            console.log('O veículo foi desligado')
            return
        }
        console.log('Veículo já está desligado')

    }

    defineMarcha(pVelocidade) {

        if (this._ligado) {
            if (pVelocidade < 0)
                this._marcha = -1  //Marcha Ré
            else {
                if (pVelocidade == 0)
                    this._marcha = 0 //Neutro
                else {
                    if (pVelocidade <= 20)
                        this._marcha = 1
                    else {
                        if (pVelocidade <= 30)
                            this._marcha = 2
                        else {
                            if (pVelocidade <= 50)
                                this._marcha = 3
                            else {
                                if (pVelocidade <= 70)
                                    this._marcha = 4
                                else
                                    this._marcha = 5
                            }
                        }
                    }
                }
            }
            return
        }
        console.log('Veículo deve estar ligado para definir marcha')

    }

    acelerar() {

        if (this._ligado) {
            if (this._velocidade < this._velocidadeMaxima) {
                this._velocidade += 10
                console.log(`Veículo foi acelerado. Velocidade atual: ${this._velocidade}`)
                this.defineMarcha(this._velocidade)
            }
            else {
                console.log(`Não é possível acelerar mais. Velocidade atual ${this._velocidade}`)
                return
            }
            return
        }
        console.log('O veículo precisa estar ligado para acelerar')

    }

    freiar() {

        if (this._ligado) {
            if (this._velocidade > this._velocidadeMinima) {
                this._velocidade -= 10
                console.log(`Veículo foi freado. Velocidade Atual: ${this._velocidade}`)
                this.defineMarcha(this._velocidade)
            }
            else {
                console.log(`Não é possível diminuir a velocidade. Velocidade atual ${this._velocidade}`)
            }
            return
        }
        console.log('O Veículo precisa estar ligado para frear')

    }

    obterMarcha() {
        //Operadores ternários
        console.log((this._marcha > 0) ? `Marcha atual: ${this._marcha}º marcha.` :
            (this._marcha == 0) ? 'Marcha atual: Neutro' : 'Marcha atual: Ré')
    }

}

class Carro extends Veiculo {

    testarCarro(){
        console.log('Teste')
    }

}

class Moto extends Veiculo {

}



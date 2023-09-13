let EscolhaPlayer = ''

function play(){
    let rock = document.getElementById('pedra')
    let paper = document.getElementById('papel')
    let scissors = document.getElementById('tesoura')
    let resposta = document.getElementById('res')


    rock.addEventListener("click", () => {
        EscolhaPlayer = 'Pedra'
        let EscolhaCpu = Math.floor(Math.random() * 3 +1);

        if(EscolhaCpu == 1){
            resposta.innerHTML = `Ocorreu um Empate`
        }
        else if(EscolhaCpu == 2){
            resposta.innerHTML = `Você escolheu Pedra e perdeu para o Papel`
        }
        else if(EscolhaCpu == 3){
            resposta.innerHTML = `Você Escolheu Pedra e ganhou da Tesoura`
        }
    })
    
    paper.addEventListener("click", function(){
        EscolhaPlayer = 'Papel'
        let EscolhaCpu = Math.floor(Math.random() * 3 +1);

        if(EscolhaCpu == 1){
            resposta.innerHTML = `Você escolheu Papel e ganhou da Pedra`
        }
        else if(EscolhaCpu == 2){
            resposta.innerHTML = `Ocorreu um Empate`
        }
        else if(EscolhaCpu == 3){
            resposta.innerHTML = `Você Escolheu Papel e perdeu da Tesoura`
        }
    })

    scissors.addEventListener("click" , function(){
        EscolhaPlayer = 'Tesoura'
        let EscolhaCpu = Math.floor(Math.random() * 3 +1);

        if(EscolhaCpu == 1){
            resposta.innerHTML = `Você escolheu Tesoura e perdeu da Pedra`
        }
        else if(EscolhaCpu == 2){
            resposta.innerHTML = `Você escolheu Tesoura e Ganhou do Papel`
        }
        else if(EscolhaCpu == 3){
            resposta.innerHTML = `Ocorreu um Empate`
        }
    })
}
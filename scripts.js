

const Key = "612c5e48778fad7cb801e2ae55c7e184"


function colocarDadosNaTela(dados){


    document.querySelector(".Cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".Img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}

async function buscarCidade(cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then( resposta => resposta.json())


    colocarDadosNaTela(dados)

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".Botao-de-pesquisa-cidade").value

    
    buscarCidade(cidade)
}
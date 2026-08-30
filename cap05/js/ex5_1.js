const frm = document.querySelector('form')
const resp = document.querySelector("#resp")

frm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let resposta = "" // variavel do tipo string para concatenar a resposta

    // cria laçop de repetição
    for(let i =1; i<=10; i++) {
       // resposta = resposta + numero + "X" + i +" = " + (numero*i) + "\n"
        resposta = `${resposta}${numero} X ${i} = ${numero*i}\n`
    }
    //conteudo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})
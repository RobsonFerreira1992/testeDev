function puxarDados() {
    fetch('./array.json')
        .then(response => response.json()).then(dados => {
            let novosDados = dados;
            dados.forEach((dado) => {
                const tabela = document.querySelector(".tabela");
                const linha = document.createElement('tr');
                const conteudoLinha = `
                    <tr>
                        <th scope='row'>${dado['nome']}</th>
                        <td>${dado['data_nasc']}</td>
                        <td>${dado['cpf']}</td>
                        <td>${dado['rg']}</td>
                        <td>${dado['email']}</td>
                        <td>${dado['celular']}</td>
                      

                        <td>
                            <button type='button' class='btn btn-primary btn-sm data-dismiss="modal" '>Detalhes</button>
                        </td>
                    </tr>
                `;


                linha.innerHTML = conteudoLinha;
                tabela.appendChild(linha);
            });
            const botaoDados = document.querySelectorAll('.btn-primary');

            function tabDados(id) {

                let dadosArray = [
                    novosDados[id]['nome'],
                    novosDados[id]['data_nasc'],
                    novosDados[id]['cpf'],
                    novosDados[id]['rg'],
                    novosDados[id]['email'],
                    novosDados[id]['celular']

                ]
                alert(dadosArray);


            }

            botaoDados.forEach((botao, index) => {
                botao.setAttribute("id", index);
                botao.addEventListener("click", () => {
                    let id = botao.getAttribute('id');

                    tabDados(id);
                })


            })

        })

}




puxarDados();
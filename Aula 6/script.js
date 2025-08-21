function adicionar() {
    // Pega o elemento input onde o usuário digita a tarefa
    const input = document.getElementById("caixinha");
    
    // Pega o elemento ul ou ol que contém a lista de tarefas
    const lista = document.getElementById("lista-tarefas");

    // Pega o texto digitado no input e remove os espaços no começo e no fim
    const texto = input.value.trim();

    // Verifica se o texto não está vazio
    if (texto !== "") {
        // Cria um novo elemento <li> para representar uma tarefa na lista
        const item = document.createElement("li");

        // Cria um elemento <span> para mostrar o texto da tarefa
        const tarefaTexto = document.createElement("span");
        tarefaTexto.textContent = texto;          // Define o texto da tarefa
        tarefaTexto.style.cursor = "pointer";    // Muda o cursor para "pointer" ao passar o mouse

        // Cria um botão para marcar a tarefa como concluída
        const botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "✔️";         // Ícone do botão
        botaoConcluir.style.marginLeft = "10px"; // Espaço à esquerda do botão
        botaoConcluir.title = "Marcar como concluído"; // Texto que aparece ao passar o mouse

        // Cria um botão para apagar a tarefa
        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "🗑️";           // Ícone do botão
        botaoApagar.style.marginLeft = "5px";    // Espaço à esquerda do botão
        botaoApagar.title = "Apagar tarefa";     // Texto que aparece ao passar o mouse

        // Adiciona um evento ao botão "concluir"
        botaoConcluir.addEventListener("click", () => {
            // Se o texto da tarefa estiver riscado, remove o risco e muda a cor para preto
            if (tarefaTexto.style.textDecoration === "line-through") {
                tarefaTexto.style.textDecoration = "none";
                tarefaTexto.style.color = "black";
            } else {
                // Caso contrário, risca o texto e muda a cor para cinza
                tarefaTexto.style.textDecoration = "line-through";
                tarefaTexto.style.color = "gray";
            }
        });

        // Adiciona um evento ao botão "apagar"
        botaoApagar.addEventListener("click", () => {
            // Remove o item da lista de tarefas
            lista.removeChild(item);
        });

        // Adiciona o texto da tarefa e os dois botões dentro do <li>
        item.appendChild(tarefaTexto);
        item.appendChild(botaoConcluir);
        item.appendChild(botaoApagar);

        // Adiciona o <li> à lista de tarefas
        lista.appendChild(item);

        // Limpa o campo de input após adicionar a tarefa
        input.value = "";
        
        // Coloca o cursor de volta no input para facilitar digitar outra tarefa
        input.focus();
    }
}

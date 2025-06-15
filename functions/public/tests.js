/**
 * tests.js
 * * Este arquivo é carregado dinamicamente pelo index.html.
 * Coloque aqui toda a lógica do teste que você deseja executar.
 * O código neste arquivo tem acesso total ao DOM do index.html.
 */

console.log("O arquivo tests.js foi carregado e executado!");

// Função principal para iniciar o teste.
function startTest() {
    // 1. Encontra o contêiner no DOM onde o teste será renderizado.
    const testContainer = document.getElementById('test-container');

    // Verifica se o contêiner foi encontrado.
    if (!testContainer) {
        console.error("Erro: O elemento com id 'test-container' não foi encontrado no DOM.");
        return;
    }

    // 2. Limpa qualquer conteúdo anterior e injeta o HTML do teste.
    //    Você pode criar uma estrutura de teste complexa aqui.
    testContainer.innerHTML = `
        <div class="bg-gray-800 p-8 rounded-xl shadow-2xl animate-fade-in">
            <h2 class="text-3xl font-bold text-center text-white mb-6">Teste Iniciado!</h2>
            <p class="text-gray-300 text-center mb-8">
                TESTE 1 - IA APP <strong>tests.js</strong>.
                Botão para acessar a IA do app
            </p>
           <div class="flex justify-center mb-8">
    <button onclick="document.getElementById('gpt-frame').src='/gpt/index.html'" 
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
        Teste IA
    </button>
</div>
<iframe id="gpt-frame" width="100%" height="800" frameborder="0" class="rounded-lg shadow"></iframe>
            </div>
        </div>
        <style>
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
            }
        </style>
    `;

    // 3. (Opcional) Adicionar listeners de eventos ou outra lógica de inicialização.
    console.log("Interface do teste renderizada com sucesso.");
}

// Inicia o teste assim que o script é executado.
// Usar um setTimeout de 0ms garante que a renderização da página principal seja concluída
// antes de manipular o DOM, evitando possíveis condições de corrida.
setTimeout(startTest, 0);


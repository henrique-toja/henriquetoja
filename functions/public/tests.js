console.log("O arquivo tests.js foi carregado e executado!");

// Função principal para iniciar o teste.
function startTest() {
    const testContainer = document.getElementById('test-container');
    if (!testContainer) {
        console.error("Erro: O elemento com id 'test-container' não foi encontrado no DOM.");
        return;
    }

    // Renderização dos botões de seleção
    testContainer.innerHTML = `
        <div class="bg-gray-800 p-8 rounded-xl shadow-2xl animate-fade-in">
            <h2 class="text-3xl font-bold text-center text-white mb-6">Escolha um teste:</h2>
            <div class="flex flex-col lg:flex-row gap-6 justify-center mb-8">
                <button id="btn-chat-ia" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg shadow">
                    CHAT IA APP
                </button>
                <button id="btn-person-test" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg shadow">
                    Teste de Personalidade
                </button>
                <button id="btn-debate" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg shadow">
                    Debate IAs
                </button>
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

    // Função para exibir um teste dentro de um iframe
    function showTestFrame(src, titulo) {
        testContainer.innerHTML = `
            <div class="bg-gray-800 p-4 sm:p-8 rounded-xl shadow-2xl animate-fade-in">
                <h2 class="text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6">${titulo}</h2>
                <iframe src="${src}" width="100%" height="800" frameborder="0" class="rounded-lg shadow bg-white"></iframe>
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
    }

    // Listeners para os botões
    document.getElementById('btn-chat-ia').onclick = () => {
        showTestFrame('/gpt/index.html', 'CHAT IA APP');
    };
    document.getElementById('btn-person-test').onclick = () => {
        showTestFrame('/person-test/index.html', 'Teste de Personalidade');
    };
    document.getElementById('btn-debate').onclick = () => {
        showTestFrame('/debate/index.html', 'Debate');
    };

    console.log("Interface de seleção de testes renderizada com sucesso.");
}

// Inicialização do script
setTimeout(startTest, 0);
document.addEventListener('DOMContentLoaded', () => {
    // Registro do Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('Service Worker registrado com sucesso:', registration))
            .catch(error => console.log('Falha ao registrar Service Worker:', error));
    }

    // --- Dados do teste ---
    const traits = [ { name: "Narcisista", questions: ["Gosto de receber elogios e reconhecimento pelo que faço.", "Acredito que minhas necessidades são mais importantes que as dos outros.", "Costumo me sentir superior à maioria das pessoas.", "Fico irritado se não sou o centro das atenções.", "Reconheço facilmente meus próprios méritos.", "Acho que mereço privilégios especiais.", "Tenho dificuldades em aceitar críticas sobre mim."] }, { name: "Antissocial", questions: ["Não vejo problema em quebrar regras para conseguir o que quero.", "Já menti ou enganei pessoas para benefício próprio.", "Me sinto pouco à vontade em respeitar autoridades.", "Tenho facilidade em manipular situações a meu favor.", "Raramente me arrependo de prejudicar alguém para atingir meus objetivos.", "Consigo agir friamente quando necessário.", "Costumo ignorar normas sociais quando acho conveniente."] }, { name: "Histriônico", questions: ["Gosto de chamar a atenção em rodas de conversa.", "Minha expressão emocional costuma ser intensa.", "Uso minha aparência para causar impacto nos outros.", "Posso ser considerado(a) dramático(a) por quem me conhece.", "Busco aprovação constante das pessoas ao meu redor.", "Me sinto desconfortável se não sou notado(a) em público.", "Tenho facilidade para influenciar as emoções dos outros."] }, { name: "Dependente", questions: ["Tenho dificuldade para tomar decisões sozinho(a).", "Preciso do apoio dos outros para iniciar projetos.", "Tenho medo de perder pessoas próximas.", "Evito conflitos para não desagradar quem gosto.", "Sinto insegurança ao agir sem orientação.", "Busco constantemente conselhos antes de agir.", "Cedo facilmente para manter a aprovação dos outros."] }, { name: "Sádico", questions: ["Já ri ou tirei sarro de alguém em situação constrangedora.", "Gosto de ter domínio sobre pessoas em situações cotidianas.", "Faço brincadeiras que podem humilhar outras pessoas.", "Já provoquei alguém apenas para ver sua reação.", "Me sinto satisfeito(a) ao ver alguém se dando mal em disputas.", "Já impus minha vontade usando ameaças ou intimidação.", "Exerço poder sobre pessoas mais frágeis sem culpa."] }, { name: "Compulsivo", questions: ["Me incomodo com ambientes desorganizados.", "Sigo rotinas rígidas no meu dia a dia.", "Tenho dificuldade em delegar tarefas a outras pessoas.", "Reviso frequentemente meu trabalho para evitar erros.", "Sou perfeccionista com minhas obrigações.", "Me adapto mal a mudanças inesperadas.", "Priorizar organização é mais importante que relaxar."] }, { name: "Negativista", questions: ["Costumo fazer o oposto do que esperam de mim.", "Reclamo de situações mesmo quando não são tão ruins.", "Dificilmente aceito ordens sem questionar.", "Perco a motivação facilmente quando pressionado(a).", "Resisto passivamente a tarefas impostas.", "Sinto raiva ao cumprir regras que considero injustas.", "Adio obrigações que me são impostas."] }, { name: "Esquivo", questions: ["Evito situações sociais por medo de rejeição.", "Me sinto desconfortável ao ser observado(a).", "Prefiro me isolar a correr riscos de crítica.", "Sinto receio ao iniciar conversas com desconhecidos.", "Acho que não sou bom o suficiente para certos grupos.", "Fujo de experiências sociais novas.", "Me preocupo excessivamente com opiniões negativas."] }, { name: "Depressivo", questions: ["Sinto falta de ânimo na maior parte dos dias.", "Tenho baixa autoestima e autocrítica frequente.", "Atividades que antes gostava perderam a graça.", "Me sinto desmotivado(a) sem razão aparente.", "Enxergo o futuro de forma pessimista.", "Tenho dificuldade em me conectar emocionalmente.", "Sinto um peso emocional constante."] }, { name: "Masoquista", questions: ["Aceito situações desconfortáveis para agradar os outros.", "Permaneço em relações onde sou desvalorizado(a).", "Costumo me autossabotar em momentos importantes.", "Sinto culpa ao buscar prazer ou reconhecimento.", "Evito me defender quando sou criticado(a).", "Acho que mereço sofrer por meus erros.", "Recuso boas oportunidades por achar que não sou merecedor(a)."] }, { name: "Borderline", questions: ["Tenho mudanças intensas de humor.", "Oscilo entre idealizar e desvalorizar pessoas próximas.", "Tenho medo intenso de ser abandonado(a).", "Sou impulsivo(a) diante de frustrações.", "Me envolvo em relações instáveis e intensas.", "Tenho dificuldade em controlar emoções.", "Às vezes sinto vazio e desesperança sem motivo."] }, { name: "Paranoico", questions: ["Desconfio das intenções das pessoas.", "Acredito que falam de mim pelas costas.", "Tomo precauções exageradas com minha privacidade.", "Interpreto comentários neutros como ameaças.", "Tenho dificuldade em confiar plenamente nos outros.", "Fico atento(a) a sinais de traição.", "Sinto necessidade constante de me proteger."] }, { name: "Esquizoide", questions: ["Prefiro atividades solitárias.", "Sinto pouca vontade de ter relações íntimas.", "Expressar emoções não faz parte do meu dia a dia.", "Sou indiferente a elogios e críticas.", "Tenho poucos amigos próximos.", "Não sinto falta de companhia.", "Demonstro pouco interesse por experiências sexuais com outros."] }, { name: "Esquizotípico", questions: ["Tenho crenças ou experiências incomuns.", "Às vezes percebo sinais ocultos em situações cotidianas.", "Minha forma de pensar é considerada excêntrica.", "Tenho dificuldade em manter conversas por sentir-me deslocado(a).", "Desconfio de coincidências, achando que têm significado especial.", "Minhas emoções são pouco compreendidas pelos outros.", "Me sinto diferente e isolado(a) da maioria."] }, { name: "Hipomaníaco", questions: ["Tenho períodos de energia incomum, mesmo dormindo pouco.", "Falo mais rápido ou mais do que o usual às vezes.", "Tomo decisões impulsivas quando estou animado(a).", "Busco iniciar novos projetos constantemente.", "Me envolvo em atividades de risco quando estou eufórico(a).", "Minha autoconfiança aumenta abruptamente em certos períodos.", "Tenho pensamentos acelerados e dificuldade para relaxar."] }];
    
    // MODIFICADO: Texto da pergunta de controle
    const controlQuestions = [ { idx: 35, text: "Para validar sua atenção, por favor, escolha a opção 'Não exatamente' nesta afirmação.", special: 'control-attention' }, { idx: 71, text: "Eu nunca cometo erros em tarefas importantes.", special: 'control-lie' }, { idx: 98, text: "Eu sou honesto(a) em absolutamente todas as situações, sem exceção.", special: 'control-lie' }];


    // --- Lógica Imersiva Otimizada ---
    const app = {
        // Seletores de elementos do DOM
        introScreen: document.getElementById('intro-screen'),
        startButton: document.getElementById('start-button'),
        carousel: document.getElementById('quiz-carousel'),
        header: document.getElementById('quiz-header'),
        quizTunnel: document.getElementById('quiz-tunnel'),
        progressBar: document.getElementById('progress-bar'),

        // Estado do aplicativo
        allQuestions: [],
        answers: [],
        currentIndex: 0,
        zSpacing: -1500, // Distância entre os cartões no eixo Z
        
        init() {
            this.buildQuestionList();
            this.answers = new Array(this.allQuestions.length).fill(null);
            
            // Listener para o botão de iniciar
            this.startButton.addEventListener('click', () => this.startQuiz());
        },

        buildQuestionList() {
            let flatQuestions = [];
            traits.forEach((trait, traitIndex) => {
                trait.questions.forEach(qText => flatQuestions.push({ text: qText, traitIndex }));
            });
            controlQuestions.forEach(cq => {
                flatQuestions.splice(cq.idx, 0, { text: cq.text, isControl: true, special: cq.special, traitIndex: null });
            });
            this.allQuestions = flatQuestions;
        },
        
        startQuiz() {
            // Esconde a tela de introdução e mostra a interface do quiz
            this.introScreen.classList.add('hidden');
            this.header.classList.remove('hidden');
            this.quizTunnel.classList.remove('hidden');
            
            // Move a câmera para a posição inicial e renderiza o primeiro cartão
            this.moveTo(0);
            this.renderVisibleCards();
        },

        // A MÁGICA DA OTIMIZAÇÃO: Renderiza apenas os cartões necessários
        renderVisibleCards() {
            this.carousel.innerHTML = ''; // Limpa os cartões antigos
            
            // Define uma "janela" de renderização: o anterior, o atual e os dois próximos
            const startIndex = Math.max(0, this.currentIndex - 1);
            const endIndex = Math.min(this.allQuestions.length, this.currentIndex + 2);

            for (let i = startIndex; i < endIndex; i++) {
                const q = this.allQuestions[i];
                const card = document.createElement('div');
                card.className = 'question-card';
                // Posiciona o cartão no seu lugar correto no túnel 3D
                card.style.transform = `translateX(-50%) translateY(-50%) translateZ(${i * this.zSpacing}px)`;
                
                // MODIFICADO: Novas opções de resposta
                const options = ["Discordo", "Não exatamente", "Concordo"];
                card.innerHTML = `
                    <p class="question-counter">${i + 1} / ${this.allQuestions.length}</p>
                    <p class="question-text">${q.text}</p>
                    <div class="options-grid" data-index="${i}">
                        ${options.map((opt, k) => `
                            <input type="radio" name="q${i}" id="q${i}_opt${k+1}" value="${k+1}" class="option-radio">
                            <label for="q${i}_opt${k+1}" class="option-label">${opt}</label>
                        `).join('')}
                    </div>
                `;
                
                card.querySelector('.options-grid').addEventListener('change', (e) => this.handleAnswer(e));
                this.carousel.appendChild(card);
            }
        },

        // Move a "câmera" para frente no túnel
        moveTo(index) {
            const newZ = index * -this.zSpacing;
            this.carousel.style.transform = `translateZ(${newZ}px)`;
        },

        handleAnswer(e) {
            const index = parseInt(e.target.closest('.options-grid').dataset.index);
            // Previne responder a perguntas que não são a atual
            if (index !== this.currentIndex) return;
            
            this.answers[index] = parseInt(e.target.value);
            e.target.closest('.options-grid').classList.add('options-disabled');
            
            setTimeout(() => {
                if (this.currentIndex < this.allQuestions.length - 1) {
                    this.currentIndex++;
                    this.moveTo(this.currentIndex);
                    this.renderVisibleCards(); // Re-renderiza a janela de cartões
                    this.updateProgress();
                } else {
                    this.showResults();
                }
            }, 300);
        },
        
        updateProgress() {
            const progress = ((this.currentIndex) / this.allQuestions.length) * 100;
            this.progressBar.style.width = `${progress}%`;
        },

        showResults() {
            const scores = traits.map(t => ({ name: t.name, score: 0, count: 0 }));
            this.allQuestions.forEach((q, i) => { if (q.traitIndex !== null && this.answers[i]) { scores[q.traitIndex].score += this.answers[i]; scores[q.traitIndex].count++; } });
            
            // MODIFICADO: Fórmula de pontuação ajustada para a escala de 1 a 3 (variação de 2 pontos)
            const finalScores = scores.map(s => ({ name: s.name, score: Math.round(s.count > 0 ? ((s.score - s.count) / (2 * s.count)) * 100 : 0) }));
            finalScores.sort((a, b) => b.score - a.score);
            let tableHTML = `<table class="results-table"><thead><tr><th>Traço</th><th>Pontuação</th></tr></thead><tbody>${finalScores.map(s => `<tr><td>${s.name}</td><td>${s.score}</td></tr>`).join('')}</tbody></table>`;
            
            let warningHTML = '';
            let inconsistencies = [];
            const attentionQIndex = controlQuestions.find(cq => cq.special === 'control-attention').idx;
            const lieQuestions = controlQuestions.filter(cq => cq.special === 'control-lie');
            
            // MODIFICADO: Verificação da pergunta de atenção (valor 2 corresponde a "Não exatamente")
            if (this.answers[attentionQIndex] !== 2) { inconsistencies.push("Foi detectada uma possível falta de atenção em uma das perguntas de controle."); }
            
            // MODIFICADO: Verificação das perguntas de mentira (valor 3 é o máximo, "Concordo")
            lieQuestions.forEach(q => { if (this.answers[q.idx] === 3) { inconsistencies.push("As respostas indicam uma possível tendência a apresentar uma imagem excessivamente positiva."); } });
            if (inconsistencies.length > 0) { warningHTML = `<div class="control-warning"><strong>Aviso de Validade:</strong><br>${[...new Set(inconsistencies)].join('<br>')}</div>`; }

            // Renderiza o cartão de resultados na posição final
            this.carousel.innerHTML = ''; // Limpa tudo
            const resultCard = document.createElement('div');
            resultCard.className = 'question-card';
            resultCard.id = 'result-card';
            resultCard.style.transform = `translateX(-50%) translateY(-50%) translateZ(${this.allQuestions.length * this.zSpacing}px)`;
            resultCard.innerHTML = `<h2 class="question-text">Resultados</h2>${tableHTML}${warningHTML}`;
            this.carousel.appendChild(resultCard);
            
            // Move a câmera para a tela de resultados
            this.moveTo(this.allQuestions.length);
            this.header.classList.add('hidden');
        }
    };

    app.init();
});

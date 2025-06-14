document.addEventListener('DOMContentLoaded', () => {
    // Service Worker continua o mesmo
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('Service Worker registrado com sucesso:', registration))
            .catch(error => console.log('Falha ao registrar Service Worker:', error));
    }

    // Dados (traits e controlQuestions) permanecem os mesmos
    const traits = [ { name: "Narcisista", questions: ["Gosto de receber elogios e reconhecimento pelo que faço.", "Acredito que minhas necessidades são mais importantes que as dos outros.", "Costumo me sentir superior à maioria das pessoas.", "Fico irritado se não sou o centro das atenções.", "Reconheço facilmente meus próprios méritos.", "Acho que mereço privilégios especiais.", "Tenho dificuldades em aceitar críticas sobre mim."] }, { name: "Antissocial", questions: ["Não vejo problema em quebrar regras para conseguir o que quero.", "Já menti ou enganei pessoas para benefício próprio.", "Me sinto pouco à vontade em respeitar autoridades.", "Tenho facilidade em manipular situações a meu favor.", "Raramente me arrependo de prejudicar alguém para atingir meus objetivos.", "Consigo agir friamente quando necessário.", "Costumo ignorar normas sociais quando acho conveniente."] }, { name: "Histriônico", questions: ["Gosto de chamar a atenção em rodas de conversa.", "Minha expressão emocional costuma ser intensa.", "Uso minha aparência para causar impacto nos outros.", "Posso ser considerado(a) dramático(a) por quem me conhece.", "Busco aprovação constante das pessoas ao meu redor.", "Me sinto desconfortável se não sou notado(a) em público.", "Tenho facilidade para influenciar as emoções dos outros."] }, { name: "Dependente", questions: ["Tenho dificuldade para tomar decisões sozinho(a).", "Preciso do apoio dos outros para iniciar projetos.", "Tenho medo de perder pessoas próximas.", "Evito conflitos para não desagradar quem gosto.", "Sinto insegurança ao agir sem orientação.", "Busco constantemente conselhos antes de agir.", "Cedo facilmente para manter a aprovação dos outros."] }, { name: "Sádico", questions: ["Já ri ou tirei sarro de alguém em situação constrangedora.", "Gosto de ter domínio sobre pessoas em situações cotidianas.", "Faço brincadeiras que podem humilhar outras pessoas.", "Já provoquei alguém apenas para ver sua reação.", "Me sinto satisfeito(a) ao ver alguém se dando mal em disputas.", "Já impus minha vontade usando ameaças ou intimidação.", "Exerço poder sobre pessoas mais frágeis sem culpa."] }, { name: "Compulsivo", questions: ["Me incomodo com ambientes desorganizados.", "Sigo rotinas rígidas no meu dia a dia.", "Tenho dificuldade em delegar tarefas a outras pessoas.", "Reviso frequentemente meu trabalho para evitar erros.", "Sou perfeccionista com minhas obrigações.", "Me adapto mal a mudanças inesperadas.", "Priorizar organização é mais importante que relaxar."] }, { name: "Negativista", questions: ["Costumo fazer o oposto do que esperam de mim.", "Reclamo de situações mesmo quando não são tão ruins.", "Dificilmente aceito ordens sem questionar.", "Perco a motivação facilmente quando pressionado(a).", "Resisto passivamente a tarefas impostas.", "Sinto raiva ao cumprir regras que considero injustas.", "Adio obrigações que me são impostas."] }, { name: "Esquivo", questions: ["Evito situações sociais por medo de rejeição.", "Me sinto desconfortável ao ser observado(a).", "Prefiro me isolar a correr riscos de crítica.", "Sinto receio ao iniciar conversas com desconhecidos.", "Acho que não sou bom o suficiente para certos grupos.", "Fujo de experiências sociais novas.", "Me preocupo excessivamente com opiniões negativas."] }, { name: "Depressivo", questions: ["Sinto falta de ânimo na maior parte dos dias.", "Tenho baixa autoestima e autocrítica frequente.", "Atividades que antes gostava perderam a graça.", "Me sinto desmotivado(a) sem razão aparente.", "Enxergo o futuro de forma pessimista.", "Tenho dificuldade em me conectar emocionalmente.", "Sinto um peso emocional constante."] }, { name: "Masoquista", questions: ["Aceito situações desconfortáveis para agradar os outros.", "Permaneço em relações onde sou desvalorizado(a).", "Costumo me autossabotar em momentos importantes.", "Sinto culpa ao buscar prazer ou reconhecimento.", "Evito me defender quando sou criticado(a).", "Acho que mereço sofrer por meus erros.", "Recuso boas oportunidades por achar que não sou merecedor(a)."] }, { name: "Borderline", questions: ["Tenho mudanças intensas de humor.", "Oscilo entre idealizar e desvalorizar pessoas próximas.", "Tenho medo intenso de ser abandonado(a).", "Sou impulsivo(a) diante de frustrações.", "Me envolvo em relações instáveis e intensas.", "Tenho dificuldade em controlar emoções.", "Às vezes sinto vazio e desesperança sem motivo."] }, { name: "Paranoico", questions: ["Desconfio das intenções das pessoas.", "Acredito que falam de mim pelas costas.", "Tomo precauções exageradas com minha privacidade.", "Interpreto comentários neutros como ameaças.", "Tenho dificuldade em confiar plenamente nos outros.", "Fico atento(a) a sinais de traição.", "Sinto necessidade constante de me proteger."] }, { name: "Esquizoide", questions: ["Prefiro atividades solitárias.", "Sinto pouca vontade de ter relações íntimas.", "Expressar emoções não faz parte do meu dia a dia.", "Sou indiferente a elogios e críticas.", "Tenho poucos amigos próximos.", "Não sinto falta de companhia.", "Demonstro pouco interesse por experiências sexuais com outros."] }, { name: "Esquizotípico", questions: ["Tenho crenças ou experiências incomuns.", "Às vezes percebo sinais ocultos em situações cotidianas.", "Minha forma de pensar é considerada excêntrica.", "Tenho dificuldade em manter conversas por sentir-me deslocado(a).", "Desconfio de coincidências, achando que têm significado especial.", "Minhas emoções são pouco compreendidas pelos outros.", "Me sinto diferente e isolado(a) da maioria."] }, { name: "Hipomaníaco", questions: ["Tenho períodos de energia incomum, mesmo dormindo pouco.", "Falo mais rápido ou mais do que o usual às vezes.", "Tomo decisões impulsivas quando estou animado(a).", "Busco iniciar novos projetos constantemente.", "Me envolvo em atividades de risco quando estou eufórico(a).", "Minha autoconfiança aumenta abruptly em certos períodos.", "Tenho pensamentos acelerados e dificuldade para relaxar."] }];
    const controlQuestions = [ { idx: 35, text: "Para validar sua atenção, por favor, escolha a opção 'Neutro' nesta afirmação.", special: 'control-attention' }, { idx: 71, text: "Eu nunca cometo erros em tarefas importantes.", special: 'control-lie' }, { idx: 98, text: "Eu sou honesto(a) em absolutamente todas as situações, sem exceção.", special: 'control-lie' }];

    // --- NOVA LÓGICA OTIMIZADA DO APLICATIVO ---
    const app = {
        carousel: document.getElementById('quiz-carousel'),
        header: document.getElementById('quiz-header'),
        progressBar: document.getElementById('progress-bar'),
        
        allQuestions: [],
        answers: [],
        currentIndex: 0,
        isTransitioning: false,

        init() {
            this.buildQuestionList();
            this.answers = new Array(this.allQuestions.length).fill(null);
            this.showStartScreen();
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

        renderCard(content) {
            this.carousel.innerHTML = ''; // Limpa o cartão anterior
            const card = document.createElement('div');
            card.className = 'question-card';
            card.innerHTML = content;
            this.carousel.appendChild(card);
            
            // Força o navegador a aplicar o estilo inicial antes de adicionar a classe 'active'
            void card.offsetWidth; 
            
            card.classList.add('active');
            return card;
        },
        
        transitionToNext(cardContent) {
            if (this.isTransitioning) return;
            this.isTransitioning = true;
            
            const currentCard = this.carousel.querySelector('.question-card');
            if(currentCard) {
                currentCard.classList.remove('active');
                currentCard.classList.add('exiting');
            }

            setTimeout(() => {
                const newCard = this.renderCard(cardContent);
                this.isTransitioning = false;
            }, 400); // Deve corresponder à duração da transição no CSS
        },

        showStartScreen() {
            const content = `
                <h2 class="question-text" id="start-card">Teste de Personalidade</h2>
                <p>Responda honestamente, de acordo com seu comportamento nos <b>últimos meses</b>. Esta é uma jornada de autoconhecimento. Toque em "Iniciar" para começar.</p>
                <button id="start-btn">Iniciar</button>
            `;
            const card = this.renderCard(content);
            card.querySelector('#start-btn').addEventListener('click', () => {
                this.header.classList.remove('hidden');
                this.showQuestion(0);
            });
        },

        showQuestion(index) {
            this.currentIndex = index;
            const q = this.allQuestions[index];
            const options = ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"];
            const content = `
                <p class="question-counter">${index + 1} / ${this.allQuestions.length}</p>
                <p class="question-text">${q.text}</p>
                <div class="options-grid" data-index="${index}">
                    ${options.map((opt, i) => `
                        <input type="radio" name="q${index}" id="q${index}_opt${i+1}" value="${i+1}" class="option-radio">
                        <label for="q${index}_opt${i+1}" class="option-label">${opt}</label>
                    `).join('')}
                </div>
            `;
            this.transitionToNext(content);
            
            // Adiciona o listener ao novo cartão após a transição
            setTimeout(() => {
                const grid = this.carousel.querySelector('.options-grid');
                if(grid) {
                   grid.addEventListener('change', (e) => this.handleAnswer(e));
                }
            }, 400);
            
            this.updateProgress();
        },

        handleAnswer(e) {
            const index = parseInt(e.target.closest('.options-grid').dataset.index);
            this.answers[index] = parseInt(e.target.value);
            e.target.closest('.options-grid').classList.add('options-disabled');

            setTimeout(() => {
                if (this.currentIndex < this.allQuestions.length - 1) {
                    this.showQuestion(this.currentIndex + 1);
                } else {
                    this.showResults();
                }
            }, 300);
        },
        
        updateProgress() {
            const progress = ((this.currentIndex + 1) / this.allQuestions.length) * 100;
            this.progressBar.style.width = `${progress}%`;
        },

        showResults() {
            this.header.classList.add('hidden');
            // ... (A lógica de cálculo de resultados permanece a mesma)
            const scores = traits.map(t => ({ name: t.name, score: 0, count: 0 }));
            this.allQuestions.forEach((q, i) => { if (q.traitIndex !== null && this.answers[i]) { scores[q.traitIndex].score += this.answers[i]; scores[q.traitIndex].count++; } });
            const finalScores = scores.map(s => ({ name: s.name, score: Math.round(s.count > 0 ? ((s.score - s.count) / (4 * s.count)) * 100 : 0) }));
            finalScores.sort((a, b) => b.score - a.score);
            let tableHTML = `<table class="results-table"><thead><tr><th>Traço</th><th>Pontuação</th></tr></thead><tbody>${finalScores.map(s => `<tr><td>${s.name}</td><td>${s.score}</td></tr>`).join('')}</tbody></table>`;
            
            let warningHTML = '';
            // ... (A lógica de validação de controle permanece a mesma)
            let inconsistencies = [];
            const attentionQIndex = controlQuestions.find(cq => cq.special === 'control-attention').idx;
            const lieQuestions = controlQuestions.filter(cq => cq.special === 'control-lie');
            if (this.answers[attentionQIndex] !== 3) { inconsistencies.push("Foi detectada uma possível falta de atenção em uma das perguntas de controle."); }
            lieQuestions.forEach(q => { if (this.answers[q.idx] >= 4) { inconsistencies.push("As respostas indicam uma possível tendência a apresentar uma imagem excessivamente positiva."); } });
            if (inconsistencies.length > 0) { warningHTML = `<div class="control-warning"><strong>Aviso de Validade:</strong><br>${[...new Set(inconsistencies)].join('<br>')}</div>`; }

            const content = `<h2 class="question-text" id="result-card">Resultados</h2>${tableHTML}${warningHTML}`;
            this.transitionToNext(content);
        }
    };

    app.init();
});
        

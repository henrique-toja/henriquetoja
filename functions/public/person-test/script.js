document.addEventListener('DOMContentLoaded', () => {
    // --- Registro do Service Worker para PWA ---
    if ('serviceWorker' in navigator) {
        // CAMINHO CORRIGIDO: de '/sw.js' para 'sw.js'
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('Service Worker registrado com sucesso:', registration))
            .catch(error => console.log('Falha ao registrar Service Worker:', error));
    }

    // --- Definição dos Traços e Perguntas de Controle ---
    const traits = [
      { name: "Narcisista", questions: ["Gosto de receber elogios e reconhecimento pelo que faço.", "Acredito que minhas necessidades são mais importantes que as dos outros.", "Costumo me sentir superior à maioria das pessoas.", "Fico irritado se não sou o centro das atenções.", "Reconheço facilmente meus próprios méritos.", "Acho que mereço privilégios especiais.", "Tenho dificuldades em aceitar críticas sobre mim."] },
      { name: "Antissocial", questions: ["Não vejo problema em quebrar regras para conseguir o que quero.", "Já menti ou enganei pessoas para benefício próprio.", "Me sinto pouco à vontade em respeitar autoridades.", "Tenho facilidade em manipular situações a meu favor.", "Raramente me arrependo de prejudicar alguém para atingir meus objetivos.", "Consigo agir friamente quando necessário.", "Costumo ignorar normas sociais quando acho conveniente."] },
      { name: "Histriônico", questions: ["Gosto de chamar a atenção em rodas de conversa.", "Minha expressão emocional costuma ser intensa.", "Uso minha aparência para causar impacto nos outros.", "Posso ser considerado(a) dramático(a) por quem me conhece.", "Busco aprovação constante das pessoas ao meu redor.", "Me sinto desconfortável se não sou notado(a) em público.", "Tenho facilidade para influenciar as emoções dos outros."] },
      { name: "Dependente", questions: ["Tenho dificuldade para tomar decisões sozinho(a).", "Preciso do apoio dos outros para iniciar projetos.", "Tenho medo de perder pessoas próximas.", "Evito conflitos para não desagradar quem gosto.", "Sinto insegurança ao agir sem orientação.", "Busco constantemente conselhos antes de agir.", "Cedo facilmente para manter a aprovação dos outros."] },
      { name: "Sádico", questions: ["Já ri ou tirei sarro de alguém em situação constrangedora.", "Gosto de ter domínio sobre pessoas em situações cotidianas.", "Faço brincadeiras que podem humilhar outras pessoas.", "Já provoquei alguém apenas para ver sua reação.", "Me sinto satisfeito(a) ao ver alguém se dando mal em disputas.", "Já impus minha vontade usando ameaças ou intimidação.", "Exerço poder sobre pessoas mais frágeis sem culpa."] },
      { name: "Compulsivo", questions: ["Me incomodo com ambientes desorganizados.", "Sigo rotinas rígidas no meu dia a dia.", "Tenho dificuldade em delegar tarefas a outras pessoas.", "Reviso frequentemente meu trabalho para evitar erros.", "Sou perfeccionista com minhas obrigações.", "Me adapto mal a mudanças inesperadas.", "Priorizar organização é mais importante que relaxar."] },
      { name: "Negativista", questions: ["Costumo fazer o oposto do que esperam de mim.", "Reclamo de situações mesmo quando não são tão ruins.", "Dificilmente aceito ordens sem questionar.", "Perco a motivação facilmente quando pressionado(a).", "Resisto passivamente a tarefas impostas.", "Sinto raiva ao cumprir regras que considero injustas.", "Adio obrigações que me são impostas."] },
      { name: "Esquivo", questions: ["Evito situações sociais por medo de rejeição.", "Me sinto desconfortável ao ser observado(a).", "Prefiro me isolar a correr riscos de crítica.", "Sinto receio ao iniciar conversas com desconhecidos.", "Acho que não sou bom o suficiente para certos grupos.", "Fujo de experiências sociais novas.", "Me preocupo excessivamente com opiniões negativas."] },
      { name: "Depressivo", questions: ["Sinto falta de ânimo na maior parte dos dias.", "Tenho baixa autoestima e autocrítica frequente.", "Atividades que antes gostava perderam a graça.", "Me sinto desmotivado(a) sem razão aparente.", "Enxergo o futuro de forma pessimista.", "Tenho dificuldade em me conectar emocionalmente.", "Sinto um peso emocional constante."] },
      { name: "Masoquista", questions: ["Aceito situações desconfortáveis para agradar os outros.", "Permaneço em relações onde sou desvalorizado(a).", "Costumo me autossabotar em momentos importantes.", "Sinto culpa ao buscar prazer ou reconhecimento.", "Evito me defender quando sou criticado(a).", "Acho que mereço sofrer por meus erros.", "Recuso boas oportunidades por achar que não sou merecedor(a)."] },
      { name: "Borderline", questions: ["Tenho mudanças intensas de humor.", "Oscilo entre idealizar e desvalorizar pessoas próximas.", "Tenho medo intenso de ser abandonado(a).", "Sou impulsivo(a) diante de frustrações.", "Me envolvo em relações instáveis e intensas.", "Tenho dificuldade em controlar emoções.", "Às vezes sinto vazio e desesperança sem motivo."] },
      { name: "Paranoico", questions: ["Desconfio das intenções das pessoas.", "Acredito que falam de mim pelas costas.", "Tomo precauções exageradas com minha privacidade.", "Interpreto comentários neutros como ameaças.", "Tenho dificuldade em confiar plenamente nos outros.", "Fico atento(a) a sinais de traição.", "Sinto necessidade constante de me proteger."] },
      { name: "Esquizoide", questions: ["Prefiro atividades solitárias.", "Sinto pouca vontade de ter relações íntimas.", "Expressar emoções não faz parte do meu dia a dia.", "Sou indiferente a elogios e críticas.", "Tenho poucos amigos próximos.", "Não sinto falta de companhia.", "Demonstro pouco interesse por experiências sexuais com outros."] },
      { name: "Esquizotípico", questions: ["Tenho crenças ou experiências incomuns.", "Às vezes percebo sinais ocultos em situações cotidianas.", "Minha forma de pensar é considerada excêntrica.", "Tenho dificuldade em manter conversas por sentir-me deslocado(a).", "Desconfio de coincidências, achando que têm significado especial.", "Minhas emoções são pouco compreendidas pelos outros.", "Me sinto diferente e isolado(a) da maioria."] },
      { name: "Hipomaníaco", questions: ["Tenho períodos de energia incomum, mesmo dormindo pouco.", "Falo mais rápido ou mais do que o usual às vezes.", "Tomo decisões impulsivas quando estou animado(a).", "Busco iniciar novos projetos constantemente.", "Me envolvo em atividades de risco quando estou eufórico(a).", "Minha autoconfiança aumenta abruptamente em certos períodos.", "Tenho pensamentos acelerados e dificuldade para relaxar."] }
    ];
    const controlQuestions = [
        { idx: 35, text: "Para validar sua atenção, por favor, escolha a opção 'Neutro' nesta afirmação.", special: 'control-attention' },
        { idx: 71, text: "Eu nunca cometo erros em tarefas importantes.", special: 'control-lie' },
        { idx: 98, text: "Eu sou honesto(a) em absolutamente todas as situações, sem exceção.", special: 'control-lie' }
    ];

    // --- Lógica do Aplicativo ---
    const app = {
        carousel: document.getElementById('quiz-carousel'),
        header: document.getElementById('quiz-header'),
        progressBar: document.getElementById('progress-bar'),
        
        allQuestions: [],
        answers: [],
        currentIndex: -1, // Começa em -1 para a tela de início
        zSpacing: -1500, // Distância Z entre os cartões

        init() {
            this.buildQuestionList();
            this.buildCarousel();
            this.moveTo(this.currentIndex);
        },

        buildQuestionList() {
            let flatQuestions = [];
            traits.forEach((trait, traitIndex) => {
                trait.questions.forEach(qText => {
                    flatQuestions.push({ text: qText, traitIndex });
                });
            });

            controlQuestions.forEach(cq => {
                flatQuestions.splice(cq.idx, 0, { text: cq.text, isControl: true, special: cq.special, traitIndex: null });
            });
            this.allQuestions = flatQuestions;
            this.answers = new Array(this.allQuestions.length).fill(null);
        },

        buildCarousel() {
            this.carousel.innerHTML = ''; // Limpa o carrossel

            // Tela de Início
            const startCard = this.createCard(-1, 'start-card');
            startCard.innerHTML = `
                <h2 class="question-text">Teste de Personalidade</h2>
                <p>Responda honestamente, de acordo com seu comportamento nos <b>últimos meses</b>. Esta é uma jornada de autoconhecimento. Toque em "Iniciar" para começar.</p>
                <button id="start-btn">Iniciar</button>
            `;
            startCard.querySelector('#start-btn').addEventListener('click', () => this.next());
            this.carousel.appendChild(startCard);

            // Perguntas
            this.allQuestions.forEach((q, index) => {
                const card = this.createCard(index, 'question');
                const options = ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"];
                card.innerHTML = `
                    <p class="question-counter">${index + 1} / ${this.allQuestions.length}</p>
                    <p class="question-text">${q.text}</p>
                    <div class="options-grid" data-index="${index}">
                        ${options.map((opt, i) => `
                            <input type="radio" name="q${index}" id="q${index}_opt${i+1}" value="${i+1}" class="option-radio">
                            <label for="q${index}_opt${i+1}" class="option-label">${opt}</label>
                        `).join('')}
                    </div>
                `;
                card.querySelector('.options-grid').addEventListener('change', (e) => this.handleAnswer(e));
                this.carousel.appendChild(card);
            });

            // Tela de Resultado
            const resultCard = this.createCard(this.allQuestions.length, 'result-card');
            resultCard.innerHTML = `<h2 class="question-text">Analisando...</h2>`;
            this.carousel.appendChild(resultCard);
        },

        createCard(index, type) {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `${type}-card-${index}`;
            card.style.transform = `translateZ(${index * this.zSpacing}px)`;
            return card;
        },

        handleAnswer(e) {
            const index = parseInt(e.target.closest('.options-grid').dataset.index);
            this.answers[index] = parseInt(e.target.value);
            
            // Desabilita opções após a escolha
            e.target.closest('.options-grid').classList.add('options-disabled');

            setTimeout(() => this.next(), 300);
        },
        
        next() {
            this.currentIndex++;
            this.moveTo(this.currentIndex);
            this.updateProgress();

            if (this.currentIndex === 0) {
                 this.header.classList.remove('hidden');
            }

            if (this.currentIndex === this.allQuestions.length) {
                this.showResults();
            }
        },

        moveTo(index) {
            const newZ = index * -this.zSpacing;
            this.carousel.style.transform = `translateZ(${newZ}px)`;
        },
        
        updateProgress() {
            const progress = this.currentIndex >= 0 ? (this.currentIndex / this.allQuestions.length) * 100 : 0;
            this.progressBar.style.width = `${progress}%`;
        },

        showResults() {
            const resultCard = document.getElementById(`result-card-${this.allQuestions.length}`);
            this.header.classList.add('hidden');

            const scores = traits.map(t => ({ name: t.name, score: 0, count: 0 }));

            this.allQuestions.forEach((q, i) => {
                if (q.traitIndex !== null && this.answers[i]) {
                    scores[q.traitIndex].score += this.answers[i];
                    scores[q.traitIndex].count++;
                }
            });

            const finalScores = scores.map(s => {
                const avg = s.count > 0 ? ((s.score - s.count) / (4 * s.count)) * 100 : 0;
                return { name: s.name, score: Math.round(avg) };
            });

            finalScores.sort((a, b) => b.score - a.score);

            let tableHTML = `<table class="results-table"><thead><tr><th>Traço de Personalidade</th><th>Pontuação</th></tr></thead><tbody>`;
            finalScores.forEach(s => {
                tableHTML += `<tr><td>${s.name}</td><td>${s.score}</td></tr>`;
            });
            tableHTML += `</tbody></table>`;
            
            // Validação de controle
            let warningHTML = '';
            let inconsistencies = [];
            const attentionQIndex = controlQuestions.find(cq => cq.special === 'control-attention').idx;
            const lieQuestions = controlQuestions.filter(cq => cq.special === 'control-lie');
            
            if (this.answers[attentionQIndex] !== 3) {
                 inconsistencies.push("Foi detectada uma possível falta de atenção em uma das perguntas de controle.");
            }
            lieQuestions.forEach(q => {
                if (this.answers[q.idx] >= 4) {
                    inconsistencies.push("As respostas indicam uma possível tendência a apresentar uma imagem excessivamente positiva (viés de desejabilidade social).");
                }
            });
            
            if (inconsistencies.length > 0) {
                // Pega apenas avisos únicos
                const uniqueInconsistencies = [...new Set(inconsistencies)];
                warningHTML = `<div class="control-warning"><strong>Aviso de Validade:</strong><br>${uniqueInconsistencies.join('<br>')}</div>`;
            }

            resultCard.innerHTML = `
                <h2 class="question-text">Resultados</h2>
                ${tableHTML}
                ${warningHTML}
            `;
        }
    };

    app.init();
});

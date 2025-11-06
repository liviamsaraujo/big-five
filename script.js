const questionsData = [
    { id: 1, text: "Sou a alma da festa.", trait: "E", reverse: false },
    { id: 2, text: "Sinto pouca preocupação com os outros.", trait: "A", reverse: true },
    { id: 3, text: "Estou sempre preparado.", trait: "C", reverse: false },
    { id: 4, text: "Eu fico facilmente chateado.", trait: "N", reverse: false },
    { id: 5, text: "Eu tenho um vocabulário rico.", trait: "O", reverse: false },
    { id: 6, text: "Eu não falo muito.", trait: "E", reverse: true },
    { id: 7, text: "Me interesso pelas pessoas.", trait: "A", reverse: false },
    { id: 8, text: "Eu deixo minhas coisas por aí.", trait: "C", reverse: true },
    { id: 9, text: "Eu sou calmo na maioria das vezes.", trait: "N", reverse: true },
    { id: 10, text: "Eu tenho dificuldade em entender ideias abstratas.", trait: "O", reverse: true },
    { id: 11, text: "Eu me sinto confortável perto das pessoas.", trait: "E", reverse: false },
    { id: 12, text: "Eu insulto as pessoas.", trait: "A", reverse: true },
    { id: 13, text: "Eu sigo um horário.", trait: "C", reverse: false },
    { id: 14, text: "Eu me preocupo com as coisas.", trait: "N", reverse: false },
    { id: 15, text: "Eu tenho uma imaginação vívida.", trait: "O", reverse: false },
    { id: 16, text: "Eu me mantenho no fundo.", trait: "E", reverse: true },
    { id: 17, text: "Eu simpatizo com os sentimentos dos outros.", trait: "A", reverse: false },
    { id: 18, text: "Eu presto atenção nas coisas.", trait: "C", reverse: false },
    { id: 19, text: "Eu mudo de humor facilmente.", trait: "N", reverse: false },
    { id: 20, text: "Eu não me interesso por ideias abstratas.", trait: "O", reverse: true },
    { id: 21, text: "Eu começo conversas.", trait: "E", reverse: false },
    { id: 22, text: "Eu não tenho tempo para os outros.", trait: "A", reverse: true },
    { id: 23, text: "Eu evito fazer meus deveres.", trait: "C", reverse: true },
    { id: 24, text: "Eu sou facilmente estressado.", trait: "N", reverse: false },
    { id: 25, text: "Eu sou cheio de ideias.", trait: "O", reverse: false },
    { id: 26, text: "Eu tenho pouco a dizer.", trait: "E", reverse: true },
    { id: 27, text: "Eu dou conforto aos outros.", trait: "A", reverse: false },
    { id: 28, text: "Eu deixo as tarefas incompletas.", trait: "C", reverse: true },
    { id: 29, text: "Eu sou descontraído.", trait: "N", reverse: true },
    { id: 30, text: "Eu não tenho boa imaginação.", trait: "O", reverse: true },
    { id: 31, text: "Eu tento influenciar as pessoas.", trait: "E", reverse: false },
    { id: 32, text: "Eu irrito os outros.", trait: "A", reverse: true },
    { id: 33, text: "Eu sou exigente no meu trabalho.", trait: "C", reverse: false },
    { id: 34, text: "Eu me sinto melancólico.", trait: "N", reverse: false },
    { id: 35, text: "Eu acredito na importância da arte.", trait: "O", reverse: false },
    { id: 36, text: "Eu prefiro ficar sozinho.", trait: "E", reverse: true },
    { id: 37, text: "Eu estou interessado nos problemas dos outros.", trait: "A", reverse: false },
    { id: 38, text: "Eu faço uma bagunça nas coisas.", trait: "C", reverse: true },
    { id: 39, text: "Eu tenho medo de muitas coisas.", trait: "N", reverse: false },
    { id: 40, text: "Eu não gosto de poesia.", trait: "O", reverse: true },
    { id: 41, text: "Eu animo o grupo.", trait: "E", reverse: false },
    { id: 42, text: "Eu sou indiferente aos sentimentos dos outros.", trait: "A", reverse: true },
    { id: 43, text: "Eu sempre sei o que estou fazendo.", trait: "C", reverse: false },
    { id: 44, text: "Eu sou frequentemente irritado.", trait: "N", reverse: false },
    { id: 45, text: "Eu prefiro obras originais.", trait: "O", reverse: false },
    { id: 46, text: "Eu sou quieto ao redor de estranhos.", trait: "E", reverse: true },
    { id: 47, text: "Eu faço as pessoas se sentirem à vontade.", trait: "A", reverse: false },
    { id: 48, text: "Eu esqueço de colocar as coisas de volta em seus lugares.", trait: "C", reverse: true },
    { id: 49, text: "Eu me irrito facilmente.", trait: "N", reverse: false },
    { id: 50, text: "Eu evito leituras filosóficas.", trait: "O", reverse: true },
    { id: 51, text: "Eu gasto meu tempo com os outros.", trait: "E", reverse: false },
    { id: 52, text: "Eu faço exigências às pessoas.", trait: "A", reverse: true },
    { id: 53, text: "Eu sou eficiente.", trait: "C", reverse: false },
    { id: 54, text: "Eu me sinto impotente.", trait: "N", reverse: false },
    { id: 55, text: "Eu gosto de refletir sobre as coisas.", trait: "O", reverse: false },
    { id: 56, text: "Eu me fecho para os outros.", trait: "E", reverse: true },
    { id: 57, text: "Eu sou prestativo.", trait: "A", reverse: false },
    { id: 58, text: "Eu sou negligente.", trait: "C", reverse: true },
    { id: 59, text: "Eu raramente me sinto melancólico.", trait: "N", reverse: true },
    { id: 60, text: "Eu não gosto de mudar as coisas.", trait: "O", reverse: true },
    { id: 61, text: "Eu sou cheio de energia.", trait: "E", reverse: false },
    { id: 62, text: "Eu trato as pessoas de forma igual.", trait: "A", reverse: false },
    { id: 63, text: "Eu sou sistemático.", trait: "C", reverse: false },
    { id: 64, text: "Eu sou estável emocionalmente.", trait: "N", reverse: true },
    { id: 65, text: "Eu sou inteligente.", trait: "O", reverse: false },
    { id: 66, text: "Eu sou uma pessoa reservada.", trait: "E", reverse: true },
    { id: 67, text: "Eu aproveito meu tempo com os outros.", trait: "A", reverse: false },
    { id: 68, text: "Eu sou desorganizado.", trait: "C", reverse: true },
    { id: 69, text: "Eu sou facilmente perturbado.", trait: "N", reverse: false },
    { id: 70, text: "Eu gosto de pensar em novas formas de fazer as coisas.", trait: "O", reverse: false },
    { id: 71, text: "Eu procuro aventura.", trait: "E", reverse: false },
    { id: 72, text: "Eu sou sarcástico.", trait: "A", reverse: true },
    { id: 73, text: "Eu trabalho muito.", trait: "C", reverse: false },
    { id: 74, text: "Eu sou temperamental.", trait: "N", reverse: false },
    { id: 75, text: "Eu sou original.", trait: "O", reverse: false },
    { id: 76, text: "Eu sou sério.", trait: "E", reverse: true },
    { id: 77, text: "Eu perdoo facilmente.", trait: "A", reverse: false },
    { id: 78, text: "Eu não sei como organizar as coisas.", trait: "C", reverse: true },
    { id: 79, text: "Eu me preocupo com as coisas terríveis que podem acontecer.", trait: "N", reverse: false },
    { id: 80, text: "Eu sou cético em relação a novas ideias.", trait: "O", reverse: true },
    { id: 81, text: "Eu sou sociável.", trait: "E", reverse: false },
    { id: 82, text: "Eu sou rude com os outros.", trait: "A", reverse: true },
    { id: 83, text: "Eu sou prático.", trait: "C", reverse: false },
    { id: 84, text: "Eu sou impaciente.", trait: "N", reverse: false },
    { id: 85, text: "Eu gosto de ter minha cabeça nas nuvens.", trait: "O", reverse: false },
    { id: 86, text: "Eu sou lento para fazer amigos.", trait: "E", reverse: true },
    { id: 87, text: "Eu posso sentir o que os outros sentem.", trait: "A", reverse: false },
    { id: 88, text: "Eu sigo as regras.", trait: "C", reverse: false },
    { id: 89, text: "Eu me sinto culpado.", trait: "N", reverse: false },
    { id: 90, text: "Eu não gosto de atividades que exijam esforço intelectual.", trait: "O", reverse: true },
    { id: 91, text: "Eu procuro excitação.", trait: "E", reverse: false },
    { id: 92, text: "Eu uso os outros para meu próprio ganho.", trait: "A", reverse: true },
    { id: 93, text: "Eu sou meticuloso.", trait: "C", reverse: false },
    { id: 94, text: "Eu me sinto sozinho.", trait: "N", reverse: false },
    { id: 95, text: "Eu gosto de complexidade.", trait: "O", reverse: false },
    { id: 96, text: "Eu prefiro atividades com pouco risco.", trait: "E", reverse: true },
    { id: 97, text: "Eu sou duro com as pessoas.", trait: "A", reverse: true },
    { id: 98, text: "Eu sou cuidadoso com minhas posses.", trait: "C", reverse: false },
    { id: 99, text: "Eu sou autoconsciente.", trait: "N", reverse: false },
    { id: 100, text: "Eu gosto de rotina.", trait: "O", reverse: true },
    { id: 101, text: "Eu sou alegre.", trait: "E", reverse: false },
    { id: 102, text: "Eu sou amável.", trait: "A", reverse: false },
    { id: 103, text: "Eu sou um workaholic.", trait: "C", reverse: false },
    { id: 104, text: "Eu sou impulsivo.", trait: "N", reverse: false },
    { id: 105, text: "Eu sou rápido para entender as coisas.", trait: "O", reverse: false },
    { id: 106, text: "Eu sou passivo.", trait: "E", reverse: true },
    { id: 107, text: "Eu sou respeitoso.", trait: "A", reverse: false },
    { id: 108, text: "Eu planejo à frente.", trait: "C", reverse: false },
    { id: 109, text: "Eu tenho ataques de pânico.", trait: "N", reverse: false },
    { id: 110, text: "Eu não consigo me concentrar.", trait: "O", reverse: true },
    { id: 111, text: "Eu sou enérgico.", trait: "E", reverse: false },
    { id: 112, text: "Eu não sou sentimental.", trait: "A", reverse: true },
    { id: 113, text: "Eu sou preguiçoso.", trait: "C", reverse: true },
    { id: 114, text: "Eu sou facilmente levado ao estresse.", trait: "N", reverse: false },
    { id: 115, text: "Eu sou criativo.", trait: "O", reverse: false },
    { id: 116, text: "Eu sou extrovertido.", trait: "E", reverse: false },
    { id: 117, text: "Eu sou gentil.", trait: "A", reverse: false },
    { id: 118, text: "Eu sou perseverante.", trait: "C", reverse: false },
    { id: 119, text: "Eu me sinto inadequado.", trait: "N", reverse: false },
    { id: 120, text: "Eu não sou curioso.", trait: "O", reverse: true }
];
/**
 * Calcula a pontuação do teste Big Five (OCEAN).
 * @param {Array<number>} answers - Array com as 120 respostas do usuário (valores de 1 a 5).
 * @returns {Object} Um objeto com a pontuação final (0-100) para cada traço (O, C, E, A, N).
 */
function calculateBigFiveScores(answers) {
    if (answers.length !== 120) {
        throw new Error("O array de respostas deve conter exatamente 120 itens.");
    }

    const rawScores = { N: 0, E: 0, O: 0, A: 0, C: 0 };
    
    // Processamento das respostas
    questionsData.forEach((q, index) => {
        const answer = answers[index];
        let score = answer; // O valor da resposta (1 a 5)

        // Se a pergunta for de pontuação reversa, invertemos o valor
        // (Ex: Resposta 5 se torna 1, Resposta 1 se torna 5)
        if (q.reverse) {
            score = 6 - answer;
        }

        rawScores[q.trait] += score;
    });

    // Conversão da Pontuação Bruta (Raw Score) para Escala 0-100
    // O IPIP-NEO usa 24 perguntas por traço (120 itens / 5 traços = 24).
    // Pontuação Mínima: 24 * 1 = 24
    // Pontuação Máxima: 24 * 5 = 120
    const MIN_SCORE = 24;
    const MAX_SCORE = 120;
    const RANGE = MAX_SCORE - MIN_SCORE; 

    const finalScores = {};

    for (const trait in rawScores) {
        const rawScore = rawScores[trait];
        
        // Normaliza a pontuação bruta para a escala 0 a 100
        const normalizedScore = (rawScore - MIN_SCORE) / RANGE;
        
        // O resultado final é um percentual (0-100)
        finalScores[trait] = Math.round(normalizedScore * 100);
    }

    return {
        O: finalScores.O, // Openness (Abertura à Experiência)
        C: finalScores.C, // Conscientiousness (Conscienciosidade)
        E: finalScores.E, // Extraversion (Extroversão)
        A: finalScores.A, // Agreeableness (Amabilidade)
        N: finalScores.N  // Neuroticism (Neuroticismo)
    };
}

// =========================================================================
// Exemplo de Uso (após o usuário responder a todas as 120 perguntas)
// Substitua este array pelas respostas do usuário (valores de 1 a 5)
/*
const userAnswersExample = [
    // 120 respostas aqui...
];

try {
    const results = calculateBigFiveScores(userAnswersExample);
    console.log("Resultados Finais (0-100):", results);
} catch (error) {
    console.error(error.message);
}
*/

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = 
     
[
    
    enunciado: "Você ganhou um notebook novo para estudar. Qual é a primeira coisa que faz?",
        alternativas: [
            {
                texto: "Instalo programas úteis para estudar e organizar minhas tarefas.",
                afirmacao: "Aprendeu a utilizar a tecnologia para melhorar sua produtividade."
            },
            {
                texto: "Personalizo o computador e instalo jogos e aplicativos de entretenimento.",
                afirmacao: "Descobriu que a tecnologia também pode ser uma forma de diversão e criatividade."
            }
        ]
    },
    {
        enunciado: "Durante uma pesquisa escolar, você encontra uma informação que parece muito interessante. O que faz antes de utilizá-la?",
        alternativas: [
            {
                texto: "Confiro se a informação aparece em outras fontes confiáveis.",
                afirmacao: "Passou a verificar a confiabilidade das informações antes de compartilhá-las."
            },
            {
                texto: "Uso a informação imediatamente porque parece correta.",
                afirmacao: "Percebeu depois a importância de confirmar as informações encontradas na internet."
            }
        ]
    },
    {
        enunciado: "Seu grupo precisa preparar uma apresentação para a escola. Como você contribui?",
        alternativas: [
            {
                texto: "Crio os slides e organizo as informações para todos.",
                afirmacao: "Desenvolveu habilidades de organização e trabalho em equipe."
            },
            {
                texto: "Pesquiso o conteúdo e ajudo os colegas a entenderem o assunto.",
                afirmacao: "Contribuiu compartilhando conhecimento e colaborando com o grupo."
            }
        ]
    },
    {
        enunciado: "Você decide aprender uma nova habilidade usando a internet. O que escolhe?",
        alternativas: [
            {
                texto: "Aprender programação por meio de cursos gratuitos.",
                afirmacao: "Descobriu uma nova paixão pela tecnologia e pela resolução de problemas."
            },
            {
                texto: "Aprender edição de vídeos para criar conteúdo.",
                afirmacao: "Desenvolveu sua criatividade utilizando ferramentas digitais."
            }
        ]
    },
    {
        enunciado: "Ao final do ano letivo, qual foi a maior lição que você aprendeu sobre o uso da tecnologia?",
        alternativas: [
            {
                texto: "Ela deve ser usada como ferramenta para aprender e criar.",
                afirmacao: "Entendeu que a tecnologia pode abrir muitas oportunidades quando utilizada com responsabilidade."
            },
            {
                texto: "É importante equilibrar o tempo entre as telas e outras atividades.",
                afirmacao: "Aprendeu a usar a tecnologia de forma saudável e equilibrada no dia a dia."
            }
        ]
    }
];
import { LifeformDiscoveryEventArtifactFindingSize } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventArtifactFindingSize";
import { LifeformDiscoveryEventType } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventType";
import { LifeformDiscoveryMessages } from "./types";

export const pt_br: LifeformDiscoveryMessages = {
    [LifeformDiscoveryEventType.nothing]: [
        /*'No início de sua exploração, eles */'conseguiram decifrar algumas coordenadas promissoras que obtiveram'/* de uma mensagem misteriosa. Mas quando a Nave de Exploração chegou ao setor das coordenadas mencionadas, tudo o que a tripulação encontrou foi um gigantesco campo de destroços deixado para trás após uma batalha. A busca por sobreviventes acabou sendo infrutífera.'*/,
        /*'Um */'campo magnético de asteróide estava interrompendo'/* os scanners. O que parecia ser um sinal promissor de vida extraterrestre inteligente foi apenas uma interrupção nos instrumentos de medição e nenhuma nova forma de vida pôde ser encontrada.'*/,
        /*'Assim que a Nave de Exploração interceptou um sinal de rádio promissor, */'todos os seus sistemas de comunicação caíram de repente'/* . Dadas as circunstâncias, não era apenas impossível fazer contato com potenciais formas de vida inteligentes, mas também seria perigoso continuar a missão. Assim, a tripulação voltou para casa desapontada, mas ilesa.'*/,
        /*'Uma nebulosa com alguma forma de */'consciência foi descoberta em um lugar amplamente inexplorado'/* do nosso sistema! Nossos emissários intergalácticos estavam felizes e houve um circo da mídia quando a sonda foi enviada para a nuvem. As tentativas de se comunicar com a nebulosa, no entanto, logo revelaram que sua inteligência era como a de uma barata A empolgação diminuiu e foi decidido varrer silenciosamente todo o episódio para debaixo do tapete.'*/,
        /*'Em busca de novas formas de vida, a Nave de Exploração seguiu alguns sinais misteriosos que pareciam vir do */'outro lado de um planeta desconhecido'/* . Os enviados intergalácticos a bordo já haviam recuperado o pacote de saudação e ativado o computador de tradução, mas se descobriu que o sinal vinha de um naufrágio. A nave é claramente de origem extraterrestre, mas infelizmente não há sinais de tripulação. Isso significava que nenhuma nova forma de vida foi encontrada.'*/,
        /*'A Nave de Exploração estava em andamento há algum tempo quando veio à tona */'que um bug fatal havia entrado no software de varredura'/* . Infelizmente, isso significava que nenhuma nova forma de vida poderia ser encontrada.'*/,
        /*'Nossos emissários visitaram um planeta com uma */'espécie insetóide extremamente limpa'/* , supondo que eles deveriam ser inteligentes, eles ficaram desapontados com o que descobriram. Depois de vê-los mastigar o conteúdo do compactador de lixo da nave, foi decidido devolver eles ao seu planeta, apesar da sugestão de alguns tripulantes de manter um casal a bordo.'*/,
        /*'Os pesquisadores a bordo da nave de exploração ficaram em êxtase ao descobrir uma */'rede neural no meio de um campo de asteroides'/* . É por isso que eles ficaram ainda mais desapontados quando se descobriu que não passava de um aglomerado de notícias interceptadas sobre resultados esportivos de séculos de idade, que haviam desenvolvido vida própria como uma espécie de comentarista de sofá espacial. A tripulação voltou sem saber nada mais significativo do que quem ganhou os resultados que eles falavam.'*/,
        /*'A tripulação da nave de exploração estava na lua quando os resultados dos */'testes nos esporos de fungos sugeriram que haviam encontrado'/* vida inteligente. Infelizmente, descobriram que alguém manipulou os resultados do teste apenas para constranger um pesquisador rival. Os esporos, na realidade, não eram mais inteligentes do que aqueles encontrados atrás do micro-ondas na cozinha. O encrenqueiro foi suspenso e deixado no planeta mais próximo, antes que a nave voltasse para casa.'*/,
        /*'Sinais promissores guiaram a Nave de Exploração até uma */'misteriosa esfera dourada flutuando sozinha nas profundezas'/* do espaço. Apesar de todos os esforços dos enviados, eles não conseguiram encontrar uma entrada ou fazer qualquer tipo de contato com o objeto estranho antes que ele fosse para longe'*/,
        /*'Em um planeta inexplorado, a nave de exploração descobriu um sistema floral que era muito mais inteligente do que parecia à primeira vista. Quando a tripulação tentou investigar, no entanto, */'estranhos robôs de guarda uniformizados apareceram'/* e os avisaram que as plantas eram propriedade privada. Ignorando as potenciais para quebrar as leis de invasão intergaláctica, os pesquisadores fortaleceram sua determinação e extraíram algumas amostras durante uma operação secreta, antes de ir rapidamente para a órbita. Infelizmente, a operação foi claramente um pouco secreta e de volta a bordo da nave eles descobriram que suas amostras adquiridas arriscadamente não eram nada mais do que plantas domésticas comuns.'*/,
        /*'Em sua busca por inteligência extraterrestre, a nave de exploração já havia passado meses em vão vasculhando a galáxia, quando finalmente descobriram o */'equivalente alienígena de um paramécio'/* ! Não se encaixava exatamente nos critérios de vida inteligente, mas depois de tantos meses monótonos de busca, a tripulação decidiu considerar a descoberta de vida ainda não inteligente como um sucesso e voltou para casa sem nenhuma notícia notável.'*/,
        /*'Os sinais altamente promissores que a Nave de Exploração */'rastreou foram tristemente perdidos em uma névoa cósmica'/* . Eles continuaram a busca por mais algum tempo, mas não conseguiram encontrar nenhuma nova forma de vida'*/,
        /*'Após uma busca intensiva, a tripulação da nave de exploração */'descobriu uma espécie luminescente de ameba gigante'/* ! Infelizmente, os organismos unicelulares tiveram alguns problemas ao tentar passar nos testes de inteligência padrão. Dada a pouca atenção que deram as amebas pelos pesquisadores, não é surpresa que essa descoberta tenha sido igualmente considerada insignificante.'*/,
        /*'Uma névoa hipnótica atraiu toda a tripulação da Nave de Exploração sob seu feitiço. As cores e desenhos estranhos parecem interferir no cérebro humano de alguma forma, em vez de procurar vida extraterrestre, a tripulação se preocupou em responder à pergunta "*/'Os alienígenas realmente comem cachorro-quente verde'/* ?" Desnecessário dizer que eles não encontraram nenhuma nova forma de vida.'*/,
        /*'Enquanto procurava vida extraterrestre, a Nave de Exploração */'acabou em um vórtice cósmico que danificou severamente'/* o casco externo. A tripulação e a nave foram salvos por uma manobra de voo arriscada e tiveram que desistir da exploração e retornar sem nada.'*/,
        /*'A nave de exploração encontrou uma */'estação espacial antiga e abandonada que já foi tripulada por algumas'/* espécies anteriormente desconhecidas. Após um estudo mais intensivo, no entanto, logo ficou claro que a estação era apenas uma farsa elaborada de uma forma de vida extinta. A tripulação destruiu as mensagens, mas não conseguiu descobrir mais nada digno de nota.'*/,
        /*'A tripulação encontrou uma */'estação de pesquisa de alta tecnologia orientada por IA em um planeta'/* solitário e selvagem. Infelizmente, a porta da estação estava protegida por senha e a IA se recusou a cooperar. A tripulação passou dias tentando decifrar a senha, os suprimentos estavam começando a diminuir, quando um dos membros mais discretos da tripulação descobriu a combinação e decifrou o código. Infelizmente, a estação acabou sendo uma decepção, e a IA nada mais era do que um elaborado sistema de gerenciamento doméstico. A tripulação decidiu voltar para casa.'*/,
        /*'Um erro técnico no módulo de navegação levou a Nave de Exploração muito */'próximo do horizonte de eventos de um buraco negro'/* . A tripulação conseguiu dar a volta bem a tempo, mas acabou drenando seus suprimentos de combustível e teve que interromper a busca por novas formas de vida sem sucesso.'*/,
        /*'A nave de exploração relatou com entusiasmo que havia */'encontrado uma nave idêntica de um universo paralelo'/* . A tripulação desta dimensão tinha até os mesmos nomes. Mas as semelhanças pararam por aí: na festa de boas-vindas, os convidados eram tão grosseiros que a tripulação os expulsou do nosso universo. Decepcionada, mas ao mesmo tempo aliviada, a tripulação voltou para casa.'*/,
    ],
    [LifeformDiscoveryEventType.lostShip]: [
        /*'A tripulação da nave de exploração foi */'dividida por lutas internas desde o início'/* , até que um motim estourou. Os tripulantes abandonados foram localizados e resgatados, mas relataram que os amotinados haviam assumido o controle da nave e se unido com um bando de piratas espaciais. Em virtude do ocorrido, todas as tripulações das naves são agora obrigadas a participar de seminários obrigatórios de formação de equipe todo trimestre.'*/,
        /*'A tripulação da nave de exploração fez */'contato com sucesso com uma espécie alienígena anteriormente'/* desconhecida. As primeiras impressões sugeriam que eles eram benevolentes. No entanto, os relatórios do nosso emissário e da tripulação foram cada vez mais eufóricos, devemos supor que foram submetidos a algum tipo de hipnose. O relatório final que recebemos foi uma proclamação alegre em nome de toda a tripulação que eles permanecem ficar com esses alienígenas amigáveis. A nave e sua tripulação desapareceram sem deixar vestígios.'*/,
        /*'Em sua busca por formas de vida inteligentes, a nave parou em uma lua anteriormente inexplorada. Pelo menos, a lua nunca havia sido relatada. Logo ficou claro o motivo. A tripulação conseguiu emitir um sinal de socorro, embora já fosse tarde demais. Despertados pela chegada da nave, */'gigantescos vermes de magma devoraram nave e sua tripulação'/* em poucos minutos.'*/,
        /*'A nave de exploração conseguiu */'rastrear uma espécie alienígena inteligente, mas acabou sendo hostil'/* . O que parece pelo último sinal enviado pela tripulação, parece que os alienígenas os levaram como prisioneiros. Todas as tentativas de localizar a nave e sua tripulação falharam.'*/,
        /*'A nave de exploração parou em um planeta desconhecido para estocar suprimentos. O planeta estava envolto em uma névoa estranha, que a tripulação rapidamente */'conseguiu identificar como sendo o gás adormecido'/* . Mas após uma inspeção mais aprofundada, logo ficou claro que o gás era tão forte que tanto a nave quanto sua tripulação nunca seriam resgatadas.'*/,
        /*'A tripulação da nave de exploração já tinha conquistado a reputação de ser um equipamento poderoso, corajoso a ponto de ser imprudente, e é por isso que eles pareciam ser a combinação perfeita para esta missão. Talvez eles pensassem que poderiam */'simplesmente voar direto pelo campo de asteróides'/* ? Infelizmente, será difícil reunir as respostas dos destroços da sua nave.'*/,
        /*'Parece que a nave de exploração se */'perdeu em uma singularidade até então desconhecida'/* . Não houve nenhum sinal de vida da tripulação desde então.'*/,
        /*'A frota de exploração voou para uma */'emboscada preparada por uma espécie alienígena beligerante'/* . Eles pulverizaram completamente a nave de exploração antes que o contato inicial pudesse ser estabelecido.'*/,
        /*'A nave de exploração detectou alguns sinais promissores. Mas depois de procurar a */'fonte do sinal, de repente parou de transmitir'/* . Equipes de busca foram enviadas, mas não conseguiram encontrar nenhum vestígio da localização da nave Deve ter ser perdido no vazio.'*/,
        /*'O navegador da nave devia estar tão concentrado em seguir o */'estranho sinal que perdeu de vista o fato de que estavam indo para um buraco negro'/* . A nave se aproximou demais do orizonte de evento, apesar dos melhores esforços da tripulação, não havia nada para impedir de serem arrastados para dentro. Para evitar mais perdas desnecessárias, o relatório sugere que os alarmes automáticos de buracos negros sejam integrados como padrão no futuro.'*/
    ],
    
    [LifeformDiscoveryEventType.newLifeformFound]: /A forma de vida .+ foi descoberto nas coordenadas .+ e adicionado ao menu Formas de vida/i,
    [LifeformDiscoveryEventType.knownLifeformFound]: /enviados foram capazes de melhorar nosso conhecimento sobre eles por (?<xp>\d+) XP/i,
    [LifeformDiscoveryEventType.artifacts]: {
        size: {
            [LifeformDiscoveryEventArtifactFindingSize.storageFull]: /*'A Nave de Exploração encontrou alguns artefatos, */'mas não pode pegar nenhum, pois seu armazenamento está cheio',
            [LifeformDiscoveryEventArtifactFindingSize.small]: /*'A Nave de Exploração encontrou */'uma pequena quantidade de artefatos',
            [LifeformDiscoveryEventArtifactFindingSize.medium]: /*'A Nave de Exploração encontrou */'uma grande quantidade de artefatos',
            [LifeformDiscoveryEventArtifactFindingSize.large]: /*A Nave de Exploração encontrou */'uma enorme quantidade de artefactos',
        },
        numberOfArtifacts: /Artefatos encontrados:\s*(?<artifacts>\d+)/i,
    },
};
import { Ritual, EmergencyProtocol, SomaticPoint } from '../types';

export const RITUALS: Ritual[] = [
  {
    day: 1,
    name: 'Escaneamento do Corpo',
    objective: 'Identifique onde a tensão vive hoje em você.',
    steps: [
      'Feche os olhos e respire fundo três vezes, sentindo o ar entrar e sair.',
      'Lentamente, percorra mentalmente dos pés à cabeça, notando áreas de aperto.',
      'Respire "dentro" da área mais tensa, permitindo que ela se suavize um pouco.'
    ],
    reflection: 'Se essa tensão tivesse uma cor, qual seria e o que ela está tentando proteger?',
    somaticTechnique: 'Toque Suave: coloque a mão sobre a área tensa com gentileza.',
    image: 'https://picsum.photos/seed/meditation-body/800/600'
  },
  {
    day: 2,
    name: 'A Voz Silenciada',
    objective: 'O que você engoliu que ainda ecoa internamente.',
    steps: [
      'Sente-se com a coluna ereta e coloque as mãos no pescoço ou garganta.',
      'Pense em uma situação em que você não disse o que realmente sentia.',
      'Sinta a vibração da sua voz emitindo um som baixo e constante ("humm").'
    ],
    reflection: 'Qual é a frase que nunca saiu da sua garganta, mas vive na sua mente?',
    somaticTechnique: 'Voz Ressonante: emita sons graves para liberar a área da laringe.',
    image: 'https://picsum.photos/seed/voice-throat/800/600'
  },
  {
    day: 3,
    name: 'A Criança Esquecida',
    objective: 'O momento em que você parou de ser criança.',
    steps: [
      'Resgate uma memória de infância onde você se sentiu sozinho ou incompreendido.',
      'Imagine-se hoje indo sentar ao lado daquela criança.',
      'Diga a ela: "Eu estou aqui agora e ninguém mais vai te machucar".'
    ],
    reflection: 'Quantos anos você tinha quando decidiu que precisava "dar conta de tudo"?',
    somaticTechnique: 'Auto-Abraço: envolva seus braços ao redor de si mesmo por um minuto.',
    image: 'https://picsum.photos/seed/inner-child/800/600'
  },
  {
    day: 4,
    name: 'Os Nós Invisíveis',
    objective: 'Vínculos que ainda drenam sua energia vital.',
    steps: [
      'Visualize uma pessoa ou situação que gera cansaço imediato ao pensar.',
      'Sinta em qual parte do seu corpo esse "fio" está conectado.',
      'Imagine uma luz cortando esse fio com compaixão e firmeza.'
    ],
    reflection: 'O que impede você de colocar um limite claro nesse vínculo hoje?',
    somaticTechnique: 'Orientação Espacial: olhe ao redor e nomeie 5 objetos para se ancorar.',
    image: 'https://picsum.photos/seed/energy-connection/800/600'
  },
  {
    day: 5,
    name: 'O Sabotador Interno',
    objective: 'A parte que destrói quando as coisas estão quase boas.',
    steps: [
      'Lembre-se de um sucesso recente e do medo que surgiu logo em seguida.',
      'Dê um nome ou imagem para essa voz que diz que "é bom demais pra ser verdade".',
      'Agradeça à essa parte por tentar te proteger do desconhecido, mas diga que você está seguro.'
    ],
    reflection: 'Do que o seu sabotador tem tanto medo que ele prefere destruir do que ver você brilhar?',
    somaticTechnique: 'Pressão Profunda: pressione as mãos firmemente contra as coxas.',
    image: 'https://picsum.photos/seed/shadow-self/800/600'
  },
  {
    day: 6,
    name: 'A Máscara',
    objective: 'Quem você se tornou para ser aceito pelo mundo.',
    steps: [
      'Vá para frente de um espelho e observe seu rosto em repouso.',
      'Imagine que você está retirando uma camada de gesso que molda seu sorriso ou seriedade.',
      'Respire profundamente permitindo que os músculos da face desabem totalmente.'
    ],
    reflection: 'Quem você seria se não tivesse que provar nada para ninguém?',
    somaticTechnique: 'Massagem Facial: libere a mandíbula com movimentos circulares.',
    image: 'https://picsum.photos/seed/mask-persona/800/600'
  },
  {
    day: 7,
    name: 'O Ouro na Sombra',
    objective: 'O que você exilou em si mesmo e agora quer voltar.',
    steps: [
      'Pense em uma característica que você admira muito em outra pessoa, mas acha que não tem.',
      'Imagine essa característica voltando para você como uma luz dourada.',
      'Sinta seu peito se expandir ao integrar essa "parte exilada".'
    ],
    reflection: 'Qual talento ou desejo voce escondeu por vergonha, mas que hoje faria sua vida vibrar?',
    somaticTechnique: 'Expansão de Tórax: abra os braços e olhe levemente para cima.',
    image: 'https://picsum.photos/seed/golden-shadow/800/600'
  }
];

export const EMERGENCY_PROTOCOLS: EmergencyProtocol[] = [
  {
    id: 'flooding',
    title: 'Flooding (Raiva/Pânico)',
    color: 'orange',
    supportQuote: 'O excesso de energia é uma tentativa do corpo de sobreviver. Vamos drenar isso.',
    steps: [
      { title: 'Movimento Explosivo', description: 'Empurre a parede com toda sua força por 30 segundos. Sinta seus músculos engajando.', icon: 'fitness_center' },
      { title: 'Descarga Vocal', description: 'Solte o ar com um som de "Ffff" ou "Ssss" longo e forte, como um pneu esvaziando.', icon: 'record_voice_over' },
      { title: 'Ritmo Constante', description: 'Caminhe pelo ambiente, batendo os pés firmemente no chão, sentindo o peso do corpo.', icon: 'directions_walk' }
    ]
  },
  {
    id: 'freeze',
    title: 'Freeze (Paralisia)',
    color: 'blue',
    supportQuote: 'O congelamento é uma resposta biológica de proteção. Você está seguro agora.',
    steps: [
      { title: 'Despertar Sensorial', description: 'Pressione as palmas das mãos contra uma superfície fria ou segure um cubo de gelo.', icon: 'ac_unit' },
      { title: 'Orientação', description: 'Lentamente, olhe para a esquerda e para a direita, contando 5 cores diferentes no ambiente.', icon: 'visibility' },
      { title: 'Micro-Movimentos', description: 'Comece a mexer apenas as pontas dos dedos, depois os pulsos, trazendo a vida de volta.', icon: 'gesture' }
    ]
  },
  {
    id: 'collapse',
    title: 'Colapso (Vazio/Desligamento)',
    color: 'gray',
    supportQuote: 'Sua energia baixou demais. Vamos trazer calor e presença gentilmente.',
    steps: [
      { title: 'Calor Seguro', description: 'Envolva-se em um cobertor pesado ou tome algo quente, sentindo o calor entrar.', icon: 'hot_tub' },
      { title: 'Afirmação Somática', description: 'Coloque a mão no peito e diga: "Eu estou aqui, eu ocupo este espaço".', icon: 'front_hand' },
      { title: 'Estímulo Leve', description: 'Esfregue seus braços e pernas vigorosamente para sentir os limites do seu corpo.', icon: 'wash' }
    ]
  }
];

export const SOMATIC_POINTS: SomaticPoint[] = [
  { id: 'head', name: 'Consciência', emotion: 'Ansiedade Mental', reflection: 'Quais pensamentos estão tentando te manter no controle de algo que você não pode mudar?', top: '10%', left: '50%' },
  { id: 'throat', name: 'Garganta', emotion: 'Voz Silenciada', reflection: 'Que verdade você está segurando para não decepcionar os outros?', top: '22%', left: '50%' },
  { id: 'chest', name: 'Coração', emotion: 'Pânico de Abandono', reflection: 'O que você tem medo que aconteça se você pedir ajuda?', top: '35%', left: '50%' },
  { id: 'abdomen', name: 'Plexo Solar', emotion: 'Insegurança/Poder', reflection: 'Onde você está cedendo sua força para não ser considerada "demais"?', top: '52%', left: '50%' },
  { id: 'hips', name: 'Quadril', emotion: 'Trauma/Escassez', reflection: 'Quais medos ancestrais você carrega que não pertencem à sua história atual?', top: '75%', left: '50%' }
];

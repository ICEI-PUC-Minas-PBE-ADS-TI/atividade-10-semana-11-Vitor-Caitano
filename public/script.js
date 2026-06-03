const data = {
    "catedrais": [
      {
        "id": 1,
        "nome": "Catedral de Notre-Dame de Paris",
        "cidade": "Paris",
        "pais": "França",
        "ano": 1163,
        "imagem": "images/notre-dame.jpg",
        "patrimonioUnesco": true,
        "estilo": "Gótico",
        "descricao": "Uma das mais icônicas e antigas catedrais em estilo gótico no mundo, a Catedral de Notre-Dame de Paris é uma catedral às margens do Rio Sena dedicada à Virgem Maria. Sua arquitetura reflete as principais características do gótico: Torres altas, grandes vitrais coloridos, e gárgulas, arcos e imagens decoram seu exterior. A catedral foi palco de eventos importantíssimos da hitória, como a coroação de Napoleão Bonaparte e a beatificação de Santa Joana D'Arc, tendo sobrevivido à Revolução Francesa e ao recente incêndio em 2019."
      },
      {
        "id": 2,
        "nome": "Catedral de Colônia",
        "cidade": "Colônia",
        "pais": "Alemanha",
        "ano": 1248,
        "imagem": "images/catedral-colonia.jpg",
        "patrimonioUnesco": true,
        "estilo": "Gótico",
        "descricao": "Uma das maiores e mais impressionantes catedrais do mundo, a Catedral de Colônia apresenta uma silhueta clássica do estilo gótico, simbolizada pelas torres altas apontando para o céu. Sua construção começou no século XIII, mas só foi totalmente concluída no século XIX, seguindo fielmente os planos originais da Idade Média em todo o período de construção. O monumento abriga o precioso Relicário dos Três Reis Magos e se tornou um símbolo de resistência ao permanecer de pé mesmo após sofrer severos bombardeios durante a Segunda Guerra Mundial."
      },
      {
        "id": 3,
        "nome": "Catedral de Milão",
        "cidade": "Milão",
        "pais": "Itália",
        "ano": 1386,
        "imagem": "images/catedral-milao.jpg",
        "patrimonioUnesco": false,
        "estilo": "Gótico Tardio",
        "descricao": "Conhecida como Duomo di Milano, é uma das maiores igrejas católicas do mundo e um exemplo único do estilo gótico tardio com fortes influências lombardas. Diferente de outras catedrais medievais de pedra escura, essa foi inteiramente revestida de mármore branco-rosado. Seu exterior é adornado por milhares de agulhas pontiagudas e esculturas detalhadas, culminando na famosa estátua de cobre dourado da Madonnina, que protege a cidade do topo da torre principal."
      },
      {
        "id": 4,
        "nome": "Catedral Metropolitana de Diamantina",
        "cidade": "Diamantina",
        "pais": "Brasil",
        "ano": 1933,
        "imagem": "images/catedral-diamantina.jpg",
        "patrimonioUnesco": true,
        "estilo": "Neo-colonial",
        "descricao": "A Catedral Metropolitana de Santo Antônio da Sé foi construída no início do século XX no mesmo local da antiga matriz do século XVIII, em Diamantina. Seu estilo arquitetônico neo-colonial foi projetado para se harmonizar com o casario colonial ao seu redor. Como o centro histórico da cidade é reconhecido internacionalmente, ela integra o conjunto tombado que confere o título de Patrimônio Mundial, destacando-se como um dos principais marcos religiosos e culturais da região mineira."
      },
      {
        "id": 5,
        "nome": "Catedral de São Patrício",
        "cidade": "Nova York",
        "pais": "Estados Unidos",
        "ano": 1858,
        "imagem": "images/stpatrick.jpg",
        "patrimonioUnesco": false,
        "estilo": "Neogótico",
        "descricao": "Localizada na Quinta Avenida, no coração de Manhattan, a Catedral de São Patrício é um dos maiores símbolos religiosos e arquitetônicos dos Estados Unidos. Construída no século XIX, ela é um exemplo magnífico do estilo neogótico, projetada para trazer a grandiosidade das catedrais medievais europeias para o Novo Mundo. O monumento se destaca pelo contraste de suas imponentes torres de mármore branco em meio aos modernos arranha-céus que a cercam, sendo um ponto de parada obrigatório para milhões de visitantes todos os anos."
      },
      {
        "id": 6,
        "nome": "Sé Nova de Coimbra",
        "cidade": "Coimbra",
        "pais": "Portugal",
        "ano": 1598,
        "imagem": "images/se-coimbra.jpg",
        "patrimonioUnesco": true,
        "estilo": "Maneirista / Barroco",
        "descricao": "Originalmente construída como o Colégio dos Jesuítas, a Sé Nova de Coimbra passou a cumprir o papel de catedral da cidade no século XVIII. Sua imponente fachada combina a sobriedade e a geometria do estilo maneirista na parte inferior com a decoração exuberante do barroco na parte superior. Localizada na zona alta da cidade, próxima à prestigiada Universidade de Coimbra, a catedral integra o conjunto histórico classificado como Patrimônio Mundial pela UNESCO e guarda em seu interior um valioso retábulo de talha dourada."
      },
      {
        "id": 7,
        "nome": "Basílica da Sagrada Família",
        "cidade": "Barcelona",
        "pais": "Espanha",
        "ano": 1882,
        "imagem": "images/sagrada-familia.jpg",
        "patrimonioUnesco": true,
        "estilo": "Modernista Catalão / Art Nouveau",
        "descricao": "O arquiteto Antoni Gaudí sua vida ao projeto da Basílica da Sagrada Família, combinando formas da natureza com o estilo neogótico e o modernismo catalão. O interior da basílica imita uma imensa floresta de pedra, onde colunas se ramificam como árvores e vitrais coloridos criam um espetáculo de luz natural. O monumento, que faz parte do Patrimônio Mundial da UNESCO, é famoso mundialmente por estar em construção contínua há mais de 140 anos."
      },
      {
        "id": 8,
        "nome": "Catedral do Sagrado Coração",
        "cidade": "Guangzhou",
        "pais": "China",
        "ano": 1863,
        "imagem": "images/sagrado-coracao-china.jpg",
        "patrimonioUnesco": false,
        "estilo": "Gótico / Neogótico",
        "descricao": "Localizada na margem norte do Rio das Pérolas, em Guangzhou, a Catedral do Sagrado Coração é uma das principais Igrejas de toda a Ásia. Projetada por arquitetos franceses e construída ao longo de 25 anos por artesãos chineses, ela é famosa por ser feita inteiramente de blocos de granito maciço, o que lhe rendeu o apelido de 'Igreja de Pedra'. O edifício remete às características do etilo arquitetônico gótico, como imponentes torres gémeas, abóbadas de berço cruzadas e vitrais coloridos importados da Europa, servindo como um impressionante marco cultural e histórico no coração da metrópole chinesa."
      },
      {
        "id": 9,
        "nome": "Basílica de Nossa Senhora do Pilar",
        "cidade": "Ouro Preto",
        "pais": "Brasil",
        "ano": 1711,
        "imagem": "images/n-sra-pilar.jpg",
        "patrimonioUnesco": true,
        "estilo": "Barroco / Rococó",
        "descricao": "Localizada em Ouro Preto, Minas Gerais, a Basílica de Nossa Senhora do Pilar é uma das igrejas mais famosas do Brasil e um dos principais marcos do barroco mineiro. O monumento é internacionalmente conhecido pela riqueza de seu interior, que conta com uma ornamentação impressionante rica em ouro. Inteiramente inserida no Centro Histórico de Ouro Preto, a igreja faz parte do conjunto tombado como Patrimônio Mundial pela UNESCO."
      },
      {
        "id": 10,
        "nome": "Arquibasílica de São João de Latrão",
        "cidade": "Roma",
        "pais": "Itália",
        "ano": 324,
        "imagem": "images/latrao.jpg",
        "patrimonioUnesco": true,
        "estilo": "Barroco",
        "descricao": "Considerada a 'Mãe e Cabeça de todas as igrejas de Roma e do Mundo', a Arquibasílica de São João de Latrão é a catedral oficial do Papa e a mais antiga das quatro basílicas papais. Fundada no século IV pelo imperador Constantino, a catedral passou por várias reconstruções ao longo dos séculos. Seu visual atual é marcado pela monumental fachada neoclássica e por um interior de estilo barroco, projetado pelo famoso arquiteto Francesco Borromini, decorado com imensas estátuas dos apóstolos. O complexo faz parte do Patrimônio Mundial da UNESCO. É na Arquibasílica que fica localizada a Cátedra do Papa onde ele toma posse da Diocese de Roma."
      }
    ]
  }


  
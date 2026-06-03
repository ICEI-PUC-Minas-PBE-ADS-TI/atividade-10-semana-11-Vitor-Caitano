# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Vítor Caitano de Morais
- Matrícula: 926182
- Descreva brevemente seu projeto: O projeto trás uma breve lista com algumas importantes Catedrais Católicas distribuídas ao redor do mundo.

## Prints do trabalho

![print pagina principal](<public/images/print pagina principal.png>)

![print pagina detalhes](<public/images/print detalhes.png>)

## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

```json
{
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
    }
  ]
}
```



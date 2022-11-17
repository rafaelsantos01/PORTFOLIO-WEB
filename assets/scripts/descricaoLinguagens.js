// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.java') {
            cardName.innerHTML = ' Java '
        } 
        if(nameCard === '.mysql') {
            cardName.innerHTML = ' MySQL '
        } 
        if(nameCard === '.spring') {
            cardName.innerHTML = ' ECOSSISTEMA SPRING '
        } 
        if(nameCard === '.reactJS') {
            cardName.innerHTML = ' ReactJS '
        } 
        if(nameCard === '.postgre') {
            cardName.innerHTML = ' postgres '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Estrutura de layouts, principais tags, HTML Semântico, criação de tabelas e formulários.'
)

changeDescription(
    '.css',
    'Estilização de layouts, box model, CSS Grid, FlexBox.'
)

changeDescription(
    '.js',
    'Conceitos basicos da linguagem, tipos de dados, métodos, funções e eventos.'
)

changeDescription(
    '.git',
    'Versionamento de código e principais comandos.'
)

changeDescription(
    '.java',
    'Essa é minha linguagem principal, a que eu mais me aprofundei, tenho conhecimento em POO, JavaFX, JavaWEB.'   
)

changeDescription(
    '.mysql',
    'Criação e gerenciamente de um banco de dados, conhecimento dos principais comandos DDL, DML.'   
)
changeDescription(
    '.spring',
    'Conheço as principais ferramentas do ecosistema Spring, e cada dia mais procuro me aprofundar.'   
)
changeDescription(
    '.reactJS',
    'Essa é uma biblioteca que mais estou estudando no momento.'   
)
changeDescription(
    '.postgre',
    'Criação e gerenciamente de um banco de dados, conhecimento dos principais comandos DDL, DML.'   
)


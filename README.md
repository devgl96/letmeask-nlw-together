# Letmeask App - NLW Together
## Mission Complete - Day 1
# Sobre o primeiro dia
    - Nesta primeira aula foi apresentado o que vai ser desenvolvido nesta semana. 
    Uma aplicação chamada *Letmeask* que tem como objetivo ajudar no monitoramento de perguntas 
    que são realizadas pelo público e assim, votadas e indicadas pelo host da Live, da apresentação ou ambientes similares. 
    - Na parte técnica foram abordados muitos assuntos que são essenciais para o desenvolvimento Web, usando React:
        * SPA (Single Page Application) e a sua diferença em relação ao desenvolvimento web de anos atrás,
        * Firebase: O motivo de ser utilizado este modelo BAAS (Backend As A Service) e quais serviços iremos utilizar => Authentication e Databases
        * Iniciando um projeto React, com o comando: yarn create react-app letmeask --template typescript
        * Principais conceitos do React: Componentes - Propriedades - Estado 
        * Criando um projeto Firebase pelo site oficial: https://firebase.google.com/
        * Instalando para integração do Firebase no React: yarn add firebase
        * Criando a pasta 'services' para utilidades, como o arquivo de configuração do firebase => 'firebase.ts'
        * Criando variáveis de ambiente e integrando a configuração do Firebase, como forma de segurança

    - Assunto Novo: BAAS e Closures
    
# Sobre o segundo dia
    - Nesta segunda aula muito conteúdo top foi desenvolvido:
        * As duas primeiras páginas foram desenvolvidas e estilizadas usando o SASS (Versão 5.0.0).
        * Para a criação de um estilo específico de botão que vai ser usado 
        em outras páginas da aplicação foi criado um componente usando um 
        type com o tipo ButtonHTMLAttributes que é importado do próprio React, 
        e tendo como template o HTMLButtonElement.
        * Para o roteamento das páginas da aplicação foi usado o "react-router-dom", 
        e importando o 'BrowserRouter' e o 'Route' do mesmo para gerenciar as rotas da aplicação.
        * Para linkagem de páginas foi utilizado o 'Link' e o 'useHistory' do react-router-dom. O primeiro
        para fazer o link através da tag e o segundo para ser utilizado através de uma função.
        * Para a autenticação com Firebase foi usado o 'auth' do próprio Firebase: 'const provider = new firebase.auth.GoogleAuthProvider()' e com verificação de login através do 'auth.signInWithPopup(provider)'.
        * O assunto Contexto em React foi abordado mostrando como pode ser usado como forma de compartilhar dados entre as páginas da aplicação de forma prática. Pra isso, foi desenvolvido uma pasta com 'AuthContext.tsx' para ter todos os dados necessários para o uso na aplicação.
        * Por fim, é usado o useEffect que é um hook do React para recuperar o estado de autenticação
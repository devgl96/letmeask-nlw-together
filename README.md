# Letmeask App - NLW Together
## Sobre o primeiro dia
### Nesta primeira aula foi apresentado o que vai ser desenvolvido nesta semana. 
- Uma aplicação chamada **Letmeask** que tem como objetivo ajudar no monitoramento de perguntas 
que são realizadas pelo público e assim, votadas e indicadas pelo host da Live, da apresentação ou ambientes similares. 
    - Na parte técnica foram abordados muitos assuntos que são essenciais para o desenvolvimento Web, usando React:
        [x] SPA (Single Page Application) e a sua diferença em relação ao desenvolvimento web de anos atrás,
        [x] Firebase: O motivo de ser utilizado este modelo BAAS (Backend As A Service) e quais serviços iremos utilizar => Authentication e Databases
        [x] Iniciando um projeto React, com o comando: yarn create react-app letmeask --template typescript
        [x] Principais conceitos do React: Componentes - Propriedades - Estado 
        [x] Criando um projeto Firebase pelo site oficial: [Firebase](https://firebase.google.com/)
        [x] Instalando para integração do Firebase no React: yarn add firebase
        [x] Criando a pasta 'services' para utilidades, como o arquivo de configuração do firebase => 'firebase.ts'
        [x] Criando variáveis de ambiente e integrando a configuração do Firebase, como forma de segurança

- Assunto Novo: BAAS e Closures
    
## Sobre o segundo dia
### Nesta segunda aula muito conteúdo top foi desenvolvido:
[x] As duas primeiras páginas foram desenvolvidas e estilizadas usando o SASS (Versão 5.0.0).
[x] Para a criação de um estilo específico de botão que vai ser usado 
em outras páginas da aplicação foi criado um componente usando um 
type com o tipo ButtonHTMLAttributes que é importado do próprio React, 
e tendo como GENERIC o <HTMLButtonElement>.
[x] Para o roteamento das páginas da aplicação foi usado o "react-router-dom", 
e importando o 'BrowserRouter' e o 'Route' do mesmo para gerenciar as rotas da aplicação.
[x] Para linkagem de páginas foi utilizado o 'Link' e o 'useHistory' do react-router-dom. O primeiro
para fazer o link através da tag e o segundo para ser utilizado através de uma função.
[x] Para a autenticação com **Firebase** foi usado o 'auth' do próprio Firebase: 
``` js
    const provider = new firebase.auth.GoogleAuthProvider()
```
[x] E com verificação de login através do 
``` js
    auth.signInWithPopup(provider)
```
[x] O assunto Contexto em React foi abordado mostrando como pode ser usado como forma de compartilhar dados entre as páginas da aplicação de forma prática. Pra isso, foi desenvolvido uma pasta com **AuthContext.tsx** para ter todos os dados necessários para o uso na aplicação.
[x] Por fim, é usado o **useEffect** que é um hook do React para recuperar o estado de autenticação

## Sobre o terceiro dia
### Nesta terceira aula, mais uma vez, um conteúdo de alto nível e muita novidade
- Como estamos utilizando o **Firebase** foi uma aula muito voltado as funcionalidades deste BAAS:
    [x] O motivo de está usando o Realtime Database é por conta que é um base de dados 'Schema Free', então, para o objetivo desta aplicação, este modelo supre as necessidades. Para saber mais sobre, tem este link:[RealtimeDatabase vs Firestore](https://firebase.google.com/docs/database/rtdb-vs-firestore)
    [x] Sobre regras de acesso a aplicação em Firebase, onde foi passada primeiramente como tanto o 'read' quanto o 'write' como true, mas depois, foi abordado como fazer as configurações certas baseado nas 'Regras de Negócios' da aplicação. Essa parte foi bem complexa, mas foi muito bom aprender.
    [x] A página da sala foi criada com o Header desta página, e também, a área de perguntas de forma personalizada. 
    [x] Depois foi criado as funções e as tipagens responsáveis pelo envio das perguntas para o Realtime Database.
    [x] Por fim, e não menos importante, foi 'escutado' as perguntas de forma 'Realtime'.
    [x] Nesta aula de hoje, vários conteúdos técnicos foram abordados realmente, elevando ao Próximo Nível!

## Sobre o quarto dia
### Nesta quarta aula, o aprendizado foi elevado mais uma vez ao próximo nível:
[x] A estrutura das perguntas foi realizado, trazendo a componentização em pasta, 
    mostrando que pode ser feito desta forma.,
[x] O algoritmo de reconciliação do React foi apresentado para mostrar qual o motivo 
    de usar uma 'key' no componente em um 'map',
[x] A criação do Hook 'useRoom' foi um dos pontos auges desta aula, muito interessante,
    como funcionalidades que são usadas em vários momentos da aplicação, podem ser unidas em um mesmo arquivo 
    e compartilhada com os demais,
[x] A página da sala, por parte do Admin, foi criada e juntamente foi apresentado conceitos que são muito úteis, 
    como o 'gap' no CSS e o Rest Operator, 
[x] A funcionalidade de like e dislike foi implementada e também apresentado como os listeners precisam ser removidos, 
    quando os mesmos deixarem de ser úteis na aplicação. Esta funcionalidade foi integrada com o Firebase.
[x] A funcionalidade de remoção de pergunta também foi implementada, 
[x] E por fim, a funcionalidade de 'encerrar sala' foi implementada utilizando um novo dado inserido no RealtimeDatabase 
    para assim, apresentar ao usuário que tentar entrar na sala, possa receber uma mensagem que a sala foi encerrada.

## Sobre o quinto dia
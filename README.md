# Dia 04 

 1. [Desenvolvimento Mobile](#desenvolvimento-mobile)
 2. [React Native](#react-native)
 3. [Criando um projeto Expo](#criando-um-projeto-expo)
 4. [Tasks](#tasks-do-dia-04)
 5. [Árvore de arquivos mobile](#%C3%A1rvore-de-arquivos-mobile)

## Desenvolvimento Mobile

Há duas formas de se desenvolver uma aplicação mobile: Nativa ou Multi Plataforma. A imagem abaixo ilustra um pouco desses dois processos.
<p align='center'>
	<img src='https://i.imgur.com/vkzGWXv.png' alt='mobile'>
<p>

As vantagens do desenvolvimento nativo são: Performance, 100% das funcionalidades, sempre atualizado com o sistema e segurança.

Já as vantagens do multi plataforma são: Produtividade, simplicidade, manutenção e menor custo de produção.

## React Native

A stack utilizada nesse projeto é o [React Native](https://reactnative.dev/).  Que utiliza o react para desenvolvimento mobile, também utilizando conceitos de html e css e linguagens como JavaScript e TypeScript.

O react native tem algumas coisas diferentes do reactjs. As duas mais importantes é que não a tags para formatação de texto mas sim a tag  ```<Text><Text/>``` que tem que ser estilizada manualmente em vez de uma ```<div><div/>``` envolvendo nosso container ou página teremos a tag ```<View><View/>```.

## Criando um projeto Expo

[Expo](https://expo.io/) é uma plataforma para desenvolvimento de aplicativos com react e JavaScript para iOS, Android e web. Para instalar você deve rodar o seguinte comando:

```shell
yarn global add expo-cli
```

ou:

```shell
npm install --global expo-cli
```

Após instalação é fácil começar um projeto:

``` shell
expo init my-project-name
```
Após a instalação você está pronto para codar!

## Tasks do dia 04

 1. Criando tela do mapa
 2. Trabalhando com rotas

## Árvore de arquivos mobile

```
📦src
 ┣ 📂@types
 ┃ ┗ 📜index.d.ts
 ┣ 📂images
 ┃ ┣ 📜map_marker.png
 ┃ ┣ 📜map_marker@2x.png
 ┃ ┗ 📜map_marker@3x.png
 ┣ 📂pages
 ┃ ┣ 📜OrphanageDetails.tsx
 ┃ ┗ 📜OrphanagesMap.tsx
 ┗ 📜routes.tsx
```

# Dia 5
Primeiramente parabéns por ter chegado até aqui! Absorver todos esses conhecimentos não é pra qualquer um e de longe algo simples. Você está quase pronto para ir para o próximo nível, então não desita agora!

Esse dia como alguns outros foi muito mais prática do que teoria, então só irei colocar a lista de tasks realizadas e a árvore de arquivos para referência.

## Tasks do dia 5

 1. Criando fluxo de cadastro de orfanatos
 2. Adicionando telas faltantes
 3. Buscar orfanatos da API
 4. Detalhe do orfanato
 5. Cadastro de orfanato
 6. Desafios

## Árvore de Arquivos

```
📦src
 ┣ 📂@types
 ┃ ┗ 📜index.d.ts
 ┣ 📂components
 ┃ ┗ 📜Header.tsx
 ┣ 📂images
 ┃ ┣ 📜map_marker.png
 ┃ ┣ 📜map_marker@2x.png
 ┃ ┗ 📜map_marker@3x.png
 ┣ 📂pages
 ┃ ┣ 📂CreateOrphanage
 ┃ ┃ ┣ 📜OrphanageData.tsx
 ┃ ┃ ┗ 📜SelectMapPosition.tsx
 ┃ ┣ 📜OrphanageDetails.tsx
 ┃ ┗ 📜OrphanagesMap.tsx
 ┣ 📂services
 ┃ ┗ 📜api.ts
 ┗ 📜routes.tsx
```

## Próximo Nível

Continue sempre codando e acesse esse 🚀 [link](https://github.com/rocketseat-education/nlw-03-omnistack) 🚀

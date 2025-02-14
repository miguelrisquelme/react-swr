# SWR

## Como funciona?

Toda requisição HTTP que você faz é armazenada em um cache, então quando você está fazendo a requisição primeiro ele vai buscar no cache, se ela já estiver lá ele traz e te mostra a versão mais recente daquela informação que você tem no cache e tenta revalidar ela em background, ou seja, vai na API e tenta buscar os novos dados daquela informação.

## Mutate e Mutate Global

Quando você atualiza dados pela interface, porém, caso o dado que você atualizou esteja em outro lugar, ele ainda vai estar com o cache antigo, porém o mutate te dá a possibilidade de atualizar o cache daquele dado globalmente.

## Na prática

Para poder visualizar melhor tudo isso, eu separei duas branches para testar `without-swr` e `with-swr`

### Mudar de branch

- Testar sem SWR
  ```
    git chekout without-swr
  ```
- Testar com SWR
  ```
    git chekout with-swr
  ```

### Rodar a aplicação

```
  // Para instalar as dependências
  npm i
  
  // Para rodar a aplicação
  npm run start

  // Para rodar a API
  npm run server
```

## Referências

- <a href="https://youtu.be/Pbs1VIwPoRA" target="_blank">Consumindo APIs no React com SWR | Code/Drops #38</a>
- <a href="https://swr.vercel.app/" target="_blank">SWR | Documentação da Vercel</a>
- <a href="https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/" target="_blank">React Hook SWR - Melhor UX no consumo de API no Front End React</a>

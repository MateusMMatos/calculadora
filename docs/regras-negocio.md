## Regras Gerais

1. O sistema deve permitir que qualquer visitante (logado ou anônimo) realize operações matemáticas básicas.

2. Cada operação realizada deve gerar um registro contendo:
   - A expressão inserida (ex: "2 + 3")
   - O resultado calculado (ex: 5)
   - A data e hora da execução

3. As operações devem ser armazenadas em ordem cronológica (mais recente primeiro).

## Regras para visitantes anônimos

4. As operações feitas por usuários anônimos devem ser armazenadas apenas na sessão atual do navegador (sem banco de dados).

5. O histórico deve ser apagado ao fechar a aba ou atualizar a página (via `localStorage` ou `sessionStorage` no frontend).

## Regras para usuários logados

6. O sistema deve permitir que o visitante se identifique informando nome e e-mail (sem senha).

7. Após informado, as operações feitas devem ser persistidas no banco de dados, vinculadas ao usuário.

8. O usuário deve poder visualizar o histórico completo de suas operações a qualquer momento, mesmo após sair e voltar ao sistema.

Feature: Realizar operações matemáticas

  Scenario: Visitante realiza um cálculo sem estar logado
    Given que estou na página da calculadora
    When eu insiro a expressão "3 * 2"
    Then o sistema deve mostrar o resultado "6"
    And salvar a operação apenas em memória

  Scenario: Visitante fecha a página
    Given que eu realizei cálculos sem estar logado
    When eu fecho ou atualizo a aba
    Then o histórico deve ser apagado

  Scenario: Usuário se identifica
    Given que estou na página da calculadora
    When eu informo meu nome e e-mail
    Then o sistema deve registrar meus dados como um novo usuário

  Scenario: Usuário logado realiza um cálculo
    Given que estou logado com nome e e-mail
    When eu insiro a expressão "10 - 4"
    Then o sistema deve mostrar o resultado "6"
    And salvar a operação vinculada ao meu usuário

  Scenario: Usuário logado consulta histórico
    Given que estou logado com nome e e-mail
    When eu acesso a opção de histórico
    Then o sistema deve mostrar todas as operações que eu já realizei

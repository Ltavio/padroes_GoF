# Padrões de desenvolvimento 
## Singleton
É um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

Por que utilizar uma unica instancia globalmente ? A razão mais comum para isso é para controlar o acesso a algum recurso compartilhado. Por exemplo uma base de dados (que no exemplo em questão, foi utilizado uma base de dados de medicamentos).

Então se eu criar um objeto e logo depois quiser criar um novo objeto em uma nova varivel da minha instancia, eu irei adicionar o objeto em uma lista que ja existiam outros objetos, pois será adicionado na mesma instancia. Diferente de quando estou utilizando um instancia normal sem utilizar uma instancia global em que eu chamei minha instancia em uma variavel adicionei um objeto e em outra variavel fiz a mesma coisa, nessa situação eu iria estar adicionando objetos em instancias independentes.

### Prós
- Garante que uma classe tenha apenas uma instância.
- Fornecer um ponto de acesso global para essa instância.
- Reduz a complexidade do código, pois não é necessário gerenciar a criação de instancias.
- Prevenção de inconsistências, pois como sem será utilizado apenas uma instancia os dados compartilhados permanecem padronizados.
### Contras
- Pode ser difícil de implementar em classes que dependem de injeção de dependência.
- Pode ser difícil de testar, pois a instância pode ser compartilhada entre
testes.
- Viola o princípio da responsabilidade única.
- Risco de código complexo.
### Conclusão
Então, o padrão Singleton é útil para garantir uma única instância de uma classe, ideal para gerenciar recursos compartilhados como conexões ou configurações globais. Apesar de facilitar o controle centralizado e prevenir inconsistências, seu uso pode dificultar testes e violar princípios de design. É importante utilizá-lo de forma criteriosa, avaliando alternativas como injeção de dependência para maior flexibilidade e manutenção do código.

## STRATEGY
O padrão Strategy define e encapsula algoritmos, tornando-os intercambiáveis, e dessa forma, permite que eles variem de acordo com o modo que o cliente os utiliza. Pode ser aplicado para cálculos de descontos em e-commerce ou para definir rotas em sistemas de navegação.
### Prós
- Reutilização – As estratégias podem ser utilizadas em outros contextos.
- Extensibilidade – Novos cálculos podem ser adicionados sem alterar a lógica já existente, apenas com a criação de uma nova classe.
- Desacoplamento – A classe principal não precisa saber como os cálculos são feitos, apenas delega a estratégia.
- Flexibilidade – Mudanças podem ser feitas em classes distintas.
### Contras
- Complexidade Inicial – Em código e sistemas pequenos, pode requerer classes e interfaces que parecem desnecessários.
- Número de Classes Alto – Novas classes precisam ser criadas para novos comportamentos, isso leva a um grande número de classes em sistemas que possuem grande número de variações.
- Sobrecarga – Criar e gerenciar muitas classes em sistemas pequenos ou simples pode ser desnecessário.
- Manuseio – Quem for utilizar o sistema precisa conhecer e saber diferenciar as estratégias para poder escolher a mais adequada.
### Conclusão
O padrão Strategy auxilia na manutenção, flexibilidade, extensão e reutilização de maneira prática no desenvolvimento de sistemas. Sendo aplicado em sistemas que há alternância de comportamentos que são relacionados entre si, para cálculos de impostos, taxas e descontos, por exemplo.

## Adapter
O Padrão de Projeto Adapter integra os sistemas com interfaces incompatíveis. Esse padrão atua como um "tradutor" entre duas interfaces diferentes, permitindo que sistemas existentes trabalhem juntos sem a necessidade de modificações significativas no código.
### Prós
- Princípio de responsabilidade única. Você pode separar a conversão de interface ou de dados da lógica primária do negócio do programa.
- Princípio aberto/fechado. Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente, desde que eles trabalhem com os adaptadores através da interface cliente.
### Contras
- A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Algumas vezes é mais simples mudar a classe serviço para que ela se adeque com o resto do seu código.
### Conclusão
O padrão de projeto Adapter é uma solução eficaz para problemas de integração entre sistemas com interfaces incompatíveis. Embora possa aumentar a complexidade do código é uma escolha razoável quando a integração é necessária.


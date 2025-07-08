# Cypress Test Automation - Kurzgesagt.org

## 📋 Descrição do Projeto

Este projeto implementa testes automatizados para o site [Kurzgesagt.org](https://kurzgesagt.org/) usando a ferramenta Cypress. Foi desenvolvido como parte da avaliação da disciplina de Verificação e Validação, cobrindo 4 fluxos principais de funcionalidade do site.

**Autor:** Gabriel Felipe Guarnieri  
**Disciplina:** Verificação e Validação - Prova 2  
**Ferramenta:** Cypress v14.5.1  
**Data:** Julho 2025

## 🎯 Fluxos Testados

### 1. **Carregamento da Homepage e Verificação de Conteúdo**
- Acessa a página inicial do site
- Verifica se a página carrega corretamente
- Valida a presença de elementos básicos (título, links, cabeçalhos)
- Confirma que existem pelo menos 5 links na página

### 2. **Verificação de Links de Redes Sociais**
- Procura por links para redes sociais
- Verifica presença de links para YouTube, Instagram, Twitter ou Facebook
- Confirma que pelo menos um link social está presente

### 3. **Navegação para Página "Sobre"**
- Localiza link para página "Who We Are" ou "About"
- Clica no link encontrado
- Verifica se a navegação foi bem-sucedida

### 4. **Verificação de Funcionalidade de Loja**
- Procura por links para loja ou produtos
- Testa navegação para seção de compras se disponível
- Verifica conteúdo do site se loja não estiver presente

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm (incluído com Node.js)

### Instalação
```bash
# Clone o repositório (se aplicável)
git clone https://github.com/oguarni/automacao-vv-cypress

# Navegue para o diretório do projeto
cd kurzgesagt-cypress-tests

# Instale as dependências
npm install
```

### Executar os Testes

#### Modo Headless (Sem Interface Gráfica)
```bash
# Executar todos os testes
npm test

# Executar todos os testes sem mensagens de erro (recomendado)
npm run test:clean

# Executar apenas o arquivo de teste principal
npx cypress run --spec "cypress/e2e/simple-homepage.cy.js"
```

#### Modo com Interface Gráfica
```bash
# Executar testes com navegador visível
npm run test:headed

# Abrir interface do Cypress
npm run test:open
```

#### Executar com Navegador Específico
```bash
# Executar com Chrome
npm run test:chrome
```

### Gerar Relatório
```bash
# Gerar relatório HTML
node generate-report.js

# O arquivo test-report.html será criado na raiz do projeto
```

## 📁 Estrutura do Projeto

```
kurzgesagt-cypress-tests/
├── cypress/
│   ├── e2e/
│   │   ├── simple-homepage.cy.js      # Testes principais
│   │   ├── homepage-video.cy.js       # Teste de navegação de vídeos
│   │   ├── search-functionality.cy.js # Teste de funcionalidade de busca
│   │   ├── shop-browsing.cy.js       # Teste de navegação da loja
│   │   └── about-page.cy.js          # Teste da página sobre
│   ├── support/
│   │   ├── e2e.js                    # Configurações globais
│   │   └── commands.js               # Comandos customizados
│   ├── videos/                       # Vídeos das execuções
│   └── screenshots/                  # Screenshots de falhas
├── cypress.config.js                 # Configuração do Cypress
├── generate-report.js                # Script para gerar relatório
├── test-report.html                  # Relatório HTML gerado
├── package.json                      # Dependências do projeto
├── .gitignore                        # Arquivos ignorados pelo git
└── README.md                         # Este arquivo
```

## ⚙️ Configurações do Cypress

### Configurações Principais
- **URL Base:** https://kurzgesagt.org
- **Timeout de Comando:** 15 segundos
- **Timeout de Carregamento:** 60 segundos
- **Tentativas de Retry:** 2 em modo headless
- **Gravação de Vídeo:** Habilitada
- **Screenshots em Falha:** Habilitado

### Comandos Customizados
- `cy.waitForContent(selector, timeout)` - Espera por conteúdo específico
- `cy.safeClick(selector)` - Clique seguro com scroll e force

## 📊 Resultados dos Testes

### Última Execução
- **Total de Testes:** 4
- **Testes Aprovados:** 4
- **Testes Reprovados:** 0
- **Taxa de Sucesso:** 100%
- **Tempo de Execução:** 28 segundos

### Arquivos de Evidência
- **Vídeo:** `cypress/videos/simple-homepage.cy.js.mp4`
- **Relatório:** `test-report.html`

## 🛠️ Solução de Problemas

### Problemas Comuns e Soluções

#### 1. Erro de Timeout
```bash
# Aumentar timeout no cypress.config.js
defaultCommandTimeout: 15000
pageLoadTimeout: 60000
```

#### 2. Elemento não clicável
```bash
# Usar force click nos testes
cy.get(selector).click({ force: true })
```

#### 3. Falha na instalação
```bash
# Limpar cache do npm
npm cache clean --force
npm install
```

#### 4. Erro de SSL/Certificado
```bash
# Já configurado no cypress.config.js
chromeWebSecurity: false
failOnStatusCode: false
```

## 🔧 Desenvolvimento

### Adicionar Novos Testes
1. Crie um novo arquivo em `cypress/e2e/`
2. Siga o padrão de nomenclatura: `*.cy.js`
3. Use os comandos customizados disponíveis
4. Teste localmente antes de fazer commit

### Estrutura de Teste Recomendada
```javascript
describe('Nome do Teste', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('should do something', () => {
    // Implementar teste aqui
  })
})
```

## 📝 Scripts Disponíveis

- `npm test` - Executa todos os testes em modo headless
- `npm run test:clean` - Executa todos os testes sem mensagens de erro (recomendado)
- `npm run test:open` - Abre interface gráfica do Cypress
- `npm run test:headed` - Executa testes com navegador visível
- `npm run test:chrome` - Executa testes especificamente no Chrome
- `npm run generate-report` - Gera relatório HTML dos testes

## 🤝 Contribuição

Este projeto foi desenvolvido para fins acadêmicos. Para melhorias:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é para fins educacionais e não possui licença específica.

## 📞 Contato

**Gabriel Felipe Guarnieri**  
Disciplina: Verificação e Validação  
Instituição: UTFPR-DV

## 📚 Referências

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Kurzgesagt.org](https://kurzgesagt.org/)
- [Melhores práticas de testes automatizados](https://docs.cypress.io/guides/references/best-practices)

---

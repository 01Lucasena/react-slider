# React Infinite Carousel

Um carrossel de produtos responsivo e interativo desenvolvido com React, que exibe itens de forma infinita com transições suaves.

![Carrossel de Produtos](src/assets/images/tenis.png)

## 🚀 Funcionalidades

- **Carrossel Infinito**: Navegação contínua em loop
- **Responsivo**: Se adapta a diferentes tamanhos de tela
- **Toques de Efeito Hover**: Interatividade ao passar o mouse
- **Navegação por Botões**: Controles de próximo e anterior
- **Modal de Detalhes**: Exibe informações detalhadas do produto
- **Animações Suaves**: Transições fluidas entre os itens

## 🛠️ Tecnologias Utilizadas

- React 19
- React Icons
- CSS puro para estilização
- Design responsivo com media queries

## 📦 Estrutura do Projeto

```
src/
├── App.js          # Componente principal do carrossel
├── App.css         # Estilos do carrossel
├── assets/         # Imagens e recursos
└── index.js        # Ponto de entrada da aplicação
```

## 🚀 Como Executar

1. **Pré-requisitos**:

   - Node.js (versão 14 ou superior)
   - npm ou yarn
2. **Instalação**:

   ```bash
   # Clone o repositório
   git clone https://github.com/seu-usuario/react-carousel.git

   # Acesse a pasta do projeto
   cd react-carousel

   # Instale as dependências
   npm install
   # ou
   yarn install
   ```
3. **Iniciar o servidor de desenvolvimento**:

   ```bash
   npm start
   # ou
   yarn start
   ```

   A aplicação estará disponível em `http://localhost:3000`
4. **Construir para produção**:

   ```bash
   npm run build
   # ou
   yarn build
   ```

## 🎨 Personalização

### Adicionar Novos Itens

Para adicionar novos itens ao carrossel, edite o array `cardData` no arquivo `src/App.js`:

```javascript
const cardData = [
  {
    id: 1,
    title: 'Nome do Produto',
    preco: 'R$ 0,00',
    description: 'Descrição do produto',
    imgUrl: 'caminho/para/imagem.jpg'
  },
  // ... outros itens
]
```

### Estilização

Os estilos podem ser personalizados no arquivo `src/App.css`. O carrossel é totalmente responsivo e se ajusta automaticamente a diferentes tamanhos de tela.

## 📱 Responsividade

O carrossel se adapta a diferentes tamanhos de tela:

- Até 400px: 1 card visível
- 401px a 600px: 1 card visível (largura maior)
- 601px a 900px: 2 cards visíveis
- Acima de 900px: 4 cards visíveis

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Lucas Sena - <a href="https://lucasenaportifolio.netlify.app/" target="_blank">Acesse Meu Portfólio</a>

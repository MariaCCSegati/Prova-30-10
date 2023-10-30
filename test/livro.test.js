import Livro from "../livro.js"
import Autor from "../autor.js"
import Editora from "../editora.js"

describe ('testes de livros', () => {
    it('deve inicializar vazio', () => {
        const livro = new Livro();
        expect(livro.nome).toBeNull();
        expect(livro.valor).toBeNull();
        expect(livro.desconto).toBeNull();
        expect(livro.total).toBeNull();
    });

    it('deve ter autor', () => {
        const autor1 = new Autor('J. R. R. Tolkien', 'Britânico');
        const livro = new Livro();
        livro.adicionaAutor(autor1);
        expect(typeof livro).toBe('object');
        expect(livro.autor[0]).toBe(autor1);
        expect(livro.autor).toContain(autor1);
    });

    it('deve ter editora', () => {
        const editora1 = new Editora('Martins Fontes', 'Rio de Janeiro', 'fontes@gmail.com');
        const livro = new Livro();
        livro.adicionaEditora(editora1);
        expect(typeof livro).toBe('object');
        expect(livro.editora[0]).toBe(editora1);
        expect(livro.editora).toContain(editora1);
    });

    it('Deve ter a propriedade "total" na inicialização', () => {
        const livro = new Livro();
    
        expect(livro).toHaveProperty('total');
    });
    
    it('Deve adicionar o desconto', () => {
        const livro = new Livro();
        livro.adicionaDesconto(10);
        expect(livro.desconto).toBe(10);
    });

    it('Deve lançar erro ', () => {
        function englobaErroLivro() {
          const livro = new Livro();
          livro.calculaTotal();
        }
    
        expect(englobaErroLivro).toThrowError();
     
      });    

    it('Deve calcular total', () => {
        const autor1 = new Autor('J. R. R. Tolkien', 'Britânico');
        const editora2 = new Editora('Martins Fontes', 'Rio de Janeiro', 'fontes@gmail.com');
    
        const livro = new Livro();
        livro.adicionaAutor(autor1);
        livro.adicionaEditora(editora2);
        livro.adicionaDesconto(10);
        livro.adicionaNome('O Senhor dos Anéis')
        livro.adicionaValor(46)
        livro.calculaTotal();
    
        expect(livro.total).toBeCloseTo(41.4);
      });

})
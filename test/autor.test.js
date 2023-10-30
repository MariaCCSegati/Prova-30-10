import Autor from "../autor.js"

describe ('testes de autores', () => {
    it('deve inicializar vazio', () => {
        const autor = new Autor();
        expect(autor.nome).toBeNull();
        expect(autor.nacionalidade).toBeNull();
    });

})

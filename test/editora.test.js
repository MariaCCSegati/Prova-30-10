import Editora from "../editora.js"

describe ('testes de editora', () => {
    it('deve inicializar vazio', () => {
        const editora = new Editora();
        expect(editora.nome).toBeNull();
        expect(editora.cidade).toBeNull();
        expect(editora.email).toBeNull();
    });

})
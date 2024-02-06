const homeScreen = require("../screens/home.screen");

describe('Acessar o painel da EBAC', () => {

it('Logar com sucesso', async () => {
    await homeScreen.goToLogin()

});

})
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Coca', 'pizza')).toEqual(expect.arrayContaining([
      {
        name: 'Coca',
        details: {
          productId: `Coca123`,
        },
      },
      {
        name: 'pizza',
        details: {
          productId: `pizza123`,
        },
      },
    ]));
  });
  it('Teste se productDetails é uma função.',() =>{
   expect(typeof productDetails).toBe('function')
  });
    // Teste se o retorno da função é um array.
  it('Teste se o retorno da função é um array.',() =>{
    expect(Array.isArray(productDetails())).toBeTruthy()
  }); 
   // Teste se o array retornado pela função contém dois itens dentro.
  it('Teste se o array retornado pela função contém dois itens dentro.',() =>{
    expect(productDetails('coca', 'pizza')).toHaveLength(2)
  });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Teste se os dois itens dentro do array retornado pela função são objetos.',() =>{
    expect(typeof productDetails('coca', 'pizza')[0]).toBe('object')
  });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.',() =>{
    expect(productDetails('coca', 'pizza')[0].name === productDetails('coca', 'pizza')[0].name).toBeFalsy
  });
    // Teste se os dois productIds terminam com 123
  it('Teste se os dois productIds terminam com 123',() =>{
    const produto = productDetails('coca','pizza')[0].details.productId
    const verifica = produto.substring(produto.length -3)
    expect(verifica).toBeTruthy()
  });
});

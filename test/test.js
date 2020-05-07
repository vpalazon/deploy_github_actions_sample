var assert = require("assert")
describe('Ejemplo de test', function(){
  it('Comprobar si un array tiene los elementos indicados.', function(){
    assert.equal(1, [1,2,3].indexOf(2));
    assert.equal(-1, [1,2,3].indexOf(0));
  })
})

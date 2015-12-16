if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function() {
    let competencia = new Competencia({ descripcion: "NOS CONECTAMOS CON EL CLIENTE" });
    describe("competencia", function(){
      it("la competencia por defecto debería estar activa", function(){
        chai.assert.equal(undefined, competencia.inactivo);
      });
      it("debería inactivar la competencia", function() {
        competencia.inactivar();
        chai.assert.equal(true, competencia.inactivo);
      });
    });
  });
}

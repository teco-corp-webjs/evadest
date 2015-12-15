TecoEntity = class TecoEntity {

  constructor() {

  }

  inactivar() {
    this.inactivo = true;
  }

  bindProperties(json) {
    json.forEach(propiedad => {
        this[propiedad] = json[propiedad];
    });
  }

}

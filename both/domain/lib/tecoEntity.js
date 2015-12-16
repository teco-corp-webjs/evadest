TecoEntity = class TecoEntity {

  constructor() {

  }

  inactivar() {
    this.inactivo = true;
  }

  bindProperties(json) {
    for (var propiedad in json) {
        if (json.hasOwnProperty(propiedad)) {
            this[propiedad] = json[propiedad];
        }
    }
  }

}

/** Representa la competencia de un empleado para realizar una actividad */
Competencia = class Competencia extends TecoEntity {
  constructor(json) {
    super();
    this.descripcion = "";
    if (json !== undefined) {
      this.bindProperties(json);
    }
  }
}

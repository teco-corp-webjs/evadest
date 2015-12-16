/** Representa la competencia de un empleado para realizar una actividad */
Escala = class Escala extends TecoEntity {
  
  constructor(json) {
    super();
    this.descripcion = "";
    this.valor = 0.0;
    this.icono = null;
    this.bindProperties(json);
  }

}

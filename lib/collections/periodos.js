Periodos = new Mongo.Collection("periodos");

var Schemas = {};

Schemas.Periodos = new SimpleSchema({
    descripcion: {
        type: String,
        label: "Descripción del período"
    },
    fechaDesde: {
        type: Date,
        label: "Fecha desde"
    },
    fechaHasta: {
        type: Date,
        label: "Fecha hasta",
    },
    inactivo: {
        type: Boolean,
        label: "Inactivo",
        defaultValue: false
    }
});

Periodos.attachSchema(Schemas.Periodos);

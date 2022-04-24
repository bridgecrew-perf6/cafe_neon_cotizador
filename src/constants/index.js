export const MARCAS = [
    { id: 1, nombre: "Juan Valdez"},
    { id: 2, nombre: "Lucaffe"},
    { id: 3, nombre: "Kenia"},
]

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
    new Array(20),
    (valor, index) => YEARMAX - index
);

export const PLANES = [
    { id: 1, nombre: "Al Mayor"},
    { id: 2, nombre: "Al detalle"},
    
]


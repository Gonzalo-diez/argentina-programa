export class experiencia {
    id?: number;
    experienciaNombre: string;
    experienciaDesde: string;
    experienciaHasta: string;

    constructor(experienciaNombre: string, experienciaDesde: string, experienciaHasta: string) {
        this.experienciaNombre = experienciaNombre;
        this.experienciaDesde = experienciaDesde;
        this.experienciaHasta = experienciaHasta; 
    }
}
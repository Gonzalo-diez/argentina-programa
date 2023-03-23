export class habilidadesduras {
    id?: number;
    habilidadDuraNombre: string;
    porcentajeHD: number;

    constructor(habilidadDuraNombre: string, porcentajeHD: number) {
        this.habilidadDuraNombre = habilidadDuraNombre;
        this.porcentajeHD = porcentajeHD;
    }
}
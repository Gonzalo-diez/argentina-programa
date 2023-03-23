export class habilidadesblandas {
    id?: number;
    habilidadBlandaNombre: string;
    porcentajeHB: number;

    constructor(habilidadBlandaNombre: string, porcentajeHB: number) {
        this.habilidadBlandaNombre = habilidadBlandaNombre;
        this.porcentajeHB = porcentajeHB;
    }
}
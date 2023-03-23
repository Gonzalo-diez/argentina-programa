export class trabajos {
    id?: number;
    trabajoTitulo: string;
    trabajoImg: string;
    trabajoUrl: string;

    constructor(trabajaoTitulo: string, trabajoImg: string, trabajoUrl: string) {
        this.trabajoTitulo = trabajaoTitulo;
        this.trabajoImg = trabajoImg;
        this.trabajoUrl = trabajoUrl;
    }
}
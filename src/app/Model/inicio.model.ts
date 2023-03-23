export class inicio {
    id?: number;
    inicioNombre: string;
    inicioLinkUrl: string;
    inicioGitUrl: string;
    inicioImg: string;
    inicioTexto: string;

    constructor(inicioNombre: string, inicioLinkUrl: string, inicioGitUrl: string, inicioImg: string, inicioTexto: string) {
        this.inicioNombre = inicioNombre;
        this.inicioLinkUrl = inicioLinkUrl;
        this.inicioGitUrl = inicioGitUrl;
        this.inicioImg = inicioImg;
        this.inicioTexto = inicioTexto;
    }
}
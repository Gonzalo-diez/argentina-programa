export class footer {
    id?: Number;
    footerNombre: String;
    footerLinkUrl: String;
    footerInstagramUrl: String;

    constructor(footerNombre: String, footerLinkUrl: String, footerInstagramUrl: String) {
        this.footerNombre = footerNombre;
        this.footerLinkUrl = footerLinkUrl;
        this.footerInstagramUrl = footerInstagramUrl;
    }
}
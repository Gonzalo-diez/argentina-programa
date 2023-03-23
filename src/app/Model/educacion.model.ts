export class educacion {
    id?: number;
    educacionTitulo: string;
    educacionImg: string;
    educacionUrl: string;

    constructor(educacionTitulo: string, educacionImg: string, educacionUrl: string) {
        this.educacionTitulo = educacionTitulo;
        this.educacionImg = educacionImg;
        this.educacionUrl = educacionUrl; 
    }
}
export class curriculum {
    id?: Number;
    curriculumDescarga: string;
    curriculumImg: string;
    
    constructor(curriculumDescarga: string, curriculumImg: string) {
        this.curriculumDescarga = curriculumDescarga;
        this.curriculumImg = curriculumImg;
    }
}
import { Injectable } from "@angular/core";
import { Ng2ImgMaxService } from "ng2-img-max";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ImageResizerService {

    constructor(private ng2ImgMax: Ng2ImgMaxService) {
    }

    public resizeImage(inputImage: File, maxWidth: number, maxHeight: number): Observable<File> {
        return this.ng2ImgMax.resizeImage(inputImage, maxWidth, maxHeight);
    }
}

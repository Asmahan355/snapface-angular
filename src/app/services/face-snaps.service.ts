import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    private faceSnaps:FaceSnap[]=[new FaceSnap(
        'Archivale',
        "Mon meilleur ami depuis toujours",
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'Three Rock Mountain',
        "Un endroit magnifique pour les randonnées",
        'https://www.irishamerica.com/wp-content/uploads/2016/10/FEATURE-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ).withHashLocation('à la montagne'),
      new FaceSnap(
        'Un bon repas',
        "Mmmh que c\'est bon!",
        'https://www.francebleu.fr/s3/cruiser-production/2023/06/902c354f-fe4f-44b2-9218-f6b34e4a22e6/1200x680_sc_gettyimages-1438016630.jpg',
        new Date(),
        156
      )
  
    ];
    getFaceSnaps():FaceSnap[]{
        return[...this.faceSnaps]
    }
    snapFaceSnapById(faceSnapId:string,snapType:SnapType):void{
      const foundFaceSnap=this.faceSnaps.find(FaceSnap =>FaceSnap.id===faceSnapId);
   if(!foundFaceSnap)
   {
    throw new Error('FaceSnap not found!');
   }
  foundFaceSnap.snap(snapType);
    }
}
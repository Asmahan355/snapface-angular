import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  
  ngOnInit():void{
    this.mySnap=new FaceSnap(
      'Archivale',
      "Mon meilleur ami depuis toujours",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );
    this.myOtherSnap=new FaceSnap(
      'Three Rock Mountain',
      "Un endroit magnifique pour les randonnées",
      'https://www.irishamerica.com/wp-content/uploads/2016/10/FEATURE-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6
    );
    this.myLastSnap=new FaceSnap(
      'Un bon repas',
      "Mmmh que c\'est bon!",
      'https://www.francebleu.fr/s3/cruiser-production/2023/06/902c354f-fe4f-44b2-9218-f6b34e4a22e6/1200x680_sc_gettyimages-1438016630.jpg',
      new Date(),
      7
    );
  }

}

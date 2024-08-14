import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent  implements OnInit {
  @Input() imageSrc: string;
  constructor(private modalController: ModalController) { }
  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}

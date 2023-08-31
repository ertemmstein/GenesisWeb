import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  album: Array<any> = [];
  numberOfPhotos = 17; // assets/images/gallery/pilates/

  constructor(private _lightbox : Lightbox) { 

    for (let i = 1; i <= this.numberOfPhotos; i++) {
      const src   = 'assets/images/gallery/pilates/pilates' + i + '.jpg';
      const caption = '';
      const thumb = 'assets/images/gallery/pilates/thumbs/pilates' + i + '.jpg';
      const photo = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.album.push(photo);
      
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slidesOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
    
  };
  
  constructor( private barcodeScanner: BarcodeScanner,
               private dataLocarService: DataLocalService) {}

 /*  ciclos de vida de las vistas de ionic
    ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.scan();
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }*/

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if (!barcodeData.cancelled){
        this.dataLocarService.guardarRegistro( barcodeData.format, barcodeData.text   );
      }

     }).catch(err => {
         console.log('Error', err);

         this.dataLocarService.guardarRegistro( 'QRCode', 'https://fernando-herrera.com');
         //this.dataLocarService.guardarRegistro( 'QRCode', 'geo:40.73151796986687,-74.06087294062502');
         
     });
  }

}

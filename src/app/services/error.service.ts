import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(public toast: ToastController) {}
  
  public async presentToast() {
    const toast = await this.toast.create({
      message: 'an error occurred while downloading data',
      duration: 2000,
      position:'top'
    });
    toast.present();
  }
}

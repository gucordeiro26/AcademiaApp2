import { Component, OnInit } from '@angular/core';
import { ModalPopupLoginPage } from '../modal-popup-login/modal-popup-login.page';
import { ModalController } from '@ionic/angular';
import { ModalPopupCadastroPage } from '../modal-popup-cadastro/modal-popup-cadastro.page';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  // Modal Login
  modelData: any;
  constructor(public modalController: ModalController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  async openIonModalLogin() {
    const modal = await this.modalController.create({
      component: ModalPopupLoginPage,
      componentProps: {
        'model_title': "Nomadic model's reveberation  "
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

  // Modal Cadastro
  async openIonModalCadastro() {
    const modal = await this.modalController.create({
      component: ModalPopupCadastroPage,
      componentProps: {
        'model_title': "Nomadic model's reveberation"
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

}

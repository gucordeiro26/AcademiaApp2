import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-popup-cadastro',
  templateUrl: './modal-popup-cadastro.page.html',
  styleUrls: ['./modal-popup-cadastro.page.scss'],
})
export class ModalPopupCadastroPage implements OnInit {

  @Input() model_title: any;
  constructor(
    private modalController: ModalController,
  ) { }
  ngOnInit() { }
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-popup-login',
  templateUrl: './modal-popup-login.page.html',
  styleUrls: ['./modal-popup-login.page.scss'],
})
export class ModalPopupLoginPage implements OnInit {

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

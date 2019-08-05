import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  title;subject;body;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController) {
    
  let data= this.navParams.get("key");
    this.body=data.body;
    this.title=data.title;
    this.subject=data.sub;
  }
  closeModal(){
    this.viewctrl.dismiss();
  }

 
}

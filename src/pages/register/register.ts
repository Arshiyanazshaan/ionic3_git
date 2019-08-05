import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fname; lname; email; pass; repass;ff=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private st: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  open(pageName) {
    this.navCtrl.setRoot(pageName);
  }
  pop(){
    this.navCtrl.pop();
  }
  register() {
    this.st.get("reg").then((Value)=>{
      if(Value){

        this.ff=Value;
        console.log(Value)
      let d = {
        "fname": this.fname,
        "lname": this.lname,
        "email": this.email,
        "pass": this.pass,
        "repass": this.repass,
      };
      this.ff.push(d);
      this.st.set("reg", this.ff); 
    }else{
      let d = {
        "fname": this.fname,
        "lname": this.lname,
        "email": this.email,
        "pass": this.pass,
        "repass": this.repass,
      }; 
      this.ff.push(d);
      this.st.set("reg", this.ff);
    }
    })
    
    this.navCtrl.push('DashboardPage');
  }
}

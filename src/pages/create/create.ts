import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { ToastController } from '@ionic-native/toast/ngx';
/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  title; body; subject; data; arr = [];userkey:any;userarr;
  constructor(public navCtrl: NavController, public navParams: NavParams, private event: Events, private st: Storage, ) {
    this.event.subscribe('even', () => {
      this.post();
    });
   /*  this.userkey=this.navParams.get("user");
    console.log("constry",this.userkey); */
    this.userkey=this.st.get("user").then((reg) => {
      this.userarr=reg;
      console.log("userarr",this.userarr)
     })

  }


  post() {
    this.st.get("create").then((val) => {
    
      console.log(val)
      if (val) {
       
        this.arr = val;
        let d = {
          "title": this.title,
          "body": this.body,
          "sub": this.subject,
          "userkey": this.userarr
        };
        console.log("data", d)
        this.arr.push(d);
        this.st.set("create", this.arr);
        // toast.present();
      }
      else {
        let d = {
          "title": this.title,
          "body": this.body,
          "sub": this.subject,
          "userkey": this.userarr
        };
        //if(this.title==
        this.arr.push(d);
        this.st.set("create", this.arr);
        // toast.present();
      }
    }, (error) => {
      let d = {
        "title": this.title,
        "body": this.body,
        "sub": this.subject,
        "userkey": this.userarr
      };
      this.arr.push(d);
      this.st.set("create", this.arr);

    })

    //   this.st.set("create",d);
    /*   let toast = this.toast.create({
        message: 'Post Created',
        duration: 4000
      }); */
    this.navCtrl.push('DashboardPage');

  }

}

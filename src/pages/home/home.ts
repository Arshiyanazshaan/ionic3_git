import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { copyInputAttributes } from 'ionic-angular/umd/util/dom';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arr=[];
  user;
  pass;
  constructor(public navCtrl: NavController, private st: Storage) {

  }
  open(pageName){
    this.navCtrl.push(pageName);
  }
  signIn(){
    //this.open('DashboardPage');
    this.st.get("reg").then((Value) => {
      console.log("here",Value)
      this.arr=Value.filter((val)=>{
        return val.fname==this.user && val.pass==this.pass;
      });

      if(this.arr.length>0){
        this.navCtrl.push('DashboardPage',{
          "user":this.user
        })
      }
      console.log("Output",this.user);
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  items: any;
  fname;
  new = [];
  name; body; subject; title;
  userverify;
  newarr = [];
  item: any;
  /*   items=[
      {title:'Post1', subject:'About Post1' , body:'This is the Post1 body'},
      {title:'Post2', subject:'About Post2' , body:'This is the Post2 body'},
      {title:'Post3', subject:'About Post3' , body:'This is the Post3 body'}
    ]; */
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private st: Storage,
    private modal: ModalController) {


    this.userverify = this.navParams.get("user");
    console.log("userverify", this.userverify);


    this.st.get("create").then((Valsue) => {

      console.log("green", Valsue);
      if(Valsue){
      this.items=Valsue.filter((val) => {
        return val.userkey==this.userverify;
      });
    }
    });

  }

  open(pageName) {
    this.navCtrl.push(pageName);
  }
  update(item) {
    /*  this.navCtrl.push('UpdatePage',{
       "update" : item
     }); */
    // let d=this.st.set("update",item);
    console.log("error", item);
    this.navCtrl.push('UpdatePage', {

      "items": item
    });

  }
  delete(item) {
    this.st.get("create").then((Value) => {
      console.log("delete", Value);
      console.log("del", item);

      for(let x of Value){
          if(x.title != item.title){
            this.new.push(x);
            console.log("x",x);
           
          }
       } 


    /*   for(let i=0; i<Value.length; i++){
        if(Value[i].title==item.title){
          Value.splice(i,1);
        }
      } */

      this.st.set("create", this.new);
      console.log("newone", this.new);
    })
  }
  modcreate(item) {

    //let item={"title":this.title}
    const mymodal = this.modal.create('ModalPage', {
      "key": item
    });
    mymodal.present();
  }
  /*   doRefresh(event) {
    
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    } */
}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  title;subject;body;
  ff;
  result;
  constructor(public navCtrl: NavController, public navParams: NavParams, private st: Storage) {
    this.result=this.navParams.get("items");
    console.log("ahdfhadf",this.result);

  }
  update(){
  /*   let data=this.navParams.get("update");
    console.log(data);
    this.title=data.title;
    this.body=data.body;
    this.subject=data.sub; */
   
  this.st.get("create").then((data) =>{
    
    for(let x of data){

      if(x.title==this.result.title){
        x.title=this.title;
        x.sub=this.subject;
     }
    }
    this.st.set("create",data);
    
    
    
    
    // this.ff=data.filter((val) => {
    //     return this.result.title==val.title;
    // });
  
    // this.ff[0]['title']=this.title;
    // this.ff[0]['sub']=this.subject;



    // console.log("Final result",this.ff);

  /*  this.st.get("create").then((val) =>{
      console.log("create",val)
      for(let i of val){
      if(data.title == i.title && data.sub==i.sub && data.body==i.body){
        val.title.push(this.title);
        val.sub=this.subject;
        val.body=this.body;
        console.log("title",val.title)
      }
    } 
  
      //this.st.set("create",data);
    })  */
    //this.st.set("update",data);
    });
    this.navCtrl.push('DashboardPage');
  }

}

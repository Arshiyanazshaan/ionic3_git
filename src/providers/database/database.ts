import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

export interface Item {
 
  title: string,
  body: string,
  subject: string
}

@Injectable()
export class DatabaseProvider {
  private db:SQLiteObject;
 

  constructor(public http: HttpClient, public sqlite:SQLite,public st:Storage) {
   
     
  }


  
  
/*   createDatabase(){
    this.sqlite.create({ name: "data.db" , location:"default" }).then((db:SQLiteObject) => {
      this.db = db;
      this.createTable();
    }
  }
 
 createTable() {
    return new Promise((resolve, reject) => {
      this.db.open().then((res) => {
        let query = 'create table if not exists user (name text, age text)';
        this.db.executeSql(query , []) .then ((res) =>{
          resolve(res);
        }).catch((err) => {
          console.log(err);
          reject(err);
        })
      });
    })
} */
}
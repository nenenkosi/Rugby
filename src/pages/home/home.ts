import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {ScorePage } from '../score/score'
import arr from '../../app/arr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,public alertCtrl: AlertController,) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  
  }

  nxt(Home,Away){

  arr[0] = Home;
  arr[1] = Away;
  console.log(arr);
  this.navCtrl.push(ScorePage);


      
  }

 
}

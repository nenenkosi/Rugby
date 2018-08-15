import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arr from '../../app/arr';
import { HomePage } from '../home/home';



/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

team;
Hscore = 0;
Ascore = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }
 
   home2=arr[0]; 
   away2=arr[1];
  test = arr;
  
hme(num){
  this.team=num;
}
Try (){
  if(this.team==1){
    this.Hscore+=5
  }
  else{
    this.Ascore+=5
  }
}
  Penalty (){
  if(this.team==1){
    this.Hscore+=3
  }
  else{
    this.Ascore+=3
  }  
}
Conversion (){
  if(this.team==1){
    this.Hscore+=2
  }
  else{
    this.Ascore+=2
  }
}
undotry (){
  if(this.team==1){
    this.Hscore-=5;
    if(this.Hscore<0)
    this.Hscore=0
  }
  else{
    this.Ascore-=5
    if(this.Ascore<0)
    this.Ascore=0
  }
}
undoPenalty (){
  if(this.team==1){
    this.Hscore-=3;
    if(this.Hscore<0)
    this.Hscore=0
  }
  else{
    this.Ascore-=3
    if(this.Ascore<0)
    this.Ascore=0
  }  
}
undoConversion (){
  if(this.team==1){
    this.Hscore-=2
    if(this.Hscore<0)
    this.Hscore=0
  }
  else{
    this.Ascore-=2
    if(this.Ascore<0)
    this.Ascore=0
  }
}
Reset(){
  this.test=[];
  this.team=0;
  this.navCtrl.push(HomePage)}

}

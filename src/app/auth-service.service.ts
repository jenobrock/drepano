import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) {

   }
   //cretion d'utilisateur ou SignUp
   createUser(email: string, password: string,username: string){

  //  return this.httpClient.post('https://us-central1-drepano-test.cloudfunctions.net/create_use_actif.json',{
  //     email:email,
  //     password:password,
  //     username:username
  //   }).subscribe(()=>{
  //     console.log("Enregistré")
  //         });
   }

   //SignIn
   signUser(email: string, password:string){
     return new Promise(
       (resolve,reject)=>{
         firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();
          },
          (error)=>{
            reject(error);
          }

         );
       }
     )
   }

//Deconnexion ou SignOut
signOutUser(){
  firebase.auth().signOut();
}

}

import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyC5lRxDRDTco-dY9FLGGNIAK7JahERcBuk",
      authDomain: "fir-functions-5cfdc.firebaseapp.com",
      databaseURL: "https://fir-functions-5cfdc.firebaseio.com",
      projectId: "fir-functions-5cfdc",
      storageBucket: "fir-functions-5cfdc.appspot.com",
      messagingSenderId: "396655171009",
      appId: "1:396655171009:web:55511824821ed634ef0b40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}

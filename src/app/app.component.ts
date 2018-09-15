import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tesisEpnRadiacion';
  items: Observable<any[]>;
  items2: Observable<any[]>;
  constructor(db: AngularFirestore) {
    console.log("holoooal firebase");
    this.items = db.collection('users').valueChanges();
    console.log(this.items[1]);
  }
}

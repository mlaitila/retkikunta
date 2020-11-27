import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fireDB: AngularFirestore
  ) { }

  public getRetkikunnat(){
    return new Promise<any>((resolve, reject) => {
      this.fireDB.collection('/retkikunnat').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  public getAdventurersForRetkikunta(retkikuntaId) {
    let userDoc = this.fireDB.firestore.collection(`retkikunnat`);
    userDoc.get().then((querySnapshot) => { 
       querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());  
       })
    })
  }

  public test2(retkikuntaId) {
    let userDoc = this.fireDB.firestore.collection("/retkikunnat/ElccJgLfi1YEt4v04mzn/adventurer");
    userDoc.get().then((querySnapshot) => { 
       querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());  
       })
    })
  }

  //pittääpi varmaa heittää miehistön jäsenet omana collectioonina
  public addNewretkikunta(retkikunta) {
    this.fireDB.collection('/retkikunnat').add(
      retkikunta
    )
    .then(function(docRef) {
      console.log("great success! New retkikunta added wit ID: ", docRef.id);
      return docRef;
    }).catch(function(error) {
      console.log("epic fail! Adding new retkikunta failed: ", error)
      return error;
    })
  }

  public deleteRetkikunta(retkikuntaId) {
    console.log("Lets start delete: ", retkikuntaId)
    this.fireDB.collection("/retkikunnat").doc(retkikuntaId).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.log("Error removing document: ", error);
    });
  }

  /*
db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
  */

}

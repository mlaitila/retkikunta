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

  public addNewRetkikunta(retkikunta) {
    console.log("Lykkäåä retkikunta firebasee!")
    console.log(retkikunta);
    this.fireDB.collection("retkikunnat").add(
      retkikunta
    )
    .then(function(docRef) {
      console.log("great success ID: ", docRef);
    })
    .catch(function(error) {
      console.log("error adding new retkikunta: ", error);
    })
  }
}
/*
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});



  /*
  db.collection("cities").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
  */

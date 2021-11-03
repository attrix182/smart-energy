import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class storageService {

  constructor(private cloudFireStore: AngularFirestore,
    private storage: AngularFireStorage) { }

  Insert(collectionName: string, data: any) {
    return this.cloudFireStore.collection(collectionName).add(data);
  }

  ReturnFirestore(){
    return this.cloudFireStore
  }

  InsertCustomID(collectionName: string, idCustom: any, data: any) {
    return this.cloudFireStore.collection(collectionName).doc(idCustom).set(data);
  }

  GetAll(collectionName: string) {
    return this.cloudFireStore.collection(collectionName).snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data: any = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        }))
    );
  }
  GetByParameter(collection:string, parametro:string, value:any){
    return this.cloudFireStore.collection<any>(collection, ref => ref.where(parametro,'==', value));
  }
  
  Update(id: string, collectionName: string, data: any) {
    return this.cloudFireStore.collection(collectionName).doc(id).update({ ...data });
  }
}
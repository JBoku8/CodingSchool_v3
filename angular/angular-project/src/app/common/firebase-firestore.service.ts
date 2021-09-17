import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ITodo } from '../todo/shared/todo';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFirestoreService {
  private todoCollection: AngularFirestoreCollection<ITodo>;

  constructor(private fireStore: AngularFirestore) {
    this.todoCollection = fireStore.collection<ITodo>('todoCollection');
  }

  findAll<T>(collectionName: string): Observable<T[]> {
    return this.fireStore.collection<T>(collectionName).valueChanges();
  }

  addTodoItem(newItem: ITodo) {
    this.todoCollection.add(newItem);
  }
}

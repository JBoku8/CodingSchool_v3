import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '../common/common.data';
import { FirebaseFirestoreService } from '../common/firebase-firestore.service';
import { JsonPlaceholderService } from '../common/json-placeholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  cachedPosts: IPost[] = [];
  loading: boolean = true;

  private _searchTerm: string = '';

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filterPosts();
  }

  constructor(
    private jsonPlaceHolderService: JsonPlaceholderService,
    private fireStore: FirebaseFirestoreService
  ) {}

  ngOnInit(): void {
    // this.loadData();
    this.fireStore.findAll('todoCollection').subscribe((data) => {
      console.log(data);
      this.loading = false;
    });
  }

  async loadData() {
    this.jsonPlaceHolderService.getPostsObservable().subscribe((data) => {
      this.posts = data;
      this.cachedPosts = [...this.posts];
      this.loading = false;
    });
  }

  filterPosts() {
    if (this.searchTerm.length > 2) {
      this.posts = this.cachedPosts.filter((p) =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // this.loadData();
      this.posts = [...this.cachedPosts];
    }
  }

  onPostItemClick(item: IPost) {
    console.group('onPostItemClick');
    console.log('Id:', item.id);
    console.log('User Id:', item.userId);
    console.log('Title:', item.title);
    console.log('Body:', item.body);
    console.groupEnd();
  }

  onFakePost() {
    this.jsonPlaceHolderService.fakePost().subscribe((d) => {
      console.log(d);
    });
  }

  onSubmit() {
    this.filterPosts();
  }

  ngOnDestroy(): void {
    console.log('HOME COMPONENT ngOnDestroy');
  }
}

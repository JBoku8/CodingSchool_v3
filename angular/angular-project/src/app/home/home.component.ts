import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '../common/common.data';
import { JsonPlaceholderService } from '../common/json-placeholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  posts: IPost[] = [];
  constructor(private jsonPlaceHolderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.posts = await this.jsonPlaceHolderService.getPosts();
    this.loading = false;
  }

  onPostItemClick(item: IPost) {
    console.group('onPostItemClick');
    console.log('Id:', item.id);
    console.log('User Id:', item.userId);
    console.log('Title:', item.title);
    console.log('Body:', item.body);
    console.groupEnd();
  }

  ngOnDestroy(): void {
    console.log('HOME COMPONENT ngOnDestroy');
  }
}

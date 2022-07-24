import { Component, OnInit } from '@angular/core';
import { PostStoreService } from '../../shared/services/post-store.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  posts$ : Observable<Post[]> | null = null;
  constructor(private serv:PostStoreService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }

}

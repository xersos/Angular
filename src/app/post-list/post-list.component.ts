import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}

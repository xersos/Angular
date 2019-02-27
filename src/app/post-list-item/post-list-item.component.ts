import {Component, OnInit, Input} from '@angular/core';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
    @Input() title = this;
    @Input() content = this;
    @Input() date = this;
    @Input() likes = this;
    @Input() index: number;

    like(i) {
        this.likes = i + 1;
    }

    dislike(i) {
        // @ts-ignore
        this.likes = i - 1;
    }

    deletePost(index) {
        this.postService.deletePost(index);
    }

    constructor(private postService: PostService, private router: Router) {
    }

    ngOnInit() {
    }

}

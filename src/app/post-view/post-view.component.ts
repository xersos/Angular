import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
    posts: any[];
    postSubscription: Subscription;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postSubscription = this.postService.postsSubject.subscribe((posts: any[]) => {
            this.posts = posts;
        });
        this.postService.emitPostSubject();
    }

}

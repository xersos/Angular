import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    titre = 'Openclassrooms Angular - Activité : Application de type blog';

    constructor(private postService: PostService) {
    }
    ngOnInit() {
    }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NewPostComponent} from './new-post/new-post.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {PostViewComponent} from './post-view/post-view.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
    {path: 'posts', component: PostViewComponent},
    {path: 'new', component: NewPostComponent},
    {path: '', component: PostViewComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        NavBarComponent,
        NewPostComponent,
        PostViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

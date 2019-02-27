import {Subject} from 'rxjs';

export class PostService {
    postsSubject = new Subject<any[]>();
    posts = [
        {
            title: 'Premier post',
            content: 'Lorem ipsum dolor sit amet...',
            loveIts: -2,
            created_at: new Date(2019, 1, 23)
        },
        {
            title: 'Deuxième post',
            content: 'Consectetur adipiscing elit...',
            loveIts: 0,
            created_at: new Date(2019, 1, 24)
        },
        {
            title: 'Troisième post',
            content: 'Sed do elusmod tempor incidunt ut labore et dolore...',
            loveIts: 3,
            created_at: new Date(2019, 1, 25)
        }
    ];

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    addPost(title: string, content: string) {
        const postObject = {
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        postObject.title = title;
        postObject.content = content;
        postObject.loveIts = 0;
        postObject.created_at = new Date();
        this.posts.push(postObject);
        this.emitPostSubject();
    }

    deletePost(index: number) {
        this.posts.splice(index, 0);
        alert('Le post intitulé "' + this.posts[index].title + '" a été supprimé !');
        location.reload();
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  posts = [ { title: 'Mon premier post',
              content : "Content premier post",
              loveIts : 5,
              created_at : new Date(2019, 6, 25)
            },
            { title: 'Mon second post',
              content : "Content second post",
              loveIts : -5,
              created_at : new Date(2019, 7, 10)
            },
            { title: 'Mon troisième post',
              content : "Content troisième post",
              loveIts : 10,
              created_at : new Date(2019, 8, 12)
            }
          ]
}

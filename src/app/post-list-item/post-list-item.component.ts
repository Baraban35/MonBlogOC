import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreatedAt;
  constructor() { }

  ngOnInit() {
  }
  onLoveIt() {
    this.postLoveIts++;
  }
  onDontLoveIt() {
    this.postLoveIts--;
  }

}

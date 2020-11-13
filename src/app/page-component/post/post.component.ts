import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../service/post-model";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: Array<PostModel> = [];
  faEdit = faEdit;
  faDelete = faTimesCircle;
  postAuthor: string;

  constructor() {
    if (localStorage.getItem('ngx-webstorage|username') != null) {
      this.postAuthor = localStorage.getItem('ngx-webstorage|username');
      this.postAuthor = this.postAuthor.substring(1, this.postAuthor.length - 1);
    }
  }

  ngOnInit(): void {
  }

  deletePost() {
    //TODO: implement delete
  }
}

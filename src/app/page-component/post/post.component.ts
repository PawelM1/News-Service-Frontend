import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../service/post-model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: Array<PostModel> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

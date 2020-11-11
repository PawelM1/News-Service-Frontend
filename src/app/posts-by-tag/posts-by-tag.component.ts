import {Component, OnInit} from '@angular/core';
import {PostModel} from "../service/post-model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-posts-by-tag',
  templateUrl: './posts-by-tag.component.html',
  styleUrls: ['./posts-by-tag.component.css']
})
export class PostsByTagComponent implements OnInit {

  tagName: string;
  posts: Array<PostModel> = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.tagName = this.activatedRoute.snapshot.params.tagName;

    this.postService.getAllPostsByTag(this.tagName).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}

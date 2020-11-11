import {Component, OnInit} from '@angular/core';
import {PostModel} from "../service/post-model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  name: string;
  posts: Array<PostModel> = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.name = this.activatedRoute.snapshot.params.username;

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}

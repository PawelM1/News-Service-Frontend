import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/service/post.service';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from 'src/app/service/post-model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  posts: Array<PostModel> = [];
  postLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.name = this.activatedRoute.snapshot.params.username;

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
  }

  ngOnInit(): void {
  }
}


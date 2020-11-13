import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/service/post.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  user: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    if(localStorage.getItem('ngx-webstorage|username') != null) {
      this.user = localStorage.getItem('ngx-webstorage|username');
      this.user = this.user.substring(1, this.user.length - 1);
    }
    this.name = this.activatedRoute.snapshot.params.username;
    if(this.name != this.user) this.router.navigateByUrl('/');

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
  }

  ngOnInit(): void {
  }
}


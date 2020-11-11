import {Component, OnInit} from '@angular/core';
import {faPenSquare} from "@fortawesome/free-solid-svg-icons/faPenSquare";
import {Router} from "@angular/router";
import {PostService} from "../service/post.service";
import {PostModel} from "../service/post-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faPenSquare = faPenSquare;
  posts: Array<PostModel> = [];

  constructor(private router: Router, private postService :PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }

  goToCreatePost(){
    this.router.navigateByUrl('/create-post');
  }
}

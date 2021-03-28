import {Component, OnInit} from '@angular/core';
import {faPenSquare} from '@fortawesome/free-solid-svg-icons/faPenSquare';
import {Router} from '@angular/router';
import {PostService} from '../service/post.service';
import {PostModel} from '../service/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faPenSquare = faPenSquare;
  posts: Array<PostModel> = [];
  loading = false;

  constructor(private router: Router, private postService: PostService) {
    this.loading = true;

    this.postService.getAllPosts().subscribe({
      next: (post) => { this.posts = post; },
      error: () => {alert('Failed to get data from the server.'); },
      complete: () => { this.loading = false; }
    });
  }

  ngOnInit(): void {
  }

  goToCreatePost(){
    this.router.navigateByUrl('/create-post');
  }

}

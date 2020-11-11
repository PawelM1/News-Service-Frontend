import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {CreatePostPayload} from "./create-post.payload";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../service/post.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  faWindowClose = faWindowClose;

  constructor(private router: Router, private postService: PostService) {
    this.postPayload = {
      title: '',
      news_url: '',
      imageUrl: '',
      content: '',
      tag: ''
    }
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),
      news_url: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  createPost(){
    this.postPayload.title = this.createPostForm.get('title').value;
    this.postPayload.tag = this.createPostForm.get('tag').value;
    this.postPayload.news_url = this.createPostForm.get('news_url').value;
    this.postPayload.imageUrl = this.createPostForm.get('imageUrl').value;
    this.postPayload.content = this.createPostForm.get('content').value;

    this.postService.createPost(this.postPayload).subscribe(() => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}

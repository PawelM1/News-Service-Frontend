import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../service/post.service";
import {throwError} from "rxjs";
import {CreatePostPayload} from "../create-post/create-post.payload";

@Component({
  selector: 'app-patch-post',
  templateUrl: './patch-post.component.html',
  styleUrls: ['./patch-post.component.css']
})
export class PatchPostComponent implements OnInit {

  postId: number;
  editPostForm: FormGroup;
  postPayload: CreatePostPayload;
  faWindowClose = faWindowClose;
  postAuthor: string;

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    if (localStorage.getItem('ngx-webstorage|username') != null) {
      this.postAuthor = localStorage.getItem('ngx-webstorage|username');
      this.postAuthor = this.postAuthor.substring(1, this.postAuthor.length - 1);
    }

    this.postId = this.activatedRoute.snapshot.params.id;
    this.postPayload = {
      title: '',
      news_url: '',
      imageUrl: '',
      content: '',
      tag: ''
    }
  }

  ngOnInit(): void {
    this.editPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),
      news_url: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });

    this.postService.getPost(this.postId).subscribe(data => {
      if (data.author != this.postAuthor) this.router.navigateByUrl('/');

      this.editPostForm.patchValue({
        title: data.title,
        tag: data.tag,
        news_url: data.url,
        imageUrl: data.newsImage,
        content: data.content
      });
    });
  }

  patchPost() {
    this.postPayload.title = this.editPostForm.get('title').value;
    this.postPayload.tag = this.editPostForm.get('tag').value;
    this.postPayload.news_url = this.editPostForm.get('news_url').value;
    this.postPayload.imageUrl = this.editPostForm.get('imageUrl').value;
    this.postPayload.content = this.editPostForm.get('content').value;

    this.postService.patchPost(this.postId, this.postPayload).subscribe(() => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}

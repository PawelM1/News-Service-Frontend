import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "./post-model";
import {CreatePostPayload} from "../post/create-post/create-post.payload";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>('https://news-servvice.herokuapp.com/api/posts/')
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('https://news-servvice.herokuapp.com/api/posts/', postPayload);
  }

  getAllPostsByUser(username: string) {
    return this.http.get<Array<PostModel>>('https://news-servvice.herokuapp.com/api/posts/user/' + username);
  }

  getAllPostsByTag(tagName: string){
    return this.http.get<Array<PostModel>>('https://news-servvice.herokuapp.com/api/posts/tag/' + tagName);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('https://news-servvice.herokuapp.com/api/posts/' + id);
  }

  patchPost(id: number, postPayload: CreatePostPayload) {
    return this.http.patch('https://news-servvice.herokuapp.com/api/posts/' + id, postPayload);
  }

  deletePost(id: number) {
    return this.http.delete('https://news-servvice.herokuapp.com/api/posts/' + id);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {PostModel} from "../../service/post-model";
import {VotePayload} from "../../service/vote-payload";
import {VoteService} from "../../service/vote.service";
import {AuthService} from "../../auth/service/auth.service";
import {PostService} from "../../service/post.service";
import {VoteType} from "../../service/vote-type";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() post: PostModel;
  faPlus = faPlus;
  faMinus = faMinus;
  votePayload :VotePayload;
  isLogged: boolean;

  constructor(private voteService :VoteService, private authService: AuthService, private postService:PostService, private router: Router) {
    this.votePayload = {
      voteType: undefined,
      postId: undefined
    }
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn();
  }

  upvotePost() {
    if(!this.isLogged){
      this.router.navigate(['/login']);
    }
    this.votePayload.voteType = VoteType.PLUS;
    this.vote();
  }

  downvotePost() {
    if(!this.isLogged){
      this.router.navigate(['/login']);
    }
    this.votePayload.voteType = VoteType.MINUS;
    this.vote();
  }

  private vote() {
    this.votePayload.postId = this.post.postId;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    },error => {
      console.log("Error");
      throwError(error);
    })
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.postId).subscribe(post => {
      this.post = post;
    });
  }
}

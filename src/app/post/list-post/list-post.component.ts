import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Subscription } from 'rxjs';
import { ServicePostService } from 'src/app/services/service-post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit,OnDestroy {


  public posts:Post[];
  postSubscription:Subscription;

  constructor(private postService:ServicePostService) { }

  ngOnInit() {
  
    this.init();
 
    
  
  }

  init(){
    this.postSubscription=this.postService.postsSubject.subscribe(
      (data:Post[])=>{
        this.posts=data;
      },
      (error)=>{
        console.log(error);
      }
    );
    this.postService.emitPostsSubject();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}

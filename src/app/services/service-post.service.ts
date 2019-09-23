import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  private posts:Post[]=[];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient:HttpClient) { 
  
   this.getPosts();
  }
  

  emitPostsSubject(){

    this.postsSubject.next(this.posts.slice());
  }

  changeEtat(i:number){
 
     this.posts.map((p)=>{if(p.id==i)p.etat=!p.etat})
     this.emitPostsSubject();
     this.saveAppareilsToServer();
  }
  addPOst(post:Post){
    post.id=this.posts.length;
    this.posts.unshift(post);
    this.emitPostsSubject();
   this. saveAppareilsToServer();
   
  }
  supprime(id:number){
    this.posts=this.posts.filter((post)=>post.id!=id);
    this.emitPostsSubject();
    this. saveAppareilsToServer();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://coursangular-9579a.firebaseio.com/posts.json/', this.posts)
      .subscribe(
        () => {
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
  

getPosts() {
  this.httpClient
    .get<Post[]>('https://coursangular-9579a.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
        this.posts=response;
        this.emitPostsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}

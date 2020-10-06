import { title } from 'process';
import { StringifyOptions } from 'querystring';
import {} from './post.model';

import { Component, Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PostService{
  private posts:Post[]=[];
}



export class PostService{
  private posts: Post[] = [];

  getPosts(){
    return [...this.posts];
  }

  addPost(title:String,content:string){
    const post :Post = {title:title,content:content};
    this.posts.push(post)
  }
}

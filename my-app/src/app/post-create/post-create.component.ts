import { NgForOf } from '@angular/common';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { title } from 'process';
import {Post} from '../posts/post.model';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterdTitle=""
  enterdContent="";
  @Output() postCreated = new EventEmitter();

  // onAddPost(){
  //   // console.log(Postvalue.value)
  //   // this.newPost=this.enterValue;
  //   const post : Post={
  //     title:this.enterdTitle,
  //     contect:this.enterdContent
  //   };
  //   this.postCreated.emit(post);
  // }

  onAddPostForm(form:NgForm){
    // console.log(Postvalue.value)
    // this.newPost=this.enterValue;
    if(form.invalid){
      return
    }
    const post : Post={
      title:form.value.title,
      content:form.value.content
    };
    this.postCreated.emit(post);
    form.resetForm();
  }


  constructor() { }

  ngOnInit(): void {
  }

}

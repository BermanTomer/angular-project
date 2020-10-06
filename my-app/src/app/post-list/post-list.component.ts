import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts = [];
  // posts = [
  //   {title:"title first",content:" first content"},
  //   {title:"title second",content:" second contend"},
  //   {title:"title thred",content:" thred content"}
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}

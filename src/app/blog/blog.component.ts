import { Component, Input, OnInit } from '@angular/core';
import { BlogModel } from './models/blogs.models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 @Input() blog: BlogModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

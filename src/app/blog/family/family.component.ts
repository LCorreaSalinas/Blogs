import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../models/blogs.models';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  selectedBlog?: BlogModel;

  blogs: BlogModel[] = [];

  constructor(public blogsService: BlogsService) { 
  }

  ngOnInit(): void {
    this.blogs = this.blogsService.getBlogs();
  }


  // getBlogs(): void {
  //   this.
  // }

  

}

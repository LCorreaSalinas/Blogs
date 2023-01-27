import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blogs.models';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  

  public getBlogs(): BlogModel[] {
    return [
      {
        "title": "Lupita",
        "info": "Myself"
      },
      {
        "title": "Liliana",
        "info": "Twin sister"
      },
      {
        "title": "Jaime",
        "info": "brother"
      },
      {
        "title": "Eduardo",
        "info": "Younger brother"
      },
      {
        "title": "Bernarda",
        "info": "Mother"
      },
      {
        "title": "Jaime",
        "info": "Father"
      },
      {
        "title": "Jennifer",
        "info": "Cousin"
      },
      {
        "title": "Elizabeth",
        "info": "Aunt"
      },
      {
        "title": "Ramiro",
        "info": "Uncle"
      }
    ]
  }

}

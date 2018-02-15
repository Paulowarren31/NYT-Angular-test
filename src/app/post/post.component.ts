import { Component, OnInit } from '@angular/core';
import { NytserviceService } from '../nytservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: NytserviceService) { }

  ngOnInit() {
    this.getPosts();
  }

  posts: Post[];

  async getPosts(): void {
    this.posts = await this.postService.getPosts();
  }

  public onClickPost(event, post){
    alert('open' + post.link)
  }

}

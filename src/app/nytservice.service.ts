import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { PostComponent } from './post/post';

@Injectable()
export class NytserviceService {

  constructor(
    private http: HttpClient) { }

  private url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=61de90fe8e774a338005ece6f7950ee7';


  async getPosts(): Promise<Post[]>{
    let res = await this.http.get(this.url).toPromise();


    let posts: Post[] = [];

    // for each post, extract the snippet and the author
    for( let doc of res.results){


      //try and get a picture from api response

      let imgUrl = undefined;
      if (doc.media){
        imgUrl = doc.media[0]["media-metadata"][2].url
      }

      let post: Post = {
        title: doc.title,
        author: doc.byline,
        link: doc.url,
        abs: doc.abstract,
        imgUrl: imgUrl,
        date: moment(doc.published_date).fromNow()
      }
      posts.push(post)
    }
    return posts;

  }
  

}

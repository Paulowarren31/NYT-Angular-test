import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://api.nytimes.com/svc/archive/v1/2018/1.json?api-key=61de90fe8e774a338005ece6f7950ee7';

}

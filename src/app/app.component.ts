import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GreenWorld';
  showSplash: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      var elmnt = document.getElementById('main-page');
      elmnt!.scrollIntoView();
      // this.showSplash = false;
    }, 1000);
  }
}

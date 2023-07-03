import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ras-front-end-client-pipeline';

  environment: string = 'This is it!!';

  ngOnInit() {
    const { dev, production, test } = environment;

    console.log('for testing');

    if (dev === true) {
      this.environment = 'Development';
    } else if (test === true) {
      this.environment = 'Test';
    } else if (production === true) {
      this.environment = 'Production';
    }
  }
}

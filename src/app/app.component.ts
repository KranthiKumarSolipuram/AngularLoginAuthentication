import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiLayout';

  isLoading = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}

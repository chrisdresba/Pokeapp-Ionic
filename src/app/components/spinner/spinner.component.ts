import { Component, inject } from '@angular/core';
import { LoadingService } from './../../shared/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  public service = inject(LoadingService);
  public isLoading = this.service.isLoading;
}

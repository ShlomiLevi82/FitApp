import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}
  isLoading$ = this.loaderService.isLoading$;
}

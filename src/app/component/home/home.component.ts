import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AreaBannerComponent } from '../area-banner/area-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AreaBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

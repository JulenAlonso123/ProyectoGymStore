import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AreaBannerComponent } from '../area-banner/area-banner.component';
import { InformacionHomeComponent } from '../informacion-home/informacion-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AreaBannerComponent, InformacionHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

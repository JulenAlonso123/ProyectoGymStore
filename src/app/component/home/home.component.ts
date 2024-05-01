import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AreaBannerComponent } from '../area-banner/area-banner.component';
import { InformacionHomeComponent } from '../informacion-home/informacion-home.component';
import { BestsellersComponent } from '../bestsellers/bestsellers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AreaBannerComponent, InformacionHomeComponent, BestsellersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

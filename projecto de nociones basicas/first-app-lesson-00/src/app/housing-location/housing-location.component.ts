
import {Component, Input, importProvidersFrom} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterLink,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  
  template: `
  <section class="listing">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    <p class="listing-units">{{ housingLocation.availableUnits }} units available</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  
    @Input() housingLocation!: HousingLocation;
  }



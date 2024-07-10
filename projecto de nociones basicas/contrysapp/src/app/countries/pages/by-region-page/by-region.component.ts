import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',

})
export class ByRegionComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  searchByRegion(termino: string) {
    this.countriesService.searchRegion(termino)
    .subscribe(
      countries => this.countries = countries,
    )
  }

}

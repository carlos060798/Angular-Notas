import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
})
export class CapitalPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  searchByCapital(termino: string) {
    this.countriesService.searchCapital(termino)
    .subscribe(
      countries => this.countries = countries,
    )
  }

}

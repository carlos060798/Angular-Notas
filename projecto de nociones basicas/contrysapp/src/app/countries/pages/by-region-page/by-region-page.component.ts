import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type   Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {


  public countries: Country[] = [];
  public  regions:Region[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion?: Region;

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( region: Region ):void  {
    this.activeRegion = region;
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });

  }

}

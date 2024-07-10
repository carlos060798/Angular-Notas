import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country, CoatOfArms, CapitalInfo } from '../../interfaces/country';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',

})
export class ContryPageComponent implements OnInit{


  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  /*
  esta funcion se ejecuta cuando el componente se inicializa y se ejecuta una sola vez p
  ver el  pais seleccionado por id

  */
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryById( id )),
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      });

}
}

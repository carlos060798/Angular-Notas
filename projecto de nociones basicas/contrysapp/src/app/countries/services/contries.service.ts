import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of,map } from "rxjs";
import { Country } from "../interfaces/country";

/**
 * Service for retrieving country information.
 */
@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  /**
   * Searches for a country by its ID.
   * @param code - The ID of the country to search for.
   * @returns An Observable of a Country object or null if not found.
   */
  searchCountryById(code: string) : Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  /**
   * Searches for countries by capital.
   * @param term - The capital to search for.
   * @returns An Observable of an array of Country objects.
   */
  searchCapital(term: string) : Observable<Country[]> {
    const  url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe( // pipe response to map the response to the first element of the array
        catchError(() => of([])) // si hay un error se retorna un arreglo vacio
      );
  }

  /**
   * Searches for countries by name.
   * @param term - The name to search for.
   * @returns An Observable of an array of Country objects.
   */
  searchCountry(term: string) : Observable<Country[]> {
    const  url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  /**
   * Searches for countries by region.
   * @param term - The region to search for.
   * @returns An Observable of an array of Country objects.
   */
  searchRegion(term: string) : Observable<Country[]> {
    const  url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }
}

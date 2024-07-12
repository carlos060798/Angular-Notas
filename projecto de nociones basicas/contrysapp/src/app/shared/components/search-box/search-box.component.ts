import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

/**
 * Component for a search box.
 */
@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  /**
   * Subject used for debouncing search terms.
   * Subject is a special type of Observable that allows values to be multicasted to many Observers.
   * Subjects are like EventEmitters: they maintain a registry of many listeners.
   */
  private debaucer: Subject<string> = new Subject<string>();

  public  debaucerSubscripcion?: Subscription ;

  /**
   * Placeholder text for the search box.
   * The @Input decorator indicates that the value of the property is passed in from the parent component.
   */
  @Input()
  public placeholder: string = '';

  /**
   * Event emitter for passing the search value to the parent component.
   * The @Output decorator indicates that the value of the property is passed out to the parent component.
   */
  @Output()
  public onValue = new EventEmitter<string>();

  /**
   * Event emitter for passing the debounced search value to the parent component.
   * The @Output decorator indicates that the value of the property is passed out to the parent component.
   */
  @Output()
  public onDebauce = new EventEmitter<string>();

  /**
   * Initializes the component.
   * Sets up the debouncing of search terms and subscribes to the debaucer subject.
   */
  ngOnInit(): void {
    this.debaucer
      .pipe(
        debounceTime(300),
      )
      .subscribe(value => this.onDebauce.emit(value));
  }

  /**
   * Destroys the component.
   * Unsubscribes from the debaucer subject.
   */

  ngOnDestroy(): void {  //  ngOnDestroy is a lifecycle hook that is called when a directive, pipe, or service is destroyed.
    this.debaucerSubscripcion?.unsubscribe();
  }

  /**
   * Emits the search value to the parent component.
   * @param value - The search value to emit.
   */
  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  /**
   * Handles key press events in the search box.
   * @param searchTerm - The search term entered by the user.
   */
  onKeyPress(searchTerm: string): void {
    this.debaucer.next(searchTerm);
  }
}

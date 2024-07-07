import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sheard-lazy-loading',
  templateUrl: './lazy-loading.component.html',

})
export class LazyLoadingComponent implements OnInit {

  public loading: boolean = false;
  
  @Input() 
  public  url!: string;

  @Input()
  public  alt: string = "";

  ngOnInit(): void {
    if (!this.url)  throw new Error('Url is required');
  }

  onload() {
    this.loading = true;
  
  }



}

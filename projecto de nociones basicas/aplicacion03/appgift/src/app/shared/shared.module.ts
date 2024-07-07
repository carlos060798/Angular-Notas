import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyLoadingComponent
  ]
})
export class SharedModule { }

import { PhotoComponent } from '../photos/photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { filterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotosComponent,
    filterByDescription,
  ],
  imports: [CommonModule, HttpClientModule, PhotoFormModule],
  exports: [PhotoComponent, HttpClientModule],
})
export class PhotosModule {}

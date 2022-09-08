import { PhotoComponent } from '../photos/photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoComponent, HttpClientModule],
})
export class PhotosModule {}

import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class filterByDescription implements PipeTransform {
  transform(photos: Photo[], desctiptionQuery: string) {
    desctiptionQuery = desctiptionQuery.trim().toLowerCase();
    if (desctiptionQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(desctiptionQuery)
      );
    } else {
      return photos;
    }
  }
}

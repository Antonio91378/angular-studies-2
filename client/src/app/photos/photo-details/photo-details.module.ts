import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoModule } from "./../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from "./../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "./../../shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerDirective,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    ShowIfLoggedModule,
  ],
})
export class PhotoDetailsModule {}

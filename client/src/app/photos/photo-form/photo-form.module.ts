import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoModule } from "./../photo/photo.module";
import { RouterModule } from "@angular/router";
import { ImmediateClickModule } from "src/app/shared/directives/immediate-click.directive.ts/immediate-click.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}

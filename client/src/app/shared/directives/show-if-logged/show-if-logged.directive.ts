import { Directive, ElementRef, OnInit, Renderer } from "@angular/core";
import { UserService } from "./../../../core/user/user.service";
import { element } from "protractor";

@Directive({
  selector: "[ShowIfLogged]",
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private userService: UserService,
    private renderer: Renderer,
    private element: ElementRef<any>
  ) {}
  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setElementStyle(
        this.element.nativeElement,
        "display",
        "none"
      );
  }
}

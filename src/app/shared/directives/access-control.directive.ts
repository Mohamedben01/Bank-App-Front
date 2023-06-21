import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[accessControl]'
})
export class AccessControlDirective {
  @Input() set accessControl(role: Array<string>) {
    role.length > 0 ? this.checkRole(role) : this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) { }
  checkRole(hideFor: Array<string>) {
    const userRoles: Array<string> = this.authService.getRoles();
    if (userRoles && userRoles.length > 0) {
      const index = userRoles.findIndex(role => hideFor.indexOf(role) !== -1);
      index >= 0 ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.clear()
    }
  }
}

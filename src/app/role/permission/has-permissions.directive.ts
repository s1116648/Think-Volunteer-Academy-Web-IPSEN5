import { AfterViewInit, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { PermissionService } from "./permission.service";

@Directive({
  selector: "[appHasPermissions]"
})
export class HasPermissionsDirective implements OnInit{

  @Input() appHasPermissions: string[];

  constructor(private permissionService: PermissionService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.permissionService.hasPermissions(this.appHasPermissions).subscribe((hasPerms: boolean) => {
      if (hasPerms){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else{
        this.viewContainer.clear();
      }
    });
  }
}

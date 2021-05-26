import { Component, Input, OnInit } from "@angular/core";
import { Permission } from "./permission.model";
import { PermissionService } from "./permission.service";

@Component({
  selector: "app-permission",
  templateUrl: "./permission.component.html",
  styleUrls: ["./permission.component.scss"]
})
export class PermissionComponent implements OnInit {
  @Input() routerLink: any[];

  permissions: Permission[];

  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.permissionService.fetchPermissions().subscribe((permissions: Permission[]) => {
      this.permissions = permissions;
    });
  }
}

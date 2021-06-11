import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { AdminEditTestViewComponent } from "./admin-edit-test-view/admin-edit-test-view.component";
import {TestRoutingModule} from "./test-routing.module";

@NgModule({
    declarations: [AdminEditTestViewComponent],
    imports: [
        CommonModule,
        SharedModule,
        TestRoutingModule
    ],
    exports: [],
    providers: []
})
export class TestModule{}

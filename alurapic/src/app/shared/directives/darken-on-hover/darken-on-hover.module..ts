import { NgModule } from "@angular/core";
import { DarkOnHoverDirective } from "../darken-one-houver.directive";

@NgModule({
    declarations: [ DarkOnHoverDirective ],
    exports : [ DarkOnHoverDirective ]
})

export class DarkenOnHouverModule {}
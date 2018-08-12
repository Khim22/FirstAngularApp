import {NgModule} from "@angular/core";
import { AppComponent } from "./app.component";

import {MatToolbarModule} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


const MODULES=[
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule{
    
}
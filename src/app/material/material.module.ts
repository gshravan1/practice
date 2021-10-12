import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';





const materialComponents = [
                            MatButtonModule,
                            MatToolbarModule,
                            MatIconModule,
                            MatFormFieldModule,
                            MatCardModule
                           ];
@NgModule({
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class MaterialModule { }

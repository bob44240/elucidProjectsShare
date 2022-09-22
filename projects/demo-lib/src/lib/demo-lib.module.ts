import { NgModule } from '@angular/core';
import { DemoLibComponent } from './demo-lib.component';
import { TestComponentComponent } from './test-component/test-component.component';



@NgModule({
  declarations: [
    DemoLibComponent,
    TestComponentComponent
  ],
  imports: [
  ],
  exports: [
    DemoLibComponent
  ]
})
export class DemoLibModule { }

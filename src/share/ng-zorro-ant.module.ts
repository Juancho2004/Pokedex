
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  exports: [
    NzLayoutModule,
    NzCardModule,
    NzTagModule
  ],
  imports: [
   NzLayoutModule,
   NzCardModule,
   NzTagModule
  ],
})
export class DemoNgZorroAntdModule {

}

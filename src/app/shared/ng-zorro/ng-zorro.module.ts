import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule.forChild(icons)
  ],
  exports : [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class NgZorroModule { }

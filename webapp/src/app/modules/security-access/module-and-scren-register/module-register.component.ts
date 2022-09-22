import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModuleProvider } from 'src/providers/module.provider';
import { ScreenProvider } from 'src/providers/screen.provicer';
import { ModuleRegisterDialogComponent } from './module-register.dialog/module-register.dialog.component';
import { ScreenRegisterDialogComponent } from './screen-register.dialog/screen-register.dialog.component';

@Component({
  selector: 'app-module-and-scren-registerr',
  templateUrl: './module-and-scren-register.component.html',
  styleUrls: ['./module-and-scren-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModuleRegisterComponent implements OnInit {
  Screen: any;
  step: any = 1;
  dataTableModule: [] = [];
  dataTableScreen: [] = [];
  Module: any;
  index: any = null;
  screen!: any;
  method: string = '';
  module!: any;

  displayedColumnsScreen: string[] = ['moduleName', 'screenName', 'icon'];
  displayedColumns: string[] = ['identifier', 'moduleName', 'inactive', 'icon'];

  constructor(
    private moduleProvider: ModuleProvider,
    public dialog: MatDialog,
    private screenProvider: ScreenProvider
  ) {}

  ngOnInit(): void {
    this.step = JSON.parse(sessionStorage.getItem('module_tab')!);

    this.getModuleList();
    this.getScreenList();
  }

  async getModuleList() {
    const moduleList = await this.moduleProvider.findAll();
    this.dataTableModule = moduleList;
  }

  async getScreenList() {
    const screen = await this.screenProvider.findAll();
    this.dataTableScreen = screen;
  }

  handleStep(number: number): void {
    if (this.step - number < 1) {
      this.step = number;
      sessionStorage.setItem('module_tab', this.step.toString());
    } else {
      this.step = number;
      sessionStorage.setItem('module_tab', this.step.toString());
    }
  }

  openScreenDialog() {
    const dialogRef = this.dialog.open(ScreenRegisterDialogComponent, {
      width: '750px',
      height: '30s0px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getScreenList();
    });
  }

  openModuleDialog() {
    const dialogRef = this.dialog.open(ModuleRegisterDialogComponent, {
      width: '750px',
      height: '30s0px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getModuleList();
    });
  }
}

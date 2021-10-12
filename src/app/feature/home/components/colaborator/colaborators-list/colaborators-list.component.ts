import { Component, Input, OnInit } from '@angular/core';
import { Colaborator } from '../../../models/colaborator.model';

@Component({
  selector: 'app-colaborators-list',
  templateUrl: './colaborators-list.component.html',
  styleUrls: ['./colaborators-list.component.scss']
})
export class ColaboratorsListComponent implements OnInit {

  @Input()
  colaborators?: Array<Colaborator> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

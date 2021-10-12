import { Component, Input, OnInit } from '@angular/core';
import { Colaborator } from '../../models/colaborator.model';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {

  @Input()
  colaborator?: Colaborator;


  constructor() { }

  ngOnInit(): void {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorsListComponent } from './colaborators-list.component';

describe('ColaboratorsListComponent', () => {
  let component: ColaboratorsListComponent;
  let fixture: ComponentFixture<ColaboratorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

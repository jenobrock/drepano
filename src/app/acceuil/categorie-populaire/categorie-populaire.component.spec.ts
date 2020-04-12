import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriePopulaireComponent } from './categorie-populaire.component';

describe('CategoriePopulaireComponent', () => {
  let component: CategoriePopulaireComponent;
  let fixture: ComponentFixture<CategoriePopulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriePopulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriePopulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

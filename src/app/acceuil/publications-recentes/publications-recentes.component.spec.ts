import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsRecentesComponent } from './publications-recentes.component';

describe('PublicationsRecentesComponent', () => {
  let component: PublicationsRecentesComponent;
  let fixture: ComponentFixture<PublicationsRecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsRecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

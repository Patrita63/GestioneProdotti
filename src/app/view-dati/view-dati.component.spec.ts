import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDatiComponent } from './view-dati.component';

describe('ViewDatiComponent', () => {
  let component: ViewDatiComponent;
  let fixture: ComponentFixture<ViewDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisvehiculosComponent } from './misvehiculos.component';

describe('MisvehiculosComponent', () => {
  let component: MisvehiculosComponent;
  let fixture: ComponentFixture<MisvehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisvehiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

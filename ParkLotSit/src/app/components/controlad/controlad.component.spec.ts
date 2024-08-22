import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladComponent } from './controlad.component';

describe('ControladComponent', () => {
  let component: ControladComponent;
  let fixture: ComponentFixture<ControladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

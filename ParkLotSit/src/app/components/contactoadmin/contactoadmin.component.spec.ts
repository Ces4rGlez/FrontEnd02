import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoadminComponent } from './contactoadmin.component';

describe('ContactoadminComponent', () => {
  let component: ContactoadminComponent;
  let fixture: ComponentFixture<ContactoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

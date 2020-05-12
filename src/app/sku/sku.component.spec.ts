import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SKUComponent } from './sku.component';

describe('SKUComponent', () => {
  let component: SKUComponent;
  let fixture: ComponentFixture<SKUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SKUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SKUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

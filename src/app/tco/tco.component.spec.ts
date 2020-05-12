import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCOComponent } from './tco.component';

describe('TCOComponent', () => {
  let component: TCOComponent;
  let fixture: ComponentFixture<TCOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

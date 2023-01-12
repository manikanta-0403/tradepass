import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualDataComponent } from './virtual-data.component';

describe('VirtualDataComponent', () => {
  let component: VirtualDataComponent;
  let fixture: ComponentFixture<VirtualDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

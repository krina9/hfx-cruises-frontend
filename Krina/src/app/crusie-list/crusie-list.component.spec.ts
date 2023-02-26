import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrusieListComponent } from './crusie-list.component';

describe('CrusieListComponent', () => {
  let component: CrusieListComponent;
  let fixture: ComponentFixture<CrusieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrusieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrusieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

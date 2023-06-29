import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDropdownListComponent } from './season-dropdown-list.component';

describe('SeasonDropdownListComponent', () => {
  let component: SeasonDropdownListComponent;
  let fixture: ComponentFixture<SeasonDropdownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonDropdownListComponent]
    });
    fixture = TestBed.createComponent(SeasonDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

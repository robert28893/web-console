import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileModalComponent } from './account-profile-modal.component';

describe('AccountProfileModalComponent', () => {
  let component: AccountProfileModalComponent;
  let fixture: ComponentFixture<AccountProfileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileModalComponent]
    });
    fixture = TestBed.createComponent(AccountProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

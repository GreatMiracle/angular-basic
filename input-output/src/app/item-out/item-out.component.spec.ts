import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutComponent } from './item-out.component';

describe('ItemOutComponent', () => {
  let component: ItemOutComponent;
  let fixture: ComponentFixture<ItemOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemOutComponent]
    });
    fixture = TestBed.createComponent(ItemOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

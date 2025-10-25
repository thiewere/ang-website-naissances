import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationItem } from './declaration-item';

describe('DeclarationItem', () => {
  let component: DeclarationItem;
  let fixture: ComponentFixture<DeclarationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclarationItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

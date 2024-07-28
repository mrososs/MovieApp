import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusolCardsComponent } from './carusol-cards.component';

describe('CarusolCardsComponent', () => {
  let component: CarusolCardsComponent;
  let fixture: ComponentFixture<CarusolCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarusolCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarusolCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

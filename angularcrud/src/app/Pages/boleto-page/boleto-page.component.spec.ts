import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoPageComponent } from './boleto-page.component';

describe('BoletoPageComponent', () => {
  let component: BoletoPageComponent;
  let fixture: ComponentFixture<BoletoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

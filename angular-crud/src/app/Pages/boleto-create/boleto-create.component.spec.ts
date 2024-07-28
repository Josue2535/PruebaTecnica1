import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoCreateComponent } from './boleto-create.component';

describe('BoletoCreateComponent', () => {
  let component: BoletoCreateComponent;
  let fixture: ComponentFixture<BoletoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

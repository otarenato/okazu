import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoCozimentoComponent } from './tempo-cozimento.component';

describe('TempoCozimentoComponent', () => {
  let component: TempoCozimentoComponent;
  let fixture: ComponentFixture<TempoCozimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoCozimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoCozimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

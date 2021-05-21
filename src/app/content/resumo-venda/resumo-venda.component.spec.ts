import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoVendaComponent } from './resumo-venda.component';

describe('ResumoVendaComponent', () => {
  let component: ResumoVendaComponent;
  let fixture: ComponentFixture<ResumoVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

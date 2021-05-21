import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteIdentificacaoComponent } from './cliente-identificacao.component';

describe('ClienteIdentificacaoComponent', () => {
  let component: ClienteIdentificacaoComponent;
  let fixture: ComponentFixture<ClienteIdentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteIdentificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteIdentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

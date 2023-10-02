import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoCadastralComponent } from './atualizacao-cadastral.component';

describe('AtualizacaoCadastralComponent', () => {
  let component: AtualizacaoCadastralComponent;
  let fixture: ComponentFixture<AtualizacaoCadastralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizacaoCadastralComponent]
    });
    fixture = TestBed.createComponent(AtualizacaoCadastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

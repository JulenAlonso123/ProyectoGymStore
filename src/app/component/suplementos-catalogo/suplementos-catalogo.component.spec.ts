import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosCatalogoComponent } from './suplementos-catalogo.component';

describe('SuplementosCatalogoComponent', () => {
  let component: SuplementosCatalogoComponent;
  let fixture: ComponentFixture<SuplementosCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuplementosCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuplementosCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

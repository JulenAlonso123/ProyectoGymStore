import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinaCatalogoComponent } from './proteina-catalogo.component';

describe('ProteinaCatalogoComponent', () => {
  let component: ProteinaCatalogoComponent;
  let fixture: ComponentFixture<ProteinaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinaCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProteinaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

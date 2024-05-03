import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaCatalogoComponent } from './ropa-catalogo.component';

describe('RopaCatalogoComponent', () => {
  let component: RopaCatalogoComponent;
  let fixture: ComponentFixture<RopaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

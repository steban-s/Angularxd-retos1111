import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sinkopeso } from './sinkopeso';

describe('Sinkopeso', () => {
  let component: Sinkopeso;
  let fixture: ComponentFixture<Sinkopeso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sinkopeso],
    }).compileComponents();

    fixture = TestBed.createComponent(Sinkopeso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

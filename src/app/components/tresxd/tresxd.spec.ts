import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tresxd } from './tresxd';

describe('Tresxd', () => {
  let component: Tresxd;
  let fixture: ComponentFixture<Tresxd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tresxd],
    }).compileComponents();

    fixture = TestBed.createComponent(Tresxd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

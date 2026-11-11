import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dosxd } from './dosxd';

describe('Dosxd', () => {
  let component: Dosxd;
  let fixture: ComponentFixture<Dosxd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dosxd],
    }).compileComponents();

    fixture = TestBed.createComponent(Dosxd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kuatroxd } from './kuatroxd';

describe('Kuatroxd', () => {
  let component: Kuatroxd;
  let fixture: ComponentFixture<Kuatroxd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kuatroxd],
    }).compileComponents();

    fixture = TestBed.createComponent(Kuatroxd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

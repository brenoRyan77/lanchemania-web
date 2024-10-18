import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolaDesktopComponent } from './sacola-desktop.component';

describe('SacolaDesktopComponent', () => {
  let component: SacolaDesktopComponent;
  let fixture: ComponentFixture<SacolaDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacolaDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacolaDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetkikunnatComponent } from './retkikunnat.component';

describe('RetkikunnatComponent', () => {
  let component: RetkikunnatComponent;
  let fixture: ComponentFixture<RetkikunnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetkikunnatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetkikunnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

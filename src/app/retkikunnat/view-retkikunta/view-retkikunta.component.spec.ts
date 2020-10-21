import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRetkikuntaComponent } from './view-retkikunta.component';

describe('ViewRetkikuntaComponent', () => {
  let component: ViewRetkikuntaComponent;
  let fixture: ComponentFixture<ViewRetkikuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRetkikuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRetkikuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRetkikuntaComponent } from './create-retkikunta.component';

describe('CreateRetkikuntaComponent', () => {
  let component: CreateRetkikuntaComponent;
  let fixture: ComponentFixture<CreateRetkikuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRetkikuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetkikuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

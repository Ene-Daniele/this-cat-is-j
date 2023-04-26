import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FookinHelMateComponent } from './fookin-hel-mate.component';

describe('FookinHelMateComponent', () => {
  let component: FookinHelMateComponent;
  let fixture: ComponentFixture<FookinHelMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FookinHelMateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FookinHelMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

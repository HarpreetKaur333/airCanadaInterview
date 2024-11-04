import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUnsubComponent } from './sub-unsub.component';

describe('SubUnsubComponent', () => {
  let component: SubUnsubComponent;
  let fixture: ComponentFixture<SubUnsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubUnsubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubUnsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

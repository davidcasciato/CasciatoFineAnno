import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunnoComponent } from './alunno.component';

describe('AlunnoComponent', () => {
  let component: AlunnoComponent;
  let fixture: ComponentFixture<AlunnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunnoComponent]
    });
    fixture = TestBed.createComponent(AlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

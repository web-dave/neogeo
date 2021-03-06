import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavComponent } from './my-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyNavComponent', () => {
  let component: MyNavComponent;
  let fixture: ComponentFixture<MyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyNavComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

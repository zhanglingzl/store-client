import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuasiListComponent } from './quasi-list.component';

describe('QuasiListComponent', () => {
  let component: QuasiListComponent;
  let fixture: ComponentFixture<QuasiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuasiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

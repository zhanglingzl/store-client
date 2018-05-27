import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InServerListComponent } from './in-server-list.component';

describe('InServerListComponent', () => {
  let component: InServerListComponent;
  let fixture: ComponentFixture<InServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InServerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoryListComponent } from './repertory-list.component';

describe('RepertoryListComponent', () => {
  let component: RepertoryListComponent;
  let fixture: ComponentFixture<RepertoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepertoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

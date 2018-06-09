import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpgradeListComponent } from './upgrade-list.component';

describe('UpgradeListComponent', () => {
  let component: UpgradeListComponent;
  let fixture: ComponentFixture<UpgradeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

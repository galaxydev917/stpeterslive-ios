import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveWatchPage } from './live-watch.page';

describe('LiveWatchPage', () => {
  let component: LiveWatchPage;
  let fixture: ComponentFixture<LiveWatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveWatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveWatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

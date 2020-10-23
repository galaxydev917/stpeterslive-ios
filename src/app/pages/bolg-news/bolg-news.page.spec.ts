import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BolgNewsPage } from './bolg-news.page';

describe('BolgNewsPage', () => {
  let component: BolgNewsPage;
  let fixture: ComponentFixture<BolgNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BolgNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

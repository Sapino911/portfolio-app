import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStatCardComponent } from './github-stat-card.component';

describe('GithubStatCardComponent', () => {
  let component: GithubStatCardComponent;
  let fixture: ComponentFixture<GithubStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubStatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

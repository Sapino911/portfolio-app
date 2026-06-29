import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSectionComponent } from './github-section.component';

describe('GithubSectionComponent', () => {
  let component: GithubSectionComponent;
  let fixture: ComponentFixture<GithubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

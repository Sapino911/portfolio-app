import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectsGridComponent } from './featured-projects-grid.component';

describe('FeaturedProjectsGridComponent', () => {
  let component: FeaturedProjectsGridComponent;
  let fixture: ComponentFixture<FeaturedProjectsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

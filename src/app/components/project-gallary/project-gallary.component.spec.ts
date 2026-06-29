import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGallaryComponent } from './project-gallary.component';

describe('ProjectGallaryComponent', () => {
  let component: ProjectGallaryComponent;
  let fixture: ComponentFixture<ProjectGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

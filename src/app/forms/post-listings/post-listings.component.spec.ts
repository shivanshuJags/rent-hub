import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingsComponent } from './post-listings.component';

describe('PostListingsComponent', () => {
  let component: PostListingsComponent;
  let fixture: ComponentFixture<PostListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

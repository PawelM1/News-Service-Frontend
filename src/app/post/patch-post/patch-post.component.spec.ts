import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PatchPostComponent} from './patch-post.component';

describe('PatchPostComponent', () => {
  let component: PatchPostComponent;
  let fixture: ComponentFixture<PatchPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatchPostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

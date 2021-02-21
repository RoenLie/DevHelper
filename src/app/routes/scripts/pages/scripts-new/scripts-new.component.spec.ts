import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsNewComponent } from './scripts-new.component';

describe('ScriptsNewComponent', () => {
  let component: ScriptsNewComponent;
  let fixture: ComponentFixture<ScriptsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsPortalComponent } from './scripts-portal.component';

describe('ScriptsPortalComponent', () => {
  let component: ScriptsPortalComponent;
  let fixture: ComponentFixture<ScriptsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptsPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

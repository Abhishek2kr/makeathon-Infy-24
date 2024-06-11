import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractTemplateComponent } from './extract-template.component';

describe('ExtractTemplateComponent', () => {
  let component: ExtractTemplateComponent;
  let fixture: ComponentFixture<ExtractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

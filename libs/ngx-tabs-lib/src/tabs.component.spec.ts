import { Component, ViewChild } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { NgxTabsCoreModule } from '@juristr/ngx-tabs-core';

describe('TabsComponent', () => {
  let fixture: ComponentFixture<TestCmp>;
  let component: TestCmp;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TestCmp, TabsComponent, TabComponent],
        imports: [NgxTabsCoreModule.forRoot()]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCmp);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the test component', () => {
    expect(component).not.toBeNull();
  });

  it('should create tabs component', () => {
    expect(fixture.debugElement.queryAll(By.css('ngx-tabs')).length).toBe(1);
  });

  it('should have two tabs', () => {
    expect(fixture.debugElement.queryAll(By.css('ngx-tab')).length).toBe(2);
  });

  it('should activate 1st tab', () => {
    expect(component.tabs.tabs.first.active).toBeTruthy();
  });

  it('should activate the tab when clicking on it', () => {
    const secondTabHeader = fixture.debugElement.queryAll(By.css('ul>li:nth-child(2)'))[0];
    expect(secondTabHeader).toBeDefined();

    secondTabHeader.triggerEventHandler('click', {});

    fixture.detectChanges();
    expect(component.tabs.tabs.last.active).toBeTruthy();
  });
});

@Component({
  selector: 'test-cmp',
  template: `
  <ngx-tabs>
    <ngx-tab tabTitle="Hi">
      <p>Hi there</p>
    </ngx-tab>
    <ngx-tab tabTitle="Ciao">
      <p>Ciao!</p>
    </ngx-tab>
  </ngx-tabs>
  `
})
export class TestCmp {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

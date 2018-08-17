import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AwardsComponent } from './awards/awards.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/src/http_module';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        AwardsComponent,
        InterestsComponent,
        SkillsComponent,
        EducationComponent,
        ExperienceComponent,
        AboutComponent,
        LoginComponent,
        HomeComponent
      ],
      imports: [
        routing,
      ],
      providers: [
        AuthGuard,
        AuthenticationService,
        UserService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

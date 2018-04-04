import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { EmployeeListComponent } from './employee-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from '../../pipes/employee-filter.pipe';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../../../app-routing.module';
import { StandardLayoutModule } from '../../../layout/layout.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { reducers } from './../../store';
import { reducers as reducersFeature } from './../../store/reducers/';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

describe('EmployeeListComponent', () => {
  let fixture: ComponentFixture<EmployeeListComponent>;
  let comp: EmployeeListComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StandardLayoutModule,
          FormsModule,
          StoreModule.forRoot(reducers),
          StoreModule.forFeature('employees', reducersFeature),
          TranslateModule.forRoot({
            useDefaultLang: true,
            loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/'),
              deps: [HttpClient]
            }
          })
        ],
        declarations: [EmployeeListComponent, EmployeeFilterPipe],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create the app',
    async(() => {
      expect(comp).toBeTruthy();
    })
  );

  it('should render title in a h2 tag',
    async(() => {
      const result = fixture.nativeElement.querySelector('h2').textContent;
      expect(result).toContain('LAYOUT.EMPLOYEES');
    })
  );
});

import { ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { HostService, RecipesService } from 'src/shared/services';
import { Router, Routes } from '@angular/router';
import { ReceitasComponent } from '../receitas/receitas.component';

const routes: Routes = [
  { path: 'receitas', component: ReceitasComponent },
];

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let router: Router;
    let injector: TestBed;

    beforeEach(async() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes(routes),
            HttpClientTestingModule
          ],
          declarations: [HomeComponent],
          providers: [
            HostService,
            RecipesService
          ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        injector = getTestBed();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        router = injector.get(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Dado um botão, quando clickado, deve redirecionar para receitas', () => {
      spyOn(router, 'navigate');
      const button = fixture.nativeElement.querySelector('.link-category');
      button.click();
      expect(router.navigate).toHaveBeenCalledWith(['/receitas'], { queryParams: { categoria: 'aves' } });
    })
});

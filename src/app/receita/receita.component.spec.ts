import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ReceitaComponent } from './receita.component';
import { HostService, RecipesService } from 'src/shared/services';

describe('ReceitaComponent', () => {
    let component: ReceitaComponent;
    let fixture: ComponentFixture<ReceitaComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [
              RouterTestingModule,
              HttpClientTestingModule,
              HttpClientModule
            ],
            declarations: [ReceitaComponent],
            providers: [
              HostService,
              RecipesService
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReceitaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReceitasComponent } from './receitas.component';
import { HostService, RecipesService } from 'src/shared/services';

describe('ReceitasComponent', () => {
    let component: ReceitasComponent;
    let fixture: ComponentFixture<ReceitasComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
              RouterTestingModule,
              HttpClientTestingModule
            ],
            declarations: [ReceitasComponent],
            providers: [
              HostService,
              RecipesService
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReceitasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
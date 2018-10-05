import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageCurstomerPageComponent } from './manage-customers-page.component';

describe('ManageCurstomerPageComponent', () => {
    let component: ManageCurstomerPageComponent;
    let fixture: ComponentFixture<ManageCurstomerPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageCurstomerPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageCurstomerPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ManageCustomerPageRoutingModule } from './manage-customers-page-routing.module';

describe('ManageCustomerPageRoutingModule', () => {
    let module: ManageCustomerPageRoutingModule;

    beforeEach(() => {
        module = new ManageCustomerPageRoutingModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});

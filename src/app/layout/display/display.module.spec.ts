import { DisplayRoutingModule } from './display-routing.module';

describe('DisplayRoutingModule', () => {
    let module: DisplayRoutingModule;

    beforeEach(() => {
        module = new DisplayRoutingModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});

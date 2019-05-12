import { AddcallModule } from './addcall.module';

describe('CustomersModule', () => {
    let addcallModule: AddcallModule;

    beforeEach(() => {
        addcallModule = new AddcallModule();
    });

    it('should create an instance', () => {
        expect(addcallModule).toBeTruthy();
    });
});

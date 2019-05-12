import { AddmeetingModule } from './addmeeting.module';

describe('CustomersModule', () => {
    let addmeetingModule: AddmeetingModule;

    beforeEach(() => {
        addmeetingModule = new AddmeetingModule();
    });

    it('should create an instance', () => {
        expect(addmeetingModule).toBeTruthy();
    });
});

import { isObject, isNil } from './utility.helpers';

describe('utility helpers', () => {
  describe('isObject helper', () => {
    it('should return false if null is passed', () => {
      const val = isObject(null);
      expect(val).toBeFalsy();
    });
    it('should return true if an object is passed', () => {
      const val = isObject({ id: 1 });
      expect(val).toBeTruthy();
    });
    it('should return true if a function is passed', () => {
      const val = isObject(function() {});
      expect(val).toBeTruthy();
    });
    it('should return false if a boolean is passed', () => {
      const val = isObject(true);
      expect(val).toBeFalsy();
    });
    it('should return false if a number is passed', () => {
      const val = isObject(2);
      expect(val).toBeFalsy();
    });
    it('should return false if a string is passed', () => {
      const val = isObject('hello');
      expect(val).toBeFalsy();
    });
    it('should return false if undefined is passed', () => {
      const val = isObject(undefined);
      expect(val).toBeFalsy();
    });
    it('should return true if an array is passed', () => {
      const val = isObject(['d']);
      expect(val).toBeTruthy();
    });
  });

  describe('isNil helper', () => {
    it('should return true if a null is passed', () => {
      const val = isNil(null);
      expect(val).toBeTruthy();
    });
    it('should return true if a undefined is passed', () => {
      const val = isNil(undefined);
      expect(val).toBeTruthy();
    });
    it('should return false if a other type of data is passed', () => {
      const val = isNil(true);
      expect(val).toBeFalsy();
    });
  });
});

const assert = require('assert');

// Linear Search Functions
const linearV1 = require('../linear');
const linearV2 = require('../linear');
const linearV3 = require('../linear');
const linearV4 = require('../linear');
const linearV5 = require('../linear');


describe('Linear Search Algorithms', () => {
  describe('Linear V1', () => {
    it('should return false when the array is empty', () => {
      assert.equal(linearV1([], 5), false);
      assert.equal(linearV1([]), false);
    });
    it('should return false', () => {
      assert.equal(linearV1([1,2,3,4], 5), false);
      assert.equal(linearV1([1,2,4,5], 3), false);
      assert.equal(linearV1([2,3,4,5], 1), false);
      assert.equal(linearV1([2], 3), false);
      assert.equal(linearV1([4,2,3], 5), false);
      assert.equal(linearV1([0], 1), false);
      assert.equal(linearV1([1,1,1,1,2], 5), false);
      assert.equal(linearV1([2,2,2,2], 3), false);
      assert.equal(linearV1([4], 5), false);
    });
    it('should return true', () => {
      assert.equal(linearV1([1,2,3,4,5], 5), true);
      assert.equal(linearV1([1,2,3,4,5], 3), true);
      assert.equal(linearV1([1,2,3,4,5], 1), true);
      assert.equal(linearV1([3], 3), true);
      assert.equal(linearV1([5,2,3], 5), true);
      assert.equal(linearV1([1], 1), true);
      assert.equal(linearV1([1,1,1,1,5], 5), true);
      assert.equal(linearV1([3,3,3,3], 3), true);
      assert.equal(linearV1([5], 5), true);
    });
  });
  describe('Linear V2', () => {
    it('should return false when the array is empty', () => {
      assert.equal(linearV2([], 5), false);
      assert.equal(linearV2([]), false);
    });
    it('should return false', () => {
      assert.equal(linearV2([1,2,3,4], 5), false);
      assert.equal(linearV2([1,2,4,5], 3), false);
      assert.equal(linearV2([2,3,4,5], 1), false);
      assert.equal(linearV2([2], 3), false);
      assert.equal(linearV2([4,2,3], 5), false);
      assert.equal(linearV2([0], 1), false);
      assert.equal(linearV2([1,1,1,1,2], 5), false);
      assert.equal(linearV2([2,2,2,2], 3), false);
      assert.equal(linearV2([4], 5), false);
    });
    it('should return true', () => {
      assert.equal(linearV2([1,2,3,4,5], 5), true);
      assert.equal(linearV2([1,2,3,4,5], 3), true);
      assert.equal(linearV2([1,2,3,4,5], 1), true);
      assert.equal(linearV2([3], 3), true);
      assert.equal(linearV2([5,2,3], 5), true);
      assert.equal(linearV2([1], 1), true);
      assert.equal(linearV2([1,1,1,1,5], 5), true);
      assert.equal(linearV2([3,3,3,3], 3), true);
      assert.equal(linearV2([5], 5), true);
    });
  });
  describe('Linear V3', () => {
    it('should return false when the array is empty', () => {
      assert.equal(linearV3([], 5), false);
      assert.equal(linearV3([]), false);
    });
    it('should return false', () => {
      assert.equal(linearV3([1,2,3,4], 5), false);
      assert.equal(linearV3([1,2,4,5], 3), false);
      assert.equal(linearV3([2,3,4,5], 1), false);
      assert.equal(linearV3([2], 3), false);
      assert.equal(linearV3([4,2,3], 5), false);
      assert.equal(linearV3([0], 1), false);
      assert.equal(linearV3([1,1,1,1,2], 5), false);
      assert.equal(linearV3([2,2,2,2], 3), false);
      assert.equal(linearV3([4], 5), false);
    });
    it('should return true', () => {
      assert.equal(linearV3([1,2,3,4,5], 5), true);
      assert.equal(linearV3([1,2,3,4,5], 3), true);
      assert.equal(linearV3([1,2,3,4,5], 1), true);
      assert.equal(linearV3([3], 3), true);
      assert.equal(linearV3([5,2,3], 5), true);
      assert.equal(linearV3([1], 1), true);
      assert.equal(linearV3([1,1,1,1,5], 5), true);
      assert.equal(linearV3([3,3,3,3], 3), true);
      assert.equal(linearV3([5], 5), true);
    });
  });
  describe('Linear V4', () => {
    it('should return false when the array is empty', () => {
      assert.equal(linearV4([], 5), false);
      assert.equal(linearV4([]), false);
    });
    it('should return false', () => {
      assert.equal(linearV4([1,2,3,4], 5), false);
      assert.equal(linearV4([1,2,4,5], 3), false);
      assert.equal(linearV4([2,3,4,5], 1), false);
      assert.equal(linearV4([2], 3), false);
      assert.equal(linearV4([4,2,3], 5), false);
      assert.equal(linearV4([0], 1), false);
      assert.equal(linearV4([1,1,1,1,2], 5), false);
      assert.equal(linearV4([2,2,2,2], 3), false);
      assert.equal(linearV4([4], 5), false);
    });
    it('should return true', () => {
      assert.equal(linearV4([1,2,3,4,5], 5), true);
      assert.equal(linearV4([1,2,3,4,5], 3), true);
      assert.equal(linearV4([1,2,3,4,5], 1), true);
      assert.equal(linearV4([3], 3), true);
      assert.equal(linearV4([5,2,3], 5), true);
      assert.equal(linearV4([1], 1), true);
      assert.equal(linearV4([1,1,1,1,5], 5), true);
      assert.equal(linearV4([3,3,3,3], 3), true);
      assert.equal(linearV4([5], 5), true);
    });
  });
  describe('Linear V5', () => {
    it('should return false when the array is empty', () => {
      assert.equal(linearV5([], 5), false);
      assert.equal(linearV5([]), false);
    });
    it('should return false', () => {
      assert.equal(linearV5([1,2,3,4], 5), false);
      assert.equal(linearV5([1,2,4,5], 3), false);
      assert.equal(linearV5([2,3,4,5], 1), false);
      assert.equal(linearV5([2], 3), false);
      assert.equal(linearV5([4,2,3], 5), false);
      assert.equal(linearV5([0], 1), false);
      assert.equal(linearV5([1,1,1,1,2], 5), false);
      assert.equal(linearV5([2,2,2,2], 3), false);
      assert.equal(linearV5([4], 5), false);
    });
    it('should return true', () => {
      assert.equal(linearV5([1,2,3,4,5], 5), true);
      assert.equal(linearV5([1,2,3,4,5], 3), true);
      assert.equal(linearV5([1,2,3,4,5], 1), true);
      assert.equal(linearV5([3], 3), true);
      assert.equal(linearV5([5,2,3], 5), true);
      assert.equal(linearV5([1], 1), true);
      assert.equal(linearV5([1,1,1,1,5], 5), true);
      assert.equal(linearV5([3,3,3,3], 3), true);
      assert.equal(linearV5([5], 5), true);
    });
  });
});
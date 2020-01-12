const { expect } = require("chai");
const { validate } = require("../src/app");
console.log(validate);

describe("Test Valid BD Phone Numbers", () => {
  it("Should validate GP Old Phone Number", () => {
    const phoneNumber = "+8801717346500";
    expect(validate(phoneNumber)).to.true;
  });

  it("Should validate GP New Phone Number", () => {
    const phoneNumber = "+8801317346500";
    expect(validate(phoneNumber)).to.true;
  });

  it("Should validate Banglalink Old Phone Number", () => {
    const phoneNumber = "+8801917346500";
    expect(validate(phoneNumber)).to.true;
  });

  it("Should validate Banglalink New Phone Number", () => {
    const phoneNumber = "+8801417346500";
    expect(validate(phoneNumber)).to.true;
  });

  it("Should validate Airtel Phone Number", () => {
    const phoneNumber = "+8801617346500";
    expect(validate(phoneNumber)).to.true;
  });

  it("Should validate Robi Phone Number", () => {
    const phoneNumber = "+8801817346500";
    expect(validate(phoneNumber)).to.true;
  });
});

describe("Test Invalid Wrong Phone Numbers", () => {
  it("Should Invalidate BD Phone Number", () => {
    const phoneNumber = "+881717346500";
    expect(validate(phoneNumber)).to.false;
  });

  it("Should Invalidate Wrong Phone Number", () => {
    const phoneNumber = "+8801717";
    expect(validate(phoneNumber)).to.false;
  });
});

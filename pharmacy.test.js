import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("normal case when expiration date expired", () => {
    expect(new Pharmacy([new Drug("test", -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 8)]
    );
  });

  it("normal case when expiration date expired and benefit is nul", () => {
    expect(new Pharmacy([new Drug("test", -10, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -11, 0)]
    );
  });

  it("should do nothing if drug is Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });

  it("should increase twice if expiration date passed", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -4, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -5, 5)]
    );
  });

  it("normal case for Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 19,30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 18, 31)]
    );
  });

  it("normal case for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 19, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 18, 31)]
    );
  });

  it("should increase when expiration date approach", () => {
    expect(new Pharmacy([new Drug("Fervex", 9, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 8, 12)]
    );
  });

  it("should increase when expiration date approach", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 11)]
    );
  });

  it("benefit never more than 50", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 50)]
    );
  });

  it("benefit down when expired", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });  
});

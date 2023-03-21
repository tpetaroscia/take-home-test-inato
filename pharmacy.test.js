import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", "T0", 1, 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test","T0", 1, 1, 2)]
    );
  });

  it("normal case when expiration date expired", () => {
    expect(new Pharmacy([new Drug("test","T0", 1, -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test","T0", 1, -3, 8)]
    );
  });

  it("normal case when expiration date expired and benefit is nul", () => {
    expect(new Pharmacy([new Drug("test","T0", 1, -10, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test","T0", 1, -11, 0)]
    );
  });

  it("dafalgan should decrease the benefit twice and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan","T0", 2, 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan","T0", 2, 1, 1)]
    );
  });

  it("normal case when expiration date expired", () => {
    expect(new Pharmacy([new Drug("Dafalgan","T0", 2, -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan","T0", 2, -3, 6)]
    );
  });

  it("normal case when expiration date expired and benefit is nul", () => {
    expect(new Pharmacy([new Drug("Dafalgan","T0", 2, -10, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan","T0", 2, -11, 0)]
    );
  });

  it("should do nothing if drug is Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill","T9", 1, 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill","T9", 1, 2, 3)]
    );
  });

  it("should increase twice if expiration date passed", () => {
    expect(new Pharmacy([new Drug("Herbal Tea","T1", 1, -4, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea","T1", 1, -5, 5)]
    );
  });

  it("normal case for Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea","T1", 1, 19, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea","T1", 1, 18, 31)]
    );
  });

  it("normal case for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", "T2", 1, 19, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex","T2", 1, 18, 31)]
    );
  });

  it("should increase when expiration date approach", () => {
    expect(new Pharmacy([new Drug("Fervex", "T2", 1, 9, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex","T2", 1, 8, 12)]
    );
  });

  it("should increase when expiration date approach", () => {
    expect(new Pharmacy([new Drug("Fervex", "T2", 1, 4, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex","T2", 1, 3, 11)]
    );
  });

  it("benefit never more than 50", () => {
    expect(new Pharmacy([new Drug("Fervex", "T2", 1, 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex","T2", 1, 19, 50)]
    );
  });

  it("benefit down when expired", () => {
    expect(new Pharmacy([new Drug("Fervex", "T2", 1, 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex","T2", 1, -1, 0)]
    );
  });  
});

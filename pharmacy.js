export class Drug {
  constructor(name, type, amountDecrease, expiresIn, benefit) {
    this.name = name;
    this.type = type;
    this.amountDecrease = amountDecrease;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      this['factor' + drug.type](drug)
    })
    return this.drugs
  }

  factorT0(drug) {
    this.decreaseBenefitCase(drug, drug.amountDecrease)
  }

  factorT1(drug) {
    // Herbal Tea
    this.increaseBenefitCase(drug)
    // Specif
    if (drug.expiresIn < 0 && drug.benefit < 50) {
      this.increaseBenefit(drug);
    }
  }

  factorT2(drug) {
    // Fervex
    this.increaseBenefitCase(drug)
    // Specif
    if (drug.expiresIn < 11 && drug.benefit < 50) {
      this.increaseBenefit(drug);
    }
    if (drug.expiresIn < 6 && drug.benefit < 50) {
      this.increaseBenefit(drug);
    }
    if (drug.expiresIn < 0) {
      drug.benefit = drug.benefit - drug.benefit;
    }
  }

  factorT9(drug) {
    // Magic pill 
  }

  decreaseBenefitCase(drug) {
    this.decreaseDay(drug);
    if (drug.benefit > 0) {
      this.decreaseBenefit(drug, drug.amountDecrease);
    }
    if (drug.expiresIn < 0 && drug.benefit > 0) {
      this.decreaseBenefit(drug, drug.amountDecrease);
    }
    return drug
  }

  increaseBenefitCase(drug) {
    this.decreaseDay(drug);
    if (drug.benefit < 50) {
      this.increaseBenefit(drug);
    }
    return drug
  }

  decreaseBenefit(drug) {
    drug.benefit = drug.benefit - drug.amountDecrease
    return drug
  }

  increaseBenefit(drug) {
    return drug.benefit++
  }

  decreaseDay(drug) {
    return drug.expiresIn--
  }
}
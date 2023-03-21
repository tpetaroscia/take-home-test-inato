export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.decreaseBenefit(i);
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.increaseBenefit(i);
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.increaseBenefit(i);
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.increaseBenefit(i);
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.decreaseDay(i);
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.decreaseBenefit(i);
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.increaseBenefit(i);
          }
        }
      }
    }

    return this.drugs;
  }

  decreaseBenefit(i) {
    this.drugs[i].benefit = this.drugs[i].benefit - 1;
  }

  increaseBenefit(i) {
    this.drugs[i].benefit = this.drugs[i].benefit + 1;
  }

  decreaseDay(i) {
    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
  }  
}
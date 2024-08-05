class TouchScreenLaptop {
  ram: string;
  hd: string;
  processor: string;

  constructor(ram: string, hd: string, processor: string) {
    this.ram = ram;
    this.hd = hd;
    this.processor = processor;
  }

  scroll() {
    console.log("Scrolling...");
  }

  click() {
    console.log("Clicking...");
  }
}

class HPNotebook extends TouchScreenLaptop {
  selfRecovery: boolean;

  constructor(ram: string, hd: string, processor: string, selfRecovery: boolean) {
    super(ram, hd, processor);
    this.selfRecovery = selfRecovery;
  }

  scroll(): void {
    console.log("HP notebook scrolling feature...");
  }

  display(): void {
    console.log(`HP notebook: RAM: ${this.ram}, HD: ${this.hd}, Processor: ${this.processor}, Self recovery: ${this.selfRecovery}`);
  }
}

class DellNotebook extends TouchScreenLaptop {
  mobileAccess: boolean;

  constructor(ram: string, hd: string, processor: string, mobileAccess: boolean) {
    super(ram, hd, processor);
    this.mobileAccess = mobileAccess;
  }

  scroll() {
    console.log("Dell notebook scrolling feature...");
  }

  display(): void {
    console.log(`Dell notebook: RAM: ${this.ram}, HD: ${this.hd}, Processor: ${this.processor}, Mobile access: ${this.mobileAccess}`);
  }
}

const hpNotebook = new HPNotebook("8GB", "1TB", "Intel i5", true);
const dellNotebook = new DellNotebook("16GB", "2TB", "Intel i7", true);
console.log(hpNotebook.ram);
hpNotebook.display();
dellNotebook.display();
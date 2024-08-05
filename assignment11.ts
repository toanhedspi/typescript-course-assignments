class Organizer {
  private _id: number;

  private _name: string;
  

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  display() {
    console.log(`Organizer id ${this._id}: ${this._name}`);
  }
}

class Event2 {
  private _id: number;
  private _name: string;
  private _description: string;
  private _startTime: Date;
  private _endTime: Date;

  constructor(id: number, name: string, description: string, startTime: Date, endTime: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get startTime(): Date {
    return this._startTime;
  }
  public set startTime(value: Date) {
    this._startTime = value;
  }

  public get endTime(): Date {
    return this._endTime;
  }
  public set endTime(value: Date) {
    this._endTime = value;
  }

  display() {
    console.log(`Event id ${this.id}: Event ${this.name}, ${this.description}, ${this.startTime}, ${this.endTime}`);
  }
}

class Venue {
  private _id: number;
  private _name: string;
  private _description: string;
  private _address: string;

  constructor(id: number, name: string, description: string, address: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._address = address;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }

  display() {
    console.log(`Venue id ${this.id}: Venue ${this.name}, ${this.description}`);
  }
}

const organizer = new Organizer(1, "John Doe");
const eve = new Event2(1, "Event 1", "Event 1 description", new Date(), new Date());
const venue = new Venue(1, "Venue 1", "Venue 1 description", "Venue 1 address");

for (const obj of [organizer, eve, venue]) {
  obj.display();
}

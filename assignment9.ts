// class Organizer {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   display() {
//     console.log(`Organizer id ${this.id}: ${this.name}`);
//   }
// }

// class Event2 {
//   id: number;
//   name: string;
//   description: string;
//   startTime: Date;
//   endTime: Date;

//   constructor(id: number, name: string, description: string, startTime: Date, endTime: Date) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.startTime = startTime;
//     this.endTime = endTime;
//   }

//   display() {
//     console.log(`Event id ${this.id}: Event ${this.name}, ${this.description}, ${this.startTime}, ${this.endTime}`);
//   }
// }

// class Venue {
//   id: number;
//   name: string;
//   description: string;
//   address: string

//   constructor(id: number, name: string, description: string, address: string) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.address = address;
//   }

//   display() {
//     console.log(`Venue id ${this.id}: Venue ${this.name}, ${this.description}`);
//   }
// }

// const organizer = new Organizer(1, "John Doe");
// const eve = new Event2(1, "Event 1", "Event 1 description", new Date(), new Date());
// const venue = new Venue(1, "Venue 1", "Venue 1 description", "Venue 1 address");

// for (const obj of [organizer, eve, venue]) {
//   obj.display();
// }

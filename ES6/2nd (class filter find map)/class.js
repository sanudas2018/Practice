// class Instructor {
//    constructor(name, location) {
//       this.name = name;
//       this.location = location;
//    }
//    name;
//    designation = 'Web course Instructor'
//    team = 'web team'
//    location;
//    startSupportSession(time) {
//       console.log(`start the support session at ${time}`);

//    }
//    createQuiz(module) {
//       console.log(`Please create quiz for module ${module}`);
//    }
// };
// const sanu = new Instructor('piya', 'Bagerhat');
// console.log(sanu);
// sanu.startSupportSession('12.00 PM')
// sanu.createQuiz('10')

// .................. 
// common class start
class TeamMember {
   constructor(name, location) {
      this.name = name;
      this.location = location;
   }
   name;
   location;

   providerFeedback() {
      console.log(`${this.name} thank you for your feedback`);
   }

}
// .....common class end........ 
class Instructor extends TeamMember {
   constructor(name, location) {
      super(name, location);

   }
   designation = 'Web course Instructor'
   team = 'web team'

   startSupportSession(time) {
      console.log(`start the support session at ${time}`);

   }
   createQuiz(module) {
      console.log(`Please create quiz for module ${module}`);
   }

};
class Developer extends TeamMember {
   constructor(name, location, tech) {
      super(name, location);
      this.tech = tech
   }
   designation = 'Web course Developer'
   team = 'web team'
   tech;

   developFeature(feature) {
      console.log(`start the develop Feature at ${feature}`);

   }
   release(version) {
      console.log(`Please version the version ${version}`);
   }

};

const sanu = new Instructor('Sanu', 'Japan', 'React')
// const sanu = new Developer('piya', 'Japan', 'React')
console.log(sanu)
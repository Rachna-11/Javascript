class students{

    constructor(name,age,course){
            this.name = name,
            this.age = age,
            this.course = course
        }
        getDetails(){
            return `Students name: ${this.name}, Age : ${this.age} ,Course : ${this.course}`
        }
}

    student1 = new students("Harry" , 20 ,"B-COM")
    student2 = new students("Anu" , 20 ,"Computer science")
  
    console.log(student1.getDetails())
    console.log(student2.getDetails())

    class Teacher {
        constructor(name, subject, experience) {
          this.name = name;
          this.subject = subject;
          this.experience = experience;
        }
      
        introduce() {
          console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}, Experience: ${this.experience} years`);
        }
      }
      
      const teacher1 = new Teacher("Harshid", "Physics", 10);
      const teacher2 = new Teacher("Avni", "English", 8);
      
      teacher1.introduce();
      teacher2.introduce();
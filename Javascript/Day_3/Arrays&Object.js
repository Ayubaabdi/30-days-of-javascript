// Arrays and objects

let names = ["Ayub", "Abdi", "Ibrahim", "Hassan"]

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


// Exercise

    let Colors = ["white", "Blue", "Yellow"]

    console.log("This is Color One " +Colors[0]);
    console.log("This is Color two " +Colors[1]);
    console.log("This is Color three " +Colors[2]);



    // Array Methods

    let std = ["Ali", "Abdiwali", "Mohamud", "sadaq"]

    console.log(std);


    std.push("Amina");

    std.pop()

    std.unshift("Ahmed");

    std.shift();

    console.log(std.length)


    // Objects

    let person = {
        name : "Ayub",
        age: 20,
        city: "mogadishu",
    }

    // console.log(person.name)
    // console.log(person.age)
    // console.log(person.city)
        console.log(person)

    // console.log(person["name"])
    // console.log(person["age"])
    // console.log(person["city"])

    // Adding and Modifying Properties

    person.name = "Ayub Abdi"

    console.log(person)

    person.birthday =  "20-20-1999";
    console.log(person)


    let people = {
        name: "Aisha",
        age: 30,
        city: "afgooye",
        greet: function () {
            console.log("hello mss", this.name)
        }

    }

    console.log(people.greet())


    // Arrays of Objects

  let students =  [
    {
        name: "Ayub",
        age: 20,
        phone: 909090
    },
     {
        name: "khalid",
        age: 90,
        phone: 99399339
     }
  ]

  console.log(students[0].name)
  console.log(students[0].age)
  console.log(students[1])


//   Exercise

  let library = [
    {
        title: "samee lacg",
        author: "ali shire",
        year: 2022
    },
    {
        title: "garaadso intaadan guursan",
        author: "khadija",
        year: 2021
    }

  ]

  console.log(library[0].title)
  console.log(library[1].author)

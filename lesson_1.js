const personInfo = {
  name: "Konstantin",
  lastName: "Pomazan",
  age: 28,
  isMarried: true,
  hasChildren: false,
  currentPosition: "Front-end developer",
  languages: ["ru", "ua", "en"],
  experience: [
    {
      company: "Title",
      position: "Markup developer",
      date: [2013, 2014],
    },
    {
      company: "Title",
      position: "Markup developer",
      date: [2014, 2015],
    },
    {
      company: "Title",
      position: "Markup developer",
      date: [2015, 2019],
    },
    {
      company: "Title",
      position: "Front-end developer",
      date: [2019, 2020],
    },
  ],
  getFullName() {
    return `Person name: ${this.name} ${this.lastName}`;
  },
};
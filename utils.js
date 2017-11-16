class Utils {
  static get favoriteColor() {
    return "Blue";
  }
  static getPeople() {
    return [
      {
        id: 1,
        name: "Bob",
        age: 37
      },
      {
        id: 2,
        name: "Jim",
        age: 26
      },
      {
        id: 3,
        name: "Alice",
        age: 32
      }
    ];
  }
}

module.exports = Utils;

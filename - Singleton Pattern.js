Singleton pattern is a creational Pattern...it is use when we want to limit the number instance of object

Ensure a class has only one instance, and provide a global point of access to it. So this one makes sure that only one instance exists. 
If something attempts to make another, it simply returns a reference to the one that already exists. Easily understood.
Example: database instances creation


const Database = (function () {
  let instance;

  function createDatabaseInstance() {
    return new Object('Database Instance');
  }

  function getDatabaseInstance() {
      console.log("ss",instance)

    if (!instance) {
      instance = createDatabaseInstance();
    }

    return instance;
  }

  return { getDatabaseInstance }
})();

const databaseInstance1 = Database.getDatabaseInstance();
const databaseInstance2 = Database.getDatabaseInstance();

console.log(databaseInstance1 === databaseInstance2);

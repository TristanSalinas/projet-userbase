let users = [
  {
    id: 0,
    isActive: false,
    age: 24,
    eyeColor: "green",
    name: "Marsh Obrien",
    company: "CENTURIA",
  },
  {
    id: 1,
    isActive: false,
    age: 21,
    eyeColor: "green",
    name: "Rios Gibson",
    company: "MULTRON",
  },
  {
    id: 2,
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Morgan Buchanan",
    company: "CENTURIA",
  },
  {
    id: 3,
    isActive: true,
    age: 25,
    eyeColor: "brown",
    name: "Franklin Dyer",
    company: null,
  },
  {
    id: 4,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Keller Pitts",
    company: "CENTURIA",
  },
  {
    id: 5,
    isActive: false,
    age: 25,
    eyeColor: "brown",
    name: "Davenport Maddox",
    company: "MULTRON",
  },
  {
    id: 6,
    isActive: true,
    age: 31,
    eyeColor: "brown",
    name: "Judith Graves",
    company: null,
  },
  {
    id: 7,
    isActive: true,
    age: 26,
    eyeColor: "blue",
    name: "Hoffman Hess",
    company: "CENTURIA",
  },
  {
    id: 8,
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Sheena Goff",
    company: "MULTRON",
  },
  {
    id: 9,
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Rose Lawrence",
    company: "EVENTIX",
  },
  {
    id: 10,
    isActive: false,
    age: 35,
    eyeColor: "blue",
    name: "Alston Goodman",
    company: "CENTURIA",
  },
  {
    id: 11,
    isActive: true,
    age: 28,
    eyeColor: "brown",
    name: "Nannie Berry",
    company: null,
  },
  {
    id: 12,
    isActive: true,
    age: 27,
    eyeColor: "blue",
    name: "Lynette Jackson",
    company: "CENTURIA",
  },
  {
    id: 13,
    isActive: false,
    age: 23,
    eyeColor: "blue",
    name: "Samantha Garrett",
    company: "EVENTIX",
  },
  {
    id: 14,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Grimes Savage",
    company: "CENTURIA",
  },
  {
    id: 15,
    isActive: false,
    age: 31,
    eyeColor: "green",
    name: "Atkinson Kirby",
    company: null,
  },
  {
    id: 16,
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Jami Burgess",
    company: "CENTURIA",
  },
  {
    id: 17,
    isActive: true,
    age: 31,
    eyeColor: "blue",
    name: "Sallie Albert",
    company: "CENTURIA",
  },
  {
    id: 18,
    isActive: false,
    age: 26,
    eyeColor: "blue",
    name: "Ora Hobbs",
    company: "EVENTIX",
  },
  {
    id: 19,
    isActive: true,
    age: 30,
    eyeColor: "blue",
    name: "Pruitt Sellers",
    company: "CENTURIA",
  },
];

let activeUsers = getActiveUsers(users); //type Tableau de user

function countActiveUsers(_users) {
  let nombreActive = 0;
  for (let i = 0; i < _users.length; i++) {
    if (_users[i].isActive) {
      nombreActive = nombreActive + 1;
    }
  }

  return nombreActive;
}

//console.log(`We currently have ${countActiveUsers(users)} active users.`);

// [1,2,3].push([4,5]) => [1,2,3,4,5]
// [1,2,3] + [4,5] => [1,2,3,4,5]

function getActiveUsers(_users) {
  let activeList = [];

  for (let i = 0; i < _users.length; i++) {
    if (_users[i].isActive === true) {
      activeList.push(_users[i]);
    }
  }

  return activeList;
}

function hasBlueEyes(_users) {
  let blueEyesList = [];

  for (let i = 0; i < _users.length; i++) {
    if (_users[i].eyeColor === "blue") {
      blueEyesList.push(_users[i]);
    }
  }

  return blueEyesList;
}

let blueEyedActiveUsers = hasBlueEyes(activeUsers); //type Tableau de user

/*console.log(
  `Out of our currently ${activeUsers.length} active users, ${blueEyedActiveUsers.length} have blue eyes.`
);*/

/*function getActiveUsers(_users) {

}*/

function getActiveUsersAges() {
  let ageArray = [];

  for (let i = 0; i < activeUsers.length; i++) {
    ageArray.push(activeUsers[i].age);
  }
  return ageArray;
}

function computeAverageNbr(numberArray) {
  let average = 0;
  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
  }
  average = sum / numberArray.length;

  return average;
}

//console.log(getActiveUsersAges(users));

/*console.log(
  `Out of our currently ${
    getActiveUsers(users).length
  } active users, the average age is 
  ${computeAverageNbr(getActiveUsersAges())}.`
);
*/

function getMultronUsers(_user_list) {
  let multronUsers = [];
  for (let i = 0; i < _user_list.length; i++) {
    const currentUser = _user_list[i];

    if (currentUser.company === "MULTRON") {
      multronUsers.push(currentUser);
    }
  }
  return multronUsers;
}

function setMultronToCenturia(_users) {
  let usersToChange = getMultronUsers(_users);
  for (let i = 0; i < usersToChange.length; i++) {
    usersToChange[i].company = "CENTURIA";
  }
}

console.log(
  `${
    getMultronUsers(users).length
  } user companies have been changed from MULTRON to CENTURIA.`
);
setMultronToCenturia(users);

console.log(`there is ${getMultronUsers(users).length} MULTRON LEFT`);

/*
getBrownEyedUsers(_users) => 
  renvoi une collection
 d'utilisateurs avec les yeux marrons
*/
function getBrownEyedUsers(_users) {
  let brownEyedUsers = [];

  for (let i = 0; i < _users.length; i++) {
    if (_users[i].eyeColor === "brown") {
      brownEyedUsers.push(_users[i]);
    }
  }

  return brownEyedUsers;
}
//console.log(getBrownEyedUsers(users));

function excludeCenturiaWorkers(_users) {
  let withoutCenturiaWorkers = [];

  for (let i = 0; i < _users.length; i++) {
    if (_users[i].company !== "CENTURIA") {
      withoutCenturiaWorkers.push(_users[i]);
    }
  }
  return withoutCenturiaWorkers;
}

/*
console.log(
`${excludeCenturiaWorkers(getBrownEyedUsers(users)).length} 
  users with brown eyes do not work at CENTURIA`
);
*/

/*
numberOfUserWith(_user, eyeColor, isActive) => nombre d'elements dans _users 
satisfaisant les conditions des parametres de la fonction.
*/

function numberOfUserWith(_users, eyeColor, isActive) {
  let customUserList = [];

  for (let i = 0; i < _users.length; i++) {
    if (_users[i].eyeColor === eyeColor && _users[i].isActive === isActive) {
      customUserList.push(_users[i]);
    }
  }
  return customUserList.length;
}

console.log(
  `Out of our brown eyed users 
  ${numberOfUserWith(users, "brown", true)}
   are active and 
   ${numberOfUserWith(users, "brown", false)} 
   are inactive`
);

console.log(
  `Out of our green eyed users 
  ${numberOfUserWith(users, "green", true)} 
  are active and 
  ${numberOfUserWith(users, "green", false)} are inactive`
);

console.log(
  `Out of our blue eyed users 
  ${numberOfUserWith(users, "blue", true)}
   are active and 
   ${numberOfUserWith(users, "blue", false)} 
   are inactive`
);

function setLocation(location) {
  return new Promise(resolve => {
    setTimeout(() => resolve(location), 1000);
  });
}

function setEmail(position) {
  return new Promise(resolve => {
    let email = null;
    email = `${position}@guest.com`;
    if (position === 'admin') {
      email = `${position}@admin.com`;
    } else if (position === 'user') {
      email = `${position}@user.com`;
    }
    setTimeout(() => resolve(email), 4000);
  });
}

function checkUser(user) {
  return new Promise((resolve, reject) => {
    const isAdmin = user.email.includes('admin');
    if (!isAdmin) {
      reject(new Error('User is not an Admin!'));
    }
    resolve(user);
  });
}

function getStudentNumbers(id) {
  const studentGroups = {1: 3, 2: 5, 3: 7, 4: 15, 5: 25};
  return Promise.resolve(studentGroups[parseInt(id)]);
}

function checkCountStudents(students) {
  return new Promise((resolve, reject) => {
    if (students.length > data.studentNumbers) {
      reject(new Error("The total number of students exceeded"));
    }
    setTimeout(() => resolve(students), 1000);
  });
}

const data = {};

setLocation('Kharkiv')
  .then(location => {
    data.location = location;
    return data;
  })
  .then(() => {
    return setEmail('admin');
  })
  .then(email => {
    data.email = email;
    return data;
  })
  .then(data => {
    return checkUser(data);
  })
  .then(() => {
    return getStudentNumbers(3);
  })
  .then(studentNumbers => {
    data.studentNumbers = studentNumbers;
    return data;
  })
  .then(() => {
    return checkCountStudents(['Саша','Влад','Юля','Андрей','Богдан','Костя','Игорь']);
  })
  .then(students => {
    data.studentGroup = students;
    return data;
  })
  .catch(error => {error});
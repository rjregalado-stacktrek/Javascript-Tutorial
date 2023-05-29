function letterGrade(grade) {
  if (grade < 0 || grade > 100) {
    return "Invalid grade";
  } else if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

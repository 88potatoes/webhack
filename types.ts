interface Group {
  users: User;
  time_sets: TimeSet[];
}

interface User {
  username: String;
}

interface TimeSet {
  user: User;
  times: number[][]; // contains a list of intervals [start, end] which represents the times they are free
}

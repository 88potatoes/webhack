interface Group {
  users: User;
  time_sets: TimeSet[];
}

interface User {
  username: string;
}

interface TimeSet {
  user: User;
  times: Period[];
}

interface Period {
  date: Date;
  timeblock: number[];
}

export type Todo = {
  name: string;
  status: 'Completed' | 'Pending' | 'Planned';
  date: string;
  description: string | null;
};

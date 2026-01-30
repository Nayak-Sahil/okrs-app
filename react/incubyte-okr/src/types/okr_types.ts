export type KeyResultType = {
  description: string;
  progress: string;
  isCompleted: boolean;
};

export type OkrType = {
  objective: string;
  keyResults: KeyResultType[];
};

export type RandomDogs = {
  message: string[];
  status: string;
};

export type RandomDog = {
  message: string;
  status: string;
};

export type AllDogs = {
  message: Record<string, string[]>;
  status: string;
};

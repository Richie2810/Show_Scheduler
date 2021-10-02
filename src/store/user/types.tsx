export type UserState = {
  theUser: String[];
};

export type UserAction = { type: "user/fetched"; payload: String };

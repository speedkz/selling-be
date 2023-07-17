import * as bcrypt from 'bcrypt';

export const checkMatchPassword = async (password: string, hash: string) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

export const hashString = async (text: string, saltOrRounds = 10) => {
  return await bcrypt.hash(text, saltOrRounds);
};

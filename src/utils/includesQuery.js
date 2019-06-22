export const includesQuery = (query, name) => {
  const regex = new RegExp(query, "gi");
  return regex.test(name);
};

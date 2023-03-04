export const Substring = (text) => {
  if (!text) {
    return " ";
  }

  const maxLength = 16;
  let subst = text.substring(0, 19);

  if (subst.length > maxLength) {
    subst = subst.substring(0, maxLength) + "...";
  }

  return subst;
};

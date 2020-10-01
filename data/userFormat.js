import usersStorage from "./usersStorage.json";

const hashCode = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const intToRGB = (i) => {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
};

const usersWithColors = () => {
  const { users } = usersStorage;
  return users.map((user) => ({
    ...user,
    color: intToRGB(hashCode(user.username)),
  }));
};

export default usersWithColors;

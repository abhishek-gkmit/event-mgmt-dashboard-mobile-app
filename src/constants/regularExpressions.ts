const nameRegEx = '^[a-zA-z ]+$';
const usernameRegEx = '^[a-zA-z_0-9]+$';
const ageRegEx = '^[0-9]{2}$';
const emailRegEx = '^[a-zA-Z0-9_]+@[a-z]+.[a-z]{2,3}$';
const passwordRegEx = '^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$';

export { nameRegEx, usernameRegEx, ageRegEx, emailRegEx, passwordRegEx };

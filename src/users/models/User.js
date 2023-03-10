import {
  generateUniqId,
  makeEveryFirstLetterCapital,
} from "../../utils/algoMethods.js";
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from "../../utils/regex.js";

class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isBusiness;

  constructor(user, users = []) {
    const { address, phone, name, email, password, isAdmin, isBusiness } = user;

    this.#address = this.checkAddress(address);
    this.#phone = this.checkPhone(phone);
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);
    this.#email = this.checkUniqEmail(email, users);
    this.#password = this.checkPassword(password);
    this.#createdAt = new Date();
    this.#isAdmin = isAdmin || false;
    this.#isBusiness = isBusiness || false;
  }

  setName({ first, last }) {
    if (
      typeof first !== "string" ||
      typeof last !== "string" ||
      first.length < 2 ||
      last.length < 2
    )
      throw new Error("Please enter a valid name!");
    return {
      first: makeEveryFirstLetterCapital(first),
      last: makeEveryFirstLetterCapital(last),
    };
  }

  checkPhone(phone) {
    const regex = PHONE_REGEX;
    const isExist = phone.match(regex);
    if (!isExist) throw new Error("Please enter a valid phone number!");
    return phone;
  }

  checkPassword(password) {
    const regex = PASSWORD_REGEX;
    const isExist = regex.test(password);
    if (!isExist)
      throw new Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
  }

  checkUniqEmail(email, users) {
    email.trim();
    const regex = EMAIL_REGEX;
    const isExist = email.match(regex);
    if (!isExist) throw new Error("Please enter a valid email !");

    const user = users.findIndex((user) => user.email === email);
    if (user !== -1) throw new Error("User is already registered!");

    return email;
  }

  changeBizStatus(user) {
    if (user._id !== this.#id && !user.isAdmin)
      throw new Error("User must be the registered user or admin!");
    this.#isBusiness = !this.#isBusiness;
  }

  checkAddress(address) {
    const { state, country, city, street, houseNumber, zip } = address;
    if (
      country.length < 2 ||
      city.length < 2 ||
      street.length < 2 ||
      typeof houseNumber !== "number" ||
      houseNumber <= 0 ||
      typeof zip !== "number" ||
      zip <= 0
    )
      throw new Error("Please enter a valid address");
    return { state: state || "", country, city, street, houseNumber, zip };
  }

  update(user, users) {
    if (typeof user !== "object") throw new Error("Please enter a valid user!");
    if (user._id !== this.#id)
      throw new Error("Only the registered user can make changes!");
    const { address, phone, name, email, isBusiness } = user;
    this.#name = this.setName(name);
    this.#address = this.checkAddress(address);
    this.#phone = this.checkPhone(phone);
    this.#email =
      email === this.#email ? this.#email : this.checkUniqEmail(email, users);
    this.#isBusiness = isBusiness ? isBusiness : this.#isBusiness;
    return this;
  }

  changePassword() {}

  get _id() {
    return this.#id;
  }
  get isAdmin() {
    return this.#isAdmin;
  }
  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }
  get phone() {
    return this.#phone;
  }
  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  get createdAt() {
    return this.#createdAt;
  }
}

export default User;

const test = {
  email: "test@gmail.com",
  password: "Aa12345!",
  address: {
    state: "usa",
    country: "new-york",
    city: "new-york",
    street: "brodway",
    houseNumber: 5,
    zip: 123456,
  },
  phone: "050-0000000",
  name: {
    first: "david",
    last: "yakin",
  },
};

const array = [test];

try {
  const user = new User(test);
  // user.changeBizStatus(user);

  user.update(
    {
      _id: user._id,
      name: { first: "shula", last: "zaken" },
      phone: "054-9999999",
      email: "walla@gmail.com",
      address: {
        state: "",
        country: "Israel",
        city: "Tel-aviv",
        street: "Shoham",
        houseNumber: 5,
        zip: 123456,
      },
    },
    array
  );
  // user.changeBizStatus({ isAdmin: true });
  console.log(user);
} catch (error) {
  console.log(error.message);
}

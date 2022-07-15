import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Piyush",
    lastName: "sharma",
    username: "piyush1",
    password: "piyush",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
  {
    _id: uuid(),
    firstName: "lol",
    lastName: "sharma",
    username: "test@gmail.com",
    password: "test123",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
  {
    _id: uuid(),
    firstName: "user1",
    lastName: "user1",
    username: "user1",
    password: "user1",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
  {
    _id: uuid(),
    firstName: "user2",
    lastName: "user2",
    username: "user2",
    password: "user2",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
  {
    _id: uuid(),
    firstName: "user3",
    lastName: "user3",
    username: "user3",
    password: "user3",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
  {
    _id: uuid(),
    firstName: "user4",
    lastName: "user4",
    username: "user4",
    password: "user4",
    createdAt: formatDate(),
    following:[],
    followers:[],
    bookmarks:[],
    userBio:[],
    updatedAt: formatDate(),
    img:"https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
  },
];

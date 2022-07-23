import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "elon is funny af :))",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "user4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    firstName: "user4",
    lastName: "user4",
    img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png",
    comments: [
      {
        _id: uuid(),
        username: "user1",
        firstName: "user1",
        lastName: "user1",
        text: "true elons hehe",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
      {
        _id: uuid(),
        username: "user2",
        text: "Wow yes!",
        firstName: "user2",
        lastName: "user2",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"

      },
    ],
  },
  {
    _id: uuid(),
    content:
      "this is no twitter",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "user2",
    lastName: "user2",
    username: "user2",
    img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png",
    comments: [
      {
        _id: uuid(),
        username: "user4",
        firstName: "user4",
        lastName: "user4",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
      {
        _id: uuid(),
        username: "piyush",
        firstName: "piyush",
        lastName: "piyush",
        text: "thank god",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "if i let you know, i'm here for you.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "user4",
    firstName: "user4",
    lastName: "user4",
    img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png",
    comments: [
      {
        _id: uuid(),
        username: "user1",
        text: "cause it's you",
        firstName: "user1",
        lastName: "user1",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
      {
        _id: uuid(),
        username: "piyush",
        firstName: "piyush",
        lastName: "piyush",
        text: "and i am in love with you!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

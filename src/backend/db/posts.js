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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        text: "t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut pe",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevno.n-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
      {
        _id: uuid(),
        username: "user2",
        text: "Wow!",
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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        username: "user2",
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
        text: "Wow!",
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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        username: "user4",
        text: "heeeeeeeeeeee",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
      },
      {
        _id: uuid(),
        username: "piyush",
        text: "pheww!",
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

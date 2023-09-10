export const COMMENTS = [
  {
    id: "1",
    name: "John Doe",
    text: "This is a random comment.",
    replies: [
      {
        id: "2",
        name: "Alice Smith",
        text: "A reply to the previous comment.",
        replies: [
          {
            id: "3",
            name: "Bob Johnson",
            text: "A nested reply to Alice's comment.",
            replies: [
              {
                id: "4",
                name: "Eve Brown",
                text: "A deeper nested reply to Bob's comment.",
                replies: [
                  {
                    id: "5",
                    name: "Charlie Wilson",
                    text: "A reply to Eve's comment.",
                    replies: [],
                  },
                  {
                    id: "6",
                    name: "Grace Davis",
                    text: "Another reply to Eve's comment.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            id: "7",
            name: "Sarah Johnson",
            text: "Another reply to Alice's comment.",
            replies: [
              {
                id: "8",
                name: "Michael Wilson",
                text: "A reply to Sarah's comment.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9",
    name: "David Smith",
    text: "Comment by David.",
    replies: [
      {
        id: "10",
        name: "Emily Brown",
        text: "Reply from Emily.",
        replies: [
          {
            id: "11",
            name: "Sophia Adams",
            text: "A reply to Emily's comment.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Michael Wilson",
    text: "Comment from Michael.",
    replies: [
      {
        id: "13",
        name: "Olivia White",
        text: "A reply from Olivia.",
        replies: [
          {
            id: "14",
            name: "James Brown",
            text: "A reply to Olivia's comment.",
            replies: [],
          },
        ],
      },
    ],
  },
];

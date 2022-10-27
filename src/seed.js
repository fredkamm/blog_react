/* eslint-disable no-plusplus */
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'M9iQvfbh9kfUWAJZg0Diq4sRFOg1',
      username: 'fredkamm',
      fullName: 'Fred Kamm',
      emailAddress: 'fredkamm@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'steve',
      fullName: 'Steve Johnson',
      emailAddress: 'steve@gmail.com',
      following: [],
      followers: ['M9iQvfbh9kfUWAJZg0Diq4sRFOg1'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'sammy',
      fullName: 'Sam Smith',
      emailAddress: 'samsmith@gmail.com',
      following: [],
      followers: ['M9iQvfbh9kfUWAJZg0Diq4sRFOg1'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'saquon',
      fullName: 'Saquon Barkley',
      emailAddress: 'saquon@gmail.com.com',
      following: [],
      followers: ['M9iQvfbh9kfUWAJZg0Diq4sRFOg1'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/steve/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'sammy',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'saquon',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}

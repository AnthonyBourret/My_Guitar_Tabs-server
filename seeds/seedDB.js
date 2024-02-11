exports.seed = async (knex) => {

  // Options needed for the seed
  const difficultyOptions = [
      "Beginner",
      "Intermediate",
      "Confirmed",
  ];

  const statusOptions = [
      "To learn",
      "In progress",
      "Learned",
  ];

  const capoOptions = [
      "None",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
  ];

  const NB_USERS = 3;
  const NB_SONGS = 30;
  const NB_TUNINGS = 18;
  const NB_STYLES = 20;

  const { fakerFR: faker } = await import('@faker-js/faker');

  // Delete existing entries
  await knex('song_has_style').del();
  await knex('song').del();
  await knex('user').del();

  // Insert new entries for users & an admin account
  const users = [];
  for (let i = 0; i < NB_USERS; i += 1) {
    users.push({
      id: i + 1,
      username: faker.internet.userName(),
      mail: faker.internet.email(),
      password: faker.internet.password(),
      picture: faker.image.avatar(),
    });
  }

  users.push({
    id: NB_USERS + 1,
    username: 'admin',
    mail: 'admin@gmail.com',
    password: 'admin',
    picture: faker.image.avatar(),
  });

  await knex('user').insert(users);


  // Get the users ids
  const usersRows = await knex.select('id').from('user');
  const usersIds = usersRows.map((users) => users.id);

  // Insert new entries for songs
  const songs = [];
  for (let i = 0; i < NB_SONGS; i += 1) {
    songs.push({
      id: i + 1,
      title: faker.word.words({ min: 2, max: 5 }),
      artist: faker.person.lastName(),
      tab_link: faker.internet.url(),
      lyrics_link: faker.internet.url(),
      comments: faker.lorem.sentences({ min: 1, max: 3 }),
      difficulty: difficultyOptions[faker.number.int(
        { min: 1, max: difficultyOptions.length - 1 },
      )],
      status: statusOptions[faker.number.int(
        { min: 1, max: statusOptions.length - 1 },
      )],
      capo: capoOptions[faker.number.int(
        { min: 1, max: capoOptions.length - 1 },
      )],
      user_id: usersIds[faker.number.int(
        { min: 0, max: usersIds.length - 1 },
      )],
      tuning_id: faker.number.int(
        { min: 1, max: NB_TUNINGS },
      ),
    });
  }

  await knex('song').insert(songs);

  // Get the songs ids
  const songsRows = await knex.select('id').from('song');
  const songsIds = songsRows.map((songs) => songs.id);

  // Insert new entries for the table song_has_style with random number of styles
  const songHasStyle = [];
  for (let i = 0; i < songsIds.length; i += 1) {
    const nbStylesOnSongs = faker.number.int({ min: 1, max: 2 });
    for (let j = 0; j < nbStylesOnSongs; j += 1) {
      songHasStyle.push({
        song_id: songsIds[i],
        style_id: faker.number.int(
          { min: 1, max: NB_STYLES },
        ),
      });
    }
  }

  await knex('song_has_style').insert(songHasStyle);


  knex.destroy();
};

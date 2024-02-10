exports.seed = async (knex) => {

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

const styleOptions = [
    'Rock',
    'Pop',
    'Blues',
    'Jazz',
    'Folk',
    'Country',
    'Metal',
    'Punk',
    'Reggae',
    'Funk',
    'Classical',
    'Heavy Metal',
    'Grunge',
    'Hard Rock',
    'Death Metal',
    'Hip-Hop',
    'Trip-Hop',
    'Progressive Metal',
    'Progressive Rock',
    'Ska',
];

const tuningOptions = [
    'E-A-D-G-B-E',
    'D-A-D-G-B-E',
    'Eb-Ab-Db-Gb-Bb-Eb',
    'Db-Ab-Db-Gb-Bb-Eb',
    'D-G-C-F-A-D',
    'C-G-C-F-A-D',
    'B-Gb-B-E-Ab-Db',
    'A-E-A-D-Gb-A',
    'E-A-E-A-C#-E',
    'B-F#-B-F#-B-D#',
    'C-G-C-G-C-E',
    'D-A-D-F#-A-D',
    'E-B-E-G#-B-E',
    'F-A-C-F-C-F',
    'D-G-D-G-B-D',
    'B-E-A-D-G-B-E',
    'G-D-G-C-F-A-D',
];
  // Use dynamic import() to load the ES Module
  const { fakerFR: faker } = await import('@faker-js/faker');

  // Deletes ALL existing datas > alternative solution
  // await knex.raw('TRUNCATE TABLE user, song, style, tuning, song_has_style CASCADE');


  await knex('song_has_style').del();
  await knex('song').del();
  await knex('user').del();

  const NB_USERS = 3;
  const NB_SONGS = 30;

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


  const usersRows = await knex.select('id').from('user');
  const usersIds = usersRows.map((users) => users.id);

  const songs = [];
  for (let i = 0; i < NB_SONGS; i += 1) {
    songs.push({
      id: i + 1,
      title: faker.lorem.words({ min: 2, max: 5 }),
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
        { min: 1, max: usersIds.length - 1 },
      )],
      tuning_id: faker.number.int(
        { min: 1, max: tuningOptions.length - 1 },
      ),
    });
  }

  await knex('song').insert(songs);

  const songsRows = await knex.select('id').from('song');
  const songsIds = songsRows.map((songs) => songs.id);

  const songHasStyle = [];
  for (let i = 0; i < songsIds.length; i += 1) {
    const nbStyles = faker.number.int({ min: 1, max: 2 });
    for (let j = 0; j < nbStyles; j++) {
      songHasStyle.push({
        song_id: songsIds[i],
        style_id: faker.number.int(
          { min: 1, max: styleOptions.length - 1 },
        ),
      });
    }
  }

  await knex('song_has_style').insert(songHasStyle);


  knex.destroy();
};

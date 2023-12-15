# Conception Merise : MLD

USER (
    id INTEGER,
    username TEXT,
    mail TEXT,
    password TEXT,
    picture TEXT,
    created_at TEXT,
    updated_at TEXT
)

SONG (
    id INTEGER,
    title TEXT,
    artist TEXT,
    tab_link TEXT,
    lyrics_link TEXT,
    comments TEXT,
    difficulty TEXT,
    status TEXT,
    capo TEXT,
    #user_id(id) INTEGER,
    #tuning_id(id) INTEGER,
    created_at TEXT,
    updated_at TEXT
)

STYLE (
    id INTEGER,
    name TEXT,
    created_at TEXT,
    updated_at TEXT
)

TUNING (
    id INTEGER,
    name TEXT,
    strings TEXT,
    created_at TEXT,
    updated_at TEXT
)

SONG_HAS_STYLE (
    #song_id(id) INTEGER,
    #style_id(id) INTEGER,
    created_at TEXT,
    updated_at TEXT
)

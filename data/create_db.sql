BEGIN;

DROP TABLE IF EXISTS "user",
"song",
"style",
"tuning",
"song_has_style";

CREATE TABLE "user" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "username" text NOT NULL,
  "mail" text NOT NULL,
  "password" text NOT NULL,
  "picture" text NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "song" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL,
    "artist" text NOT NULL,
    "tab_link" text NULL,
    "lyrics_link" text NULL,
    "comments" text NULL,
    "difficulty" text NOT NULL,
    "status" text NOT NULL,
    "capo" text NOT NULL,
    "user_id" integer NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "tuning_id" integer NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE "style" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE "tuning" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "strings" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE "song_has_style" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "song_id" integer NOT NULL REFERENCES "song"("id") ON DELETE CASCADE,
    "style_id" integer NOT NULL REFERENCES "style"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

ALTER TABLE "song" ADD FOREIGN KEY ("tuning_id") REFERENCES "tuning"("id") ON DELETE CASCADE;

COMMIT;

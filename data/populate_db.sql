BEGIN;

INSERT INTO "user" ("id", "username", "mail", "password") VALUES
(1, 'admin', 'admin@admin.com', 'admin');

INSERT INTO "style" ("id", "name") VALUES
(1, 'Rock'),
(2, 'Pop'),
(3, 'Blues'),
(4, 'Jazz'),
(5, 'Folk'),
(6, 'Country'),
(7, 'Metal'),
(8, 'Punk'),
(9, 'Reggae'),
(10, 'Soul'),
(11, 'Funk'),
(12, 'Electronic'),
(13, 'Classical'),
(16, 'Heavy Metal'),
(17, 'Grunge'),
(18, 'Alternative Metal'),
(19, 'Alternative Rock'),
(20, 'Stoner'),
(21, 'Hard Rock'),
(22, 'Death Metal'),
(23, 'Flamenco'),
(24, 'Hip-Hop'),
(25, 'Pop-Rock'),
(26, 'Trip-Hop'),
(27, 'Progressive Metal'),
(28, 'Progressive Rock'),
(29, 'Metalcore'),
(30, 'Indie'),
(31, 'Acoustic'),
(32, 'Fusion'),
(33, 'Rap'),
(34, 'Trash Metal'),
(35, 'Ska'),
(36, 'Indus'),
(37, 'Punk Hardcore'),
(38, 'Post-Rock'),
(39, 'Neo-Metal');


INSERT INTO "tuning" ("id", "name", "strings") VALUES
(1, 'Standard', 'E-A-D-G-B-E'),
(2, 'Drop D', 'D-A-D-G-B-E'),
(3, '1/2 step down', 'Eb-Ab-Db-Gb-Bb-Eb'),
(4, 'Drop Db', 'Db-Ab-Db-Gb-Bb-Eb'),
(5, '1 step down', 'D-G-C-F-A-D'),
(6, 'Drop C', 'C-G-C-F-A-D'),
(7, 'Drop B','B-Gb-B-E-Ab-Db'),
(8, 'Drop A', 'A-E-A-D-Gb-A'),
(9, 'Open A', 'E-A-E-A-C#-E'),
(10, 'Open A (alt.)', 'E-A-C#-E-A-C#'),
(11, 'Open B', 'B-F#-B-F#-B-D#'),
(12, 'Open B (alt.)', 'F#-B-D#-F#-B-D#'),
(13, 'Open C', 'C-G-C-G-C-E'),
(14, 'Open D', 'D-A-D-F#-A-D'),
(15, 'Open E', 'E-B-E-G#-B-E'),
(16, 'Open F', 'F-A-C-F-C-F'),
(17, 'Open G', 'D-G-D-G-B-D'),
(18, 'Standard - 7 strings', 'B-E-A-D-G-B-E'),
(19, 'Drop A - 7 strings', 'A-E-A-D-G-B-E'),
(20, 'Drop G - 7 strings', 'G-D-G-C-F-A-D');


COMMIT;
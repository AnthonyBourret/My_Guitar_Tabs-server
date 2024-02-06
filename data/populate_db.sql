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
(10, 'Funk'),
(11, 'Classical'),
(12, 'Heavy Metal'),
(13, 'Grunge'),
(14, 'Hard Rock'),
(15, 'Death Metal'),
(16, 'Hip-Hop'),
(17, 'Trip-Hop'),
(18, 'Progressive Metal'),
(19, 'Progressive Rock'),
(20, 'Ska'),


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
(10, 'Open B', 'B-F#-B-F#-B-D#'),
(11, 'Open C', 'C-G-C-G-C-E'),
(12, 'Open D', 'D-A-D-F#-A-D'),
(13, 'Open E', 'E-B-E-G#-B-E'),
(14, 'Open F', 'F-A-C-F-C-F'),
(15, 'Open G', 'D-G-D-G-B-D'),
(16, 'Standard - 7 strings', 'B-E-A-D-G-B-E'),
(17, 'Drop A - 7 strings', 'A-E-A-D-G-B-E'),
(18, 'Drop G - 7 strings', 'G-D-G-C-F-A-D');


COMMIT;
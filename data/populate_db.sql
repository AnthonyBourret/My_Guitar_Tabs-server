BEGIN;

INSERT INTO "style" ("id", "name") VALUES
(1, 'Blues'),
(2, 'Classical'),
(3, 'Country'),
(4, 'Death Metal'),
(5, 'Electro'),
(6, 'Folk'),
(7, 'Funk'),
(8, 'Grunge'),
(9, 'Hard Rock'),
(10, 'Heavy Metal'),
(11, 'Hip-Hop'),
(12, 'Jazz'),
(13, 'Metal'),
(14, 'Pop'),
(15, 'Progressive Metal'),
(16, 'Progressive Rock'),
(17, 'Punk'),
(18, 'Reggae'),
(19, 'Rock'),
(20, 'Trip-Hop'),
(21, 'Ska');


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
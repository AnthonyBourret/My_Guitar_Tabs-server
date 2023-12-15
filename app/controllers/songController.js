const { Song, Style, Tuning } = require('../models');
const SongHasStyle = require('../models/Song_has_style');

const songController = {
    // Function to find one song, with its styles and tuning
    async findOneSong(req, res) {
        try {
            const songId = req.params.id;
            const song = await Song.findByPk(songId, {
                include: [
                    {model: Style},
                    {model: Tuning},
                ]
            });
            // If song is not found, return 404 error
            if (!song) {
                return res.status(404).json({error: 'Song not found'});
            }
            // The song informations are sent as a JSON object with its styles and tuning included
            res.json(song);

        } catch (error) {
            res.status(500).json(error.toString());
        }
    },
    // Function to get all styles and tunings (for the select inputs)
    async getInfos(req, res) {
        try {
            const styles = await Style.findAll();
            const tunings = await Tuning.findAll();

            // If styles or tunings are not found, return 404 error
            if (!styles || !tunings) {
                return res.status(404).json({error: 'Data not found'});
            }

            // The styles and tunings are sent as a single JSON object
            res.json({
                styles,
                tunings,
            });

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // Function to create a song
    async createOneSong(req, res) {
        try {
            const userId = req.params.id;
            
            const {
                title,
                artist,
                tab_link,
                lyrics_link,
                comments,
                difficulty,
                status,
                capo,
                tuning_id,
                firstStyle_id,
                secondStyle_id,
            } = req.body;
    
            const song = await Song.create({
                title,
                artist,
                tab_link,
                lyrics_link,
                comments,
                difficulty,
                status,
                capo,
                user_id: userId,
                tuning_id,
            });

            // To create the song_has_style rows, we need to check if the user has selected 1 or 2 styles
            // If the user has selected only one style, we create one row :
            if (!secondStyle_id) {
                console.log('test1');
                await SongHasStyle.create({ song_id: song.id, style_id: firstStyle_id })
    
            } else {
                console.log('test2');
                await SongHasStyle.bulkCreate([
                    { song_id: song.id, style_id: firstStyle_id },
                    { song_id: song.id, style_id: secondStyle_id },
                ]);
            }

            if (!song) {
                return res.status(404).json({error: 'Error while creating song'});
            }
            res.json("Song added successfully");
            
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // Function to update a song
    async updateOneSong(req, res) {
        try {
            const songId = req.params.id;
            const {
                title,
                artist,
                tab_link,
                lyrics_link,
                comments,
                difficulty,
                status,
                capo,
                tuning_id,
            } = req.body;
    
            const updatedSong = await Song.findByPk(songId);
    
            updatedSong.update({
                title,
                artist,
                tab_link,
                lyrics_link,
                comments,
                difficulty,
                status,
                capo,
                tuning_id,
            });

            if (!updatedSong) {
                return res.status(404).json({error: 'Error while updating song'});
            }

            res.json("Modifications saved");

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    // Function to delete a song
    async deleteOneSong(req, res) {
        try {
            const songId = req.params.id;
            const song = await Song.findByPk(songId);
            // If song is not found, return 404 error
            if (!song) {
                return res.json({error: 'Song not found'});
            }
            await song.destroy();
            res.json("Song deleted successfully");
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = songController;
const SongHasStyle = require('../models/Song_has_style');

    const styleController = {
    // Function to update the styles of a song
    async updateSongStyles(req, res) {
        try {
            const songId = req.params.id;
            const styles = await SongHasStyle.findAll({
                where: {
                    song_id: songId,
                }
            })
            // If styles are not found, return 404 error
            if (!styles) {
                return res.status(404).json({error: 'Not found'});
            }

            const {
                firstStyle_id,
                secondStyle_id,
            } = req.body;

            // If the user has selected only one style, and the song has only one style we update the existing row :
            if (styles.length === 1 && !secondStyle_id) {
                await styles[0].update({ style_id: firstStyle_id });
            }
            // If the user has selected two styles, and the song has only one style we update the first row and create the second one :
            if (styles.length === 1 && secondStyle_id) {
                await styles[0].update({ style_id: firstStyle_id });
                await SongHasStyle.create({ song_id: songId, style_id: secondStyle_id });
            }
            // If the user has selected only one style, and the song has two styles we only update the first row :
            if (styles.length === 2 && !secondStyle_id) {
                await styles[0].update({ style_id: firstStyle_id });
            }
            // If the user has selected two styles, and the song has two styles we update the two rows :
            if (styles.length === 2 && secondStyle_id) {
                await styles[0].update({ style_id: firstStyle_id });
                await styles[1].update({ style_id: secondStyle_id });
            }

            res.json("Styles updated successfully");

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    // Function to delete a style from a song
    async deleteStyle(req, res) {
        try {
            const songId = req.params.id;
            const { styleId } = req.body;
            const style = await SongHasStyle.findOne({
                where: { 
                    song_id: songId, 
                    style_id: styleId
                }
            });
            // If style is not found, return 404 error
            if (!style) {
                return res.status(404).json({error: 'Not found'});
            }

            await style.destroy();

            res.json("Style deleted successfully");

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = styleController;
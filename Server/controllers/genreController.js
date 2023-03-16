const db = require('../src/db')

class genreController {
    async create(req, res) {
        try {
            const { name } = req.body
            const genre = await db.query('INSERT INTO genres (name) VALUES ($1) RETURNING *', [name])
            return res.send(genre.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }

    async get(req, res) {
        try {
            if (req.params.id) {
                const genre = await db.query('SELECT * FROM genres WHERE id = $1', [req.params.id])
                return res.send(genre.rows[0])
            }
            const genres = await db.query('SELECT * FROM genres')
            return res.send(genres.rows)
        } catch (e) {
            return res.send(e.message)
        }
    }

    async update(req, res) {
        try {
            const { id, name } = req.body
            const genre = await db.query('UPDATE genres SET name = $1 WHERE id = $2 RETURNING *', [name, id])
            return res.send(genre.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const genre = await db.query('DELETE FROM genres WHERE id = $1 RETURNING *', [id])
            return res.send(genre.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }
}

module.exports = new genreController();
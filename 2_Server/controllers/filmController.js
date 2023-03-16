const db = require('../src/db')

class filmController {
    async create(req, res) {
        try {
            const { name, year, genres } = req.body
            const film = await db.query('INSERT INTO films (name, year) VALUES ($1, $2) RETURNING *', [name, year])
            if (genres) {
                for (let elem of genres)
                    await db.query('INSERT INTO film_genre (filmId, genreId) VALUES ($1, $2)', [film.rows[0].id, elem])
            }
            return res.send(film.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }

    async get(req, res) {
        try {
            if (req.params.id) {
                const film = await db.query('SELECT * FROM films WHERE id = $1', [req.params.id])
                const genres = await db.query('SELECT genreId FROM film_genre WHERE filmId = $1', [req.params.id])
                film.rows[0].genres = []
                for (let elem of genres.rows)
                    film.rows[0].genres.push(elem.genreid)
                return res.send(film.rows[0])
            }
            const films = await db.query('SELECT * FROM films')
            return res.send(films.rows)
        } catch (e) {
            return res.send(e.message)
        }
    }

    async update(req, res) {
        try {
            const { id, name, year, genres } = req.body
            const film = await db.query('UPDATE films SET name = $1, year = $2 WHERE (id = $3) RETURNING *', [name, year, id])
            if (genres) {
                for (let elem of genres)
                    await db.query('INSERT INTO film_genre (filmId, genreId) VALUES ($1, $2)', [id, elem])
            }
            return res.send(film.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const film = await db.query('DELETE FROM films WHERE id = $1 RETURNING *', [id])
            return res.send(film.rows[0])
        } catch (e) {
            return res.send(e.message)
        }
    }
}

module.exports = new filmController();
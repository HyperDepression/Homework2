module.exports = (app) => (req, res) => {
    let body = ''
    req.on('data', (data) => {
        body += data
    })
    req.on('end', () => {
        if (body) req.body = JSON.parse(body)
        const emitted = app.emitter.emit(app._getRouteMask(req.pathname, req.method), req, res)
        if (!emitted) {
            res.end('Wrong route')
        }
    })
}
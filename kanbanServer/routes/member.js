const router = require('express').Router();

router.use((req, res) => {
    return res.json(req.body);
});

module.exports = router;
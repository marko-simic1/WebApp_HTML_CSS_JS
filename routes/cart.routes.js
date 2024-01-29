var expres = require('express');
const router = expres.Router();
var data = require('../data/mydata.js');

router.get("/kosara", (req, res) => {
    res.render('cart', {
        title: 'kosara',
        cart: req.session.kosarica,
        global: req.session.count,
        data: data.categories
    });
});

router.get('/remove/:id([0-9]{1,10})', (req, res) => {

    let id_num = parseInt(req.params.id);
    var prod;

    for (let cat of data.categories) {
        if (cat.id == parseInt(id_num / 10)) {
            for (let product of cat.products) {
                if (product.id == id_num) prod = product;
            }
        }
    }
    if (!req.session.kosarica) req.session.kosarica = {};
    
    if (!req.session.count || req.session.count < 0) req.session.count = 0;
    else req.session.count -= 1;
    
    if (!req.session.kosarica[prod.id + ' - ' + prod.name] || req.session.kosarica[prod.id + ' - ' + prod.name] === 1) 
        delete req.session.kosarica[prod.id + ' - ' + prod.name];
    else req.session.kosarica[prod.id + ' - ' + prod.name] -= 1;
    
    res.redirect("/cart/kosara");

});

router.get('/add/:id([0-9]{1,10})', (req, res) => {

    let id_num = parseInt(req.params.id);
    var prod;

    for (let cat of data.categories) {
        if (cat.id == (parseInt(id_num / 10))) {
            for (let product of cat.products) {

                if (product.id == id_num) prod = product;

            }
        }
    }

    if (!req.session.count) req.session.count = 0;
    if (!req.session.kosarica) req.session.kosarica = {};
    
    if (!req.session.kosarica[prod.id + ' - ' + prod.name]) req.session.kosarica[prod.id + ' - ' + prod.name] = 1;
    else req.session.kosarica[prod.id + ' - ' + prod.name] += 1;

    req.session.count += 1;
    var str = '/home/getProducts/' + parseInt(id_num / 10);

    if (req.headers.referer.includes('home')) res.redirect(str);
    else res.redirect('/cart/kosara');
    
})

module.exports = router;

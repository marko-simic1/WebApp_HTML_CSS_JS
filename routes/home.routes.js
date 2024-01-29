var expres = require('express');
const router = expres.Router();
var data = require('../data/mydata.js');

router.get('/',(req,res) =>{
    res.render('naslovnica',{
        title: 'Naslovnica',
        data: data,
        global: req.session.count
    })
})

router.get('/getCategories',(req,res) =>{
    res.redirect('/home/getProducts/1');
})

router.get('/getProducts/:id([0-9]{1,10})', (req,res)=>{

    let id_num = req.params.id, cat;

    for(let categorie of data.categories){
        if(categorie.id == id_num){
            cat= categorie.name;
            break;
        }
    }

    const str = data.categories.find((k)=>k.name === cat);
    if(cat){
        res.render('home',{
            title: cat,
            data: data,
            products :str,
            sesija: req.session,
            global: req.session.count
        });
    }else{
        res.status(404).send('nothing found!');
    }
    
});

module.exports = router;
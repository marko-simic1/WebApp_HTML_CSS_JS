const data = {
    "website": "Hrana",
    "categories": [
        { 
            "name" : "Voće",
            "image" : "/images/voce/voceipovrce.jpg",
            "id":"1",
            "products" : [
                {"name" : "Banane 1kg", "image" : "/images/voce/banana.jpg", "dodatnaslika": "/images/ikona1.png", "id":"11"},
                {"name" : "Breskva 1kg", "image" : "/images/voce/breskva.jpg", "dodatnaslika": "/images/ikona1.png", "id":"12"},
                {"name" : "Jabuka 1kg", "image" : "/images/voce/jabuka.jpg", "dodatnaslika": "/images/ikona1.png", "id":"13"},
                {"name" : "Jagode 1kg", "image" : "/images/voce/jagode.jpg", "dodatnaslika": "/images/ikona1.png", "id":"14"},
                {"name" : "Šumsko voće 1kg", "image" : "/images/voce/sumsko.jpg", "dodatnaslika": "/images/ikona1.png", "id":"15"}    
            ]
        },
        { 
            "name" : "Meso i perad",
            "image" : "/images/meso/meso.jpg",
            "id":"2",
            "products" : [
                {"name" : "Biftek 250g", "image" : "/images/meso/biftek.jpg", "dodatnaslika": "/images/ikona1.png", "id":"21"},
                {"name" : "Janjetina 1kg", "image" : "/images/meso/janjetina.jpg", "dodatnaslika": "/images/ikona1.png", "id":"22"},
                {"name" : "Piletina 1kg", "image" : "/images/meso/piletina.jpg", "dodatnaslika": "/images/ikona1.png", "id":"23"},
                {"name" : "Puretina 1kg", "image" : "/images/meso/puretina.jpg", "dodatnaslika": "/images/ikona1.png", "id":"24"},
                {"name" : "Svinjetina 1kg", "image" : "/images/meso/svinjetina.jpg", "dodatnaslika": "/images/ikona1.png", "id":"25"}
            ]
        },
        {
            "name" : "Mliječni proizvod",
            "image" : "/images/mlijecni/mlijecniproizvodi.jpg",
            "id":"3",
            "products" : [
                {"name" : "Jogurt 1l", "image" : "/images/mlijecni/jogurt.jpg", "dodatnaslika": "/images/ikona1.png", "id":"31"},
                {"name" : "Kefir 1l", "image" : "/images/mlijecni/kefir.jpg", "dodatnaslika": "/images/ikona1.png", "id":"32"},
                {"name" : "Maslac 25og", "image" : "/images/mlijecni/maslo.jpg", "dodatnaslika": "/images/ikona1.png", "id":"33"},    
                {"name" : "Mlijeko 1l", "image" : "/images/mlijecni/mlijeko.jpg", "dodatnaslika": "/images/ikona1.png", "id":"34"},
                {"name" : "Sir 500g", "image" : "/images/mlijecni/sir.jpg", "dodatnaslika": "/images/ikona1.png", "id":"35"}    

                
            ]
        },
        {
            "name" : "Pekarski proizvodi",
            "image" : "/images/pekara/pekarskiproizvodi.jpg",
            "id":"4",
            "products" : [
                {"name" : "Francuz 1kom", "image" : "/images/pekara/francuz.jpg", "dodatnaslika": "/images/ikona1.png", "id":"41"},
                {"name" : "Kroasan 1kom", "image" : "/images/pekara/kroasan.jpg", "dodatnaslika": "/images/ikona1.png", "id":"42"},
                {"name" : "Pecivo 1kom", "image" : "/images/pekara/pecivo.jpg", "dodatnaslika": "/images/ikona1.png", "id":"43"},
                {"name" : "Pita 1kom", "image" : "/images/pekara/pita.jpg", "dodatnaslika": "/images/ikona1.png", "id":"44"},
                {"name" : "Pogača 1kom", "image" : "/images/pekara/pogaca.jpg", "dodatnaslika": "/images/ikona1.png", "id":"45"}    

                
            ]
        },
        {
            "name" : "Bezalkoholna pića",
            "image" : "/images/bezalkohol/bezalkoholnapica.jpg",
            "id":"5",
            "products" : [
                {"name" : "Breskva 0.5l", "image" : "/images/bezalkohol/breskva.jpg", "dodatnaslika": "/images/ikona1.png", "id":"51"},
                {"name" : "Jabuka 0.5l", "image" : "/images/bezalkohol/jabuka.jpg", "dodatnaslika": "/images/ikona1.png", "id":"52"},
                {"name" : "Cola 0.5l", "image" : "/images/bezalkohol/cola.jpg", "dodatnaslika": "/images/ikona1.png", "id":"53"},
                {"name" : "Limunada 0.5l", "image" : "/images/bezalkohol/limunada.jpg", "dodatnaslika": "/images/ikona1.png", "id":"54"},
                {"name" : "Naranča 0.5l", "image" : "/images/bezalkohol/naranca.jpg", "dodatnaslika": "/images/ikona1.png", "id":"55"}    

                
            ]
        },
        {
            "name" : "Povrće",
            "image" : "/images/povrce/povrce.jpg",
            "id":"6",
            "products" : [
                {"name" : "Kapula 500g", "image" : "/images/povrce/kapula.jpg", "dodatnaslika": "/images/ikona1.png", "id":"61"},
                {"name" : "Krastavac 500g", "image" : "/images/povrce/krastavac.jpg", "dodatnaslika": "/images/ikona1.png", "id":"62"},
                {"name" : "Krumpir 1kg", "image" : "/images/povrce/krumpir.jpg", "dodatnaslika": "/images/ikona1.png", "id":"63"},
                {"name" : "Rajčica 500g", "image" : "/images/povrce/poma.jpg", "dodatnaslika": "/images/ikona1.png", "id":"64"},
                {"name" : "Salata 500g", "image" : "/images/povrce/salata.jpg", "dodatnaslika": "/images/ikona1.png", "id":"65"}    

                
            ]
        },
        {
            "name" : "Kave i čajevi",
            "image" : "/images/kave/kaveicajevi.jpg",
            "id":"7",
            "products" : [
                {"name" : "Crni 250g", "image" : "/images/kave/crni.jpg", "dodatnaslika": "/images/ikona1.png", "id":"71"},
                {"name" : "Kamilica 250g", "image" : "/images/kave/kamilica.jpg", "dodatnaslika": "/images/ikona1.png", "id":"72"},
                {"name" : "Kava 250g", "image" : "/images/kave/kava.jpg", "dodatnaslika": "/images/ikona1.png", "id":"73"},
                {"name" : "Matcha 250g", "image" : "/images/kave/matcha.jpg", "dodatnaslika": "/images/ikona1.png", "id":"74"},
                {"name" : "Zeleni 250g", "image" : "/images/kave/zeleni.jpg", "dodatnaslika": "/images/ikona1.png", "id":"75"}    

                
            ]
        },
        {
            "name" : "Začini i umaci",
            "image" : "/images/zacini/zacini.jpg",
            "id":"8",
            "products" : [
                {"name" : "Ketchup 500g", "image" : "/images/zacini/ketchup.jpg", "dodatnaslika": "/images/ikona1.png", "id":"81"},
                {"name" : "Majoneza 500g", "image" : "/images/zacini/majoneza.jpg", "dodatnaslika": "/images/ikona1.png", "id":"82"},
                {"name" : "Papar 250g", "image" : "/images/zacini/papar.jpg", "dodatnaslika": "/images/ikona1.png", "id":"83"},
                {"name" : "Senf 500g", "image" : "/images/zacini/senf.jpg", "dodatnaslika": "/images/ikona1.png", "id":"84"},
                {"name" : "Sol 250g", "image" : "/images/zacini/sol.jpg", "dodatnaslika": "/images/ikona1.png", "id":"85"}    

                
            ]
        },
        {
            "name" : "Deserti i slatkiši",
            "image" : "/images/deserti/deserti.jpg",
            "id":"9",
            "products" : [
                {"name" : "Čokolada 250g", "image" : "/images/deserti/cokolada.jpg", "dodatnaslika": "/images/ikona1.png", "id":"91"},
                {"name" : "Keksi 250g", "image" : "/images/deserti/keks.jpg", "dodatnaslika": "/images/ikona1.png", "id":"92"},
                {"name" : "Muffin 1kom", "image" : "/images/deserti/muffin.jpg", "dodatnaslika": "/images/ikona1.png", "id":"93"},
                {"name" : "Sladoled 250g", "image" : "/images/deserti/sladoled.jpg", "dodatnaslika": "/images/ikona1.png", "id":"94"},
                {"name" : "Torta 500g", "image" : "/images/deserti/torta.jpg", "dodatnaslika": "/images/ikona1.png", "id":"95"}    

                
            ]
        },
        {
            "name" : "Riba",
            "image" : "/images/riba/riba.jpg",
            "id":"10",
            "products" : [
                {"name" : "Losos 250g", "image" : "/images/riba/losos.jpg", "dodatnaslika": "/images/ikona1.png", "id":"101"},
                {"name" : "Škampi 300g", "image" : "/images/riba/skamp.jpg", "dodatnaslika": "/images/ikona1.png", "id":"102"},
                {"name" : "Škarpina 250g", "image" : "/images/riba/skarpina.jpg", "dodatnaslika": "/images/ikona1.png", "id":"103"},
                {"name" : "Losos 250g", "image" : "/images/riba/losos.jpg", "dodatnaslika": "/images/ikona1.png", "id":"104"},
                {"name" : "Tilapija 250g", "image" : "/images/riba/tilapija.jpg", "dodatnaslika": "/images/ikona1.png", "id":"105"}    

                
            ]
        }
    ]
}


module.exports = data;
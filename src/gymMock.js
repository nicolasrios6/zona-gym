const gimnasios = [
    {
        // Info p list
        name: 'SportClub Shopping',
        img: 'gimnasioShopping.jpeg',
        zone: 'Guaymallén',
        id: 1,
        map: 'https://goo.gl/maps/EUAe89vC5rKRB4VSA',
        calendar1: 'Lunes a Viernes: 7 a 22hs',
        calendar2: 'Sábados: 9 a 18hs',
        calendar3: 'Domingos y feriados: cerrado',

        // Info p detail
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.930049307075!2d-68.80197272350831!3d-32.900017669536574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0fb2795c70a5%3A0x6cefaa9393826ca5!2sSportClub%20Mendoza!5e0!3m2!1ses!2sar!4v1668786955060!5m2!1ses!2sar",
        address: 'Boulevard Perez Cuesta 3280, Guaymallén',
        phone: 2617683606,
        email: 'info.mendozaplaza@sportclub.com.ar',
        slide1: 'gimnasioShopping.jpeg',
        slide2: 'slideShopping2.jpg',
        slide3 : 'slideShopping3.jpg',
        activities: [
            {name: 'Musculación', id: 1},
            {name: 'Cycle', id: 2},
            {name: 'Funcional', id: 3},
            {name: 'Fitness', id: 4},
            {name: 'Yoga Pilates', id: 5},
            {name: 'Combate', id: 6},
        ]
    },
    {
        // Info p list
        name: 'Sportclub Palmares',
        img: 'gimnasioPalmares.jpeg',
        zone: 'Godoy Cruz',
        id:2,
        map: 'https://g.page/PalmaresMall?share',
        calendar1: 'Lunes a Viernes: 7 a 22hs',
        calendar2: 'Sábados: 9 a 21hs',
        calendar3: 'Domingos y feriados: cerrado',
        // Info p detail
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8347516553413!2d-68.85926909999999!3d-32.955372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bb34d7221c9%3A0x5bd3675cdf1dd052!2sPalmares!5e0!3m2!1ses!2sar!4v1669065967599!5m2!1ses!2sar",
        address: 'Palmares Open Mall, Godoy Cruz',
        phone: 2617460175,
        email: 'info.mendozapalmares@sportclub.com.ar',
        slide1: 'slidePalmares1.jpeg',
        slide2: 'slidePalmares2.jpeg',
        slide3 : 'gimnasioPalmares.jpeg',
        activities: [
            {name: 'Musculación', id: 1},
            {name: 'Funcional', id: 2},
            {name: 'Cycle', id: 3},
            {name: 'Fitness', id: 4},
            {name: 'Yoga Pilates', id: 5},
            {name: 'Combate', id: 6},
            {name: 'Outdoor', id: 7},
        ]
    },
    {
        // Info p list
        name: 'Sportclub Chacras',
        img: 'gimnasioACA.jpeg',
        zone: 'Luján de Cuyo',
        id:3,
        map: 'https://goo.gl/maps/UYD8cb1dSrUPjjdY7',
        calendar1: 'Lunes a Viernes: 7 a 22hs',
        calendar2: 'Sábados: 9 a 13hs',
        calendar3: 'Domingos y feriados: cerrado',
        // Info p detail
        iframe:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13387.304207252393!2d-68.8792114!3d-32.9819908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9ad9a8a9c2567a8!2sChacras%20Indoors!5e0!3m2!1ses!2sar!4v1669066065551!5m2!1ses!2sar",
        address: 'Besares 1214, Chacras de Coria, Luján de Cuyo',
        phone: 2613604881,
        email: 'chacras.indoors.acm@gmail.com',
        slide1: 'slideACA1.jpeg',
        slide2 : 'slideACA2.jpg',
        slide3: 'gimnasioACA.jpeg',
        activities: [
            {name: 'Cardio', id: 1},
            {name: 'Musculación', id: 2},
            {name: 'Funcional', id: 3},
            {name: 'Pileta', id: 4},
        ]
    },
    {
        // Info p list
        name: 'Indalo',
        img: 'gimnasioIndalo.jpeg',
        zone: 'Ciudad',
        id:4,
        map: 'https://goo.gl/maps/hsXW6Q8Eu4rHjDoQ7',
        calendar1: 'Lunes, Miercoles y Viernes: 7 a 21hs',
        calendar2: 'Martes y Jueves: 8 a 21hs',
        calendar3: 'Sábados: 9 a 13hs',
        // Info p detail
        iframe:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.019213450403!2d-68.8626456!3d-32.8914308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3646065d1b4e8d13!2s%C3%8DNDALO%20Actividad%20F%C3%ADsica%20Saludable!5e0!3m2!1ses!2sar!4v1670371559648!5m2!1ses!2sar",
        address: 'Av Boulogne Sur Mer 788, Mendoza',
        phone: 2614238217,
        email: 'jp.garciaechegaray@gmail.com',
        slide1: 'slideIndalo1.jpeg',
        slide2 : 'slideIndalo2.jpg',
        slide3: 'slideIndalo3.jpg',
        activities: [
            {name: 'Aeróbico', id: 1},
            {name: 'Rehabilitación', id: 2},
            {name: 'Deportivo', id: 3},
            {name: 'Cycle', id: 4},
        ]
    },
    {
        // Info p list
        name: 'Club de Chacras',
        img: 'gimnasioIndalo.jpeg',
        zone: 'Ciudad',
        id:4,
        map: 'https://goo.gl/maps/hsXW6Q8Eu4rHjDoQ7',
        calendar1: 'Lunes, Miercoles y Viernes: 7 a 21hs',
        calendar2: 'Martes y Jueves: 8 a 21hs',
        calendar3: 'Sábados: 9 a 13hs',
        // Info p detail
        iframe:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13388.272866319785!2d-68.8761794!3d-32.975602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee290af880a06a91!2sClub%20de%20Chacras!5e0!3m2!1ses!2sar!4v1670426423378!5m2!1ses!2sar",
        address: 'Av Boulogne Sur Mer 788, Mendoza',
        phone: 2614238217,
        email: 'jp.garciaechegaray@gmail.com',
        slide1: 'slideIndalo1.jpeg',
        slide2 : 'slideIndalo2.jpg',
        slide3: 'slideIndalo3.jpg',
        activities: [
            {name: 'Aeróbico', id: 1},
            {name: 'Rehabilitación', id: 2},
            {name: 'Deportivo', id: 3},
            {name: 'Cycle', id: 4},
        ]
    },

]

export default gimnasios
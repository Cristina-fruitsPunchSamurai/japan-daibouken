import tokyo from '../assets/tokyo.webp';
import osaka from '../assets/osaka.webp';
import kyoto from '../assets/kyoto.webp';

const planning = [
    {
        id:1,
        image : tokyo,
        city : 'Tokyo',
        day: 'Dimanche',
        date : '28 4月 2024',
        hotel: 'Via inn Akihabara - 秋葉原駅 Akihabara',
        tags: ['#arrivée', '#jet-lag', '#découverte', '#otaku', '#balade'],
        morning :
        {
            spots : ['Aéroport Haneda', 'Hôtel'],
            description : "Depuis l'aéroport il faut prendre le Tokyo Monorail en jusqu'à Hamamatsucho 浜松町 (3€ environ) et ensuite prendre le ligne Yamanote vers Akihabara 秋葉原. Il faut pas oublier d'activer le JR Pass(si on le prend) et le Pocket Wifi. Puis acheter une Welcome Suica."
        },
        afternoon :
        {
            spots : ['Animate Akihabara', 'Amiami Akihabara Radio Kaikan', 'Super Potato' , 'JUMP shop Akihabara'],
            description : "Petite balade geek orienté shōnen pour commencer le voyage. Animate Akihabara pour des goodies, mangas, etc. Amiami on peut trouver des figurines d'okaz. Super Potato pour des jeux rétro. JUMP shop pour des goodies de manga shōnen, à voir s'il y a encore des restes de Gintama."
        },
    },
    {
        id:2,
        image : tokyo,
        city : 'Tokyo - Asakusa, Ikebukuro, Shinjuku',
        day: 'Lundi',
        date : '29 4月 2024',
        hotel: 'Via inn Akihabara - 秋葉原駅 Akihabara',
        tags: ['#férié','#traditionnel', '#balade', '#temple', '#kabukichō', '#gintama', 'shōwaNoHi'],
        morning :
        {
            spots : ['Sensō-ji Asakusa','Sky tree', 'Sumida Park', 'JUMP shop', 'Asahi Super Dry Hall', 'Asakusa ROX・3G 4F', 'Olinas Mall'],
            description : 'Journée plus traditionnelle à Asakusa avec le temple Sensō-ji, la Tokyo Skytree et le parc Sumida. Peut-être nous balader dans le quartier, selon mes souvenirs il y avait des kissaten traditionnel. On peut aussi aller au JUMP shop de la Skytree et à la brasserie Asahi pour voir le paysage (à côté de la crotte). A côté du temps il y a deux centres commerciaux, Asakusa Row avec un magasin Avail où en ce moment il y a une pyjama Elizabeth, et en Olinas Mall il y a un global works.'
        },
        afternoon :
                {
            spots : ['Animate Café 銀魂 COLLAB', 'Porte Kabukichō 歌舞伎町', 'Tête Godzilla ゴジラヘッド', 'Donki Kabukichō', 'Dîner/ Piquer à Omoide Yokocho 思い出横丁'],
            description : '[17h30] RDV Animate Café Ikebukuro pour la collab Gintama. Ensuite, on par à Shinjuku. Pour reperer la porte Kabukichō, depuis la gare shinjuku sortie nord et elle est à côté de Suzuya building. Omoide Yokocho est une petite ruelle influence période Shōwa avec des bars typiques japonais mais la bouffe est généralement de la viande, parfois on peut trouver des sushis.'
        }
    },
    {
        id:3,
        image : tokyo,
        city : 'Tokyo - Odaiba',
        day: 'Mardi',
        date : '30 4月 2024',
        hotel: 'Via inn Akihabara - 秋葉原駅 Akihabara',
        tags: ['#geek', '#retro-gaming', '#mecha'],
        morning :
        {
            spots : ['Takoyaki museum', 'Daiba 1-chome Shoutengai', 'Unko museum' , 'Deck Tokyo Beach', 'Statue Gundam', 'Statue de la Liberté', 'Diver City Tokyo Plaza'],
            description : "On part de Tokyo à Odaiba (40min) : Akihabara station vers Shimbashi 新橋 (Yamanote), puis Yurikamome jusqu'à Odaiba-kaihinkōen お台場海浜公園 (2€). On peut voir d'abord la statue Gundam et la statue de la Liberté puis ensuite le Takoyaki museum et manger un bout et si temps le Daiba 1-chome Shōtengai est une sorte de magasin retro des années 60 connue. Faire un tour à Diver City il y a une GU (4F) c'est l'équivalent d'Uniqlo mais juste au Japon."
        },
        afternoon :
        {
            spots : ['[15h] : Café thème surprise', 'Donki Ikebukuro', 'Animate Ikebukuro', 'Onigiri Bongo', 'Sunshine City Mall'],
            description : "A 15h00 RDV Café (à Gare Ikebukuro côté higashi près d'Animate Ikebukuro ). Retour d'Obaiba (Yurikamome puis Yamanote et descendre à Gare d'Ikebukuro). On peut aller au Donki pour des souvenirs et à l'Animate pour des goodies. Pour finir on peut manger un onigiri à Onigiri Bongo (on l'avait vu sur youtube). On peut passer faire un tour à Sunshine City Mall, un mall de magasins pour otakus."
        }
    },
    {
        id:4,
        image : tokyo,
        city : 'Tokyo - Niigata - Nagano',
        day: 'Mercredi',
        date : '01 5月 2024',
        hotel: 'Via inn Akihabara - 秋葉原駅 Akihabara',
        tags: ['#uesugikenshin', '#kagetora', "#takedaShingen", "kawanakajima"],
        morning :
        {
            spots : ['Route', 'Daiba 1-chome Shoutengai', 'Unko museum' , 'Deck Tokyo Beach', 'Statue Gundam*', 'Statue de la Liberté*'],
            description : ""
        },
        afternoon :
        {
            spots : ['[15h] : Café thème surprise*', 'Animate Shibuya BL*', 'Mandarake*', 'Donki Ikebukuro'],
            description : ""
        }
    },
    {
        id:5,
        image : tokyo,
        city : 'Tokyo - Kōtō - Shibuya',
        day: 'Jeudi',
        date : '02 5月 2024',
        hotel: 'Web Hotel Tokyo Asakusabashi - 浅草橋駅 Asakusabashi',
        tags: ['#traditionnel', '#mode', '#hachiko', '#BL'],
        morning :
        {
            spots : ['Fukagawa Edo Museum', 'Tsukishima Monja Street', 'Monja Mugi🍙', 'Okame Souhonen🍙' ,'Nishiki🍙'],
            description : "Réproduction d'un quartier de l'époque Edo, l'entrée coute environ 2,43€. Aparemment il est conseillé comme musée, parfois il y a des evenements et on peut louer des yukatas. Ensuite on peut aller à Tsukishima Monja Street pour manger des monjayaki. Depuis le musée c'est direct Metro Kiyosumi-shirakawa Station >  Tsukishima  Station. Certains resto sont Okame Souhonen, Monja Mugi et Nishiki."
        },
        afternoon :
        {
            spots : ['Animate Shibuya BL', 'Mandarake', 'Hachiko', 'Shibuya Crossing', 'Mega Donki', 'Uobei Sushi🍙', 'Tenkazushi Shibuya Dogenzaka🍙', 'Katsu Midori Seibu Shibuya🍙', 'Uobei Sushi🍙', 'Tenkazushi Shibuya Dogenzaka🍙', 'Katsu Midori Seibu Shibuya🍙'],
            description : " Petite aprèm BL au Animate Shibuya il y a beaucoup de mangas BL et café de collab BL et ils vendent des cookies et boissons avec des perso BL imprimés. Ensuite on va au Mandarake dans le même bâtiment (B2F). La bâtiment s'appelle Shibuya Beam. Puis on prend une photo de Hachiko et Shibuya Crossing. Pour finir on peut aller au Mega Donki pour des souvenirs. On peut diner à Shibuya, il y a Uobei Sushi, Tenkazushi Shibuya Dogenzaka et Katsu Midori Seibu Shibuya. Pour diner on peut tester des restos conseillés comme Uobei Sushi, Tenkazushi Shibuya Dogenzaka et Katsu Midori Seibu Shibuya."
        }
    },
    {
        id:6,
        image : tokyo,
        city : 'Tokyo - Hino',
        day: 'Vendredi',
        date : '03 5月 2024',
        hotel: 'Web Hotel Tokyo Asakusabashi - 浅草橋駅 Asakusabashi',
        tags: ['#férié','#intense', '#histoire', '#culture', '#ferié', '#jourDeLaConstitution'],
        morning :
        {
            spots : ['Hino City Tourist Information Center', 'Yasaka jinja',' Shinsengumi Hometown museum', 'Satō Hikogorō Shinsegumi Museum'],
            description : "On part de Tokyo à Hino (45min-1h). Hino City Tourist Information Center est normalement ouvert, on peut prendre une carte et acheter des goodies Hakuoki. Hino-juku Honjin(日野宿本陣, l'un des rares Honjin qui restent de la période Edo qui appartenait à Satō Hikogorō donc les membres du Tennen Rishin-ryū y ont passé du temps 天然理心流). Yasaka jinja est un petit temple dédié au shinsengumi. Shinsengumi Hometown museum est un musée sur le Shinsengumi. Le Satō Hikogorō Shinsegumi museum expose notamment les arquebuses de Kondō Isami, l'épée «Echizen-yasutsugu» qu'utilisait Hijikata Toshizō ainsi que des lettres de Okita Sōji. Satō Hikogorō était marié à la soeur de Hijikata."
        },
        afternoon :
        {
            spots : ['Hijikata Toshizo museum', 'Sekiden-ji temple', 'Takahata fudo son Kongo-ji Temple'],
            description : "Depuis la Hino Station il faut aller à Mangaji station à pieds 30 min ou en bus mais compliqué. On pourrait aller à pieds depuis Hino station jusqu'à Koshukaido Station et de là bas prendre le Tama Monorail jusqu'à Mangaji Station. Le Hijikata museum expose plus de 70 objets qui lui appartenant dont son épée Aizu Kanezada(“Izumi no Kami Kanesada)  et même la poutre en babmou utilisée pour ses entraînements jeune. Sekiden-ji temple est le temple où il a été enterré. Et on finit par le Takahata fudo son Kongo-ji (temple de la famille de Hijikata) où on peut voir le monument de Hijikata Toshizo et Isami Kondo. Pour ce dernier il faut aller de Mangaji station à Takahata fudo station. On peut prendre le Tama monorail depuis Mangaji station jusqu'à Takahatafudō Station. Prix monorail environ 0,60€. Pour rentrer à Tokyo on peut prendre la Keio Line Takahata fudo > Shinjuku."
        }
    },
    {
        id:7,
        image : tokyo,
        city : 'Tokyo - Ginza',
        day: 'Samedi',
        date : '04 5月 2024',
        hotel: 'Web Hotel Tokyo Asakusabashi - 浅草橋駅 Asakusabashi',
        tags: ['#férié', '#chic', "kabuki", '#shopping', '#improvisation', '#midoriNoHi'],
        morning :
        {
            spots : ['Kabuki-za', 'Omurice Kissa You (You)🍙', 'Jugetsudo🍙', 'Uniqlo'],
            description : "[11h] Aller voir un acte de Kabuki (mais il faut acheter le ticker un jour avant). On peut manger un omurice (je crois qu'il y a avec sauce sans viande) ou un gouter. Puis ensuite on peut faire un tour à l'Uniqlo de plusieurs étages."
        },
        afternoon :
        {
            spots : ['Tokyo Dome', 'Global Work', 'Sunshine City'],
            description : "On peut aller à Tokyo Dome et à la Global Work vers là-bas. Si on l'a pas encore fait on peut aller à Shinjuku que c'est pas trop loin à Sunshine city ou Omoide Yokochō"
        }
    },
    {
        id:8,
        image : osaka,
        city : 'Osaka',
        day: 'Dimanche',
        date : '05 5月 2024',
        hotel: 'APA Hotel & Resort Midosuji Hommachi Eki Tower - 本町駅 Honmachi',
        tags: ['#férié', '#Dotonbori', '#kansai', '#okonomiyaki', '#Ukiyo-e', '#konomoNoHi'],
        morning :
        {
            spots : ['Kamigata Ukiyoe Museum', 'Jump shop', 'Hozenji', 'Hosenji Yokochō', 'Super Potato Osaka', 'Donki'],
            description : "De l'hôtel on va à la station Namba à pieds (joli) ou avec Midsuji Line metro. On peut aller au musée Kamigata Ukiyo-e, Kamigata nom ancien de Kansai, affiche des oeuvres crées suelement à Kamigata et thème kabuki. Ensuite au Hozenji (un temple dédié à la réussite pro et amour) et voir la statue de Fudo Myoo et l'asperger d'eau, pendant Edo il y avait des répresentations de Rakugo là-bas. Ensuite, se balade à Hosenji Yokochō, une petite ruelle avec des restos et bars. Si on veut on peut faire un tour au Jump Store, Super Potato et Donki. (peut-être moins remplis qu'à Tokyo)"
        },
        afternoon :
        {
            spots : ['Rikuro Ojisan🍙', 'Dotonbori', 'Tsūtenkaku tower', 'Okonomiyaki Okaru🍙' ,'Houzenji Sanpei🍙', 'Okonomiyaki Mizuno🍙'],
            description : "On peut prendre un gouter à Rikuro Ojisan et nous balader dans Dotonobori. On peut prendre une photo de la Tsūtenkaku tower et voir le quartier Shinsekai(quartier retro qui était un repère chaud) pour piquer et ensuite on revient à Dotonbori pour dîner). Okonomiyaki Okaru c'est le spot de la dernière fois (okonomiyaki de Doraemon), mais sinon il y a Houzenji Sanpei et Okonomiyaki Mizuno."
        }
    },
    {
        id:9,
        image : kyoto,
        city : 'Kyoto',
        day: 'Lundi',
        date : '06 5月 2024',
        hotel: 'APA Hotel & Resort Midosuji Hommachi Eki Tower - 本町駅 Honmachi',
        tags: ['#férié', '#shinsengumi', '#bakumatsu', '#hijikata', '#roshigumi', '#kondō', '#kodomoNoHi', '#çaPique'],
        morning :
        {
            spots : ['Nishi Honganji', 'Mibu-Dera', 'Yagitei', 'Pont rouge', 'Ryozen Museum', 'Tombe de Sakamoto Ryoma'],
            description : "On va d'abord à Nishi Higanji à pieds 20 min ou prendre 206 et descendre à Nanajo Omiya ou marcher 20 min 1,40€ mais grave relou le bus. Ce temple, le 'Hoganji de l'ouest', est un trésor National du Japon et classé à l'UNESCO (le batiment date du XVII car il a resisté aux incendies pas comme le Higashi, celui de l'est). Mais c'était surtout le QG du shinsengumi lorsqu'ils ont commencé à être nombreux (+ de 200 membres). Et donc la maison de la famille Yagi pouvait pas tous les accueillir faute de place. Ensuite on marche 20 min pour aller au Mibu-Dera  et le Yagitei ou le bus 206 et descendre à Omiya Matsubara. Mibu Dera , le quartier général à côté de la maison de la famille Yagi. La maison de la famille Yagi (6,64€), c'est l'endroit qui a accueilli les premiers membres du Shinsengumi quand ils ont voulu rester et se sont séparés du Roshigumi pour etre nommés Shinsengumi. Dans cette maison (in tha back room) par exemple Serizawa Kamo été assasiné (on peut encore voir des traces des katanas). Quand ils ont commencé a être nombreux (après l'Ikedaya incident), ils ont démanagé au Taiko Banya dans le Nishi Honganji Temple. L'adresse du Yagitei est : 京都市中京区壬生梛ノ宮町24, car c'est plus simple de la trouver en japonais. Entre le Yagiya et le Mibu-dera il y a un joli pont rouge. Après le Mibu Dera on marche vers ōmiya et on prend le bus 207 jusqu'à Higashiyama Yasui (1,40€) ou le Hankyu Line depuis Ōmiya jusqu'à Kyoto-Kawaramachi Station et on marche 20 min pour eviter de se tromper de bus à peu près 2€. Ce musée est dédié au Bakumatsu <3 mais à verifier si c'est ouvert car c'est Lundi mais c'est probable qu'il soit ouvert can c'est férié. Là-bas on peut visiter la tombe de Sakamoto Ryōma."
        },
        afternoon :
        {
            spots : ['Sanjō Bridge', 'Ikedaya Inn (Hana no Mai Restaurant)'],
            description : "[17h] Pour fini on prend le train à Gion-Shijo jusqu'à Sanjo Station (1€) pour aller voir le Sanjo bridge et l'ikedaya inn. On a reservé à 17h au Hana no Mai Restaurant (Ikedaya Inn). Sanjō Bridge, ici a été publié une annonce indiquant que le Chōshū clan étaient les ennemies de l'empereur. Cet annonce était placé stratégiquemenrt puisque le pont était le dernier passage du Tokaido (la route tokyo - kyoto), les membres du Chōshū n'ont pas apprécié et ont décidé de l'arracher deux fois mais au troisième essai les shnsengumi les ont arretés. L'Ikedaya Inn est l'endroit où des membres de l'Isshin shishi (dont Katsura Kogoro) était réunis pour planifier comment sauver  Shintaro Furutaka qui avait été incarceré par le shinsengumi. Les shinsengumi les ont surpris et ont assasiné 4 et arreté plusieurs membres de cette faction terr*%?.. C'est une partie clé de l'histoire du shinsengumi. De l'ikedaya on peut rentrer à OSaka en allant depuis la station Sanjō à Yodoyabashi Station Osaka à 12min de l'hotel à pieds.Avec la Keihan Main Line (2,59€)."
        }
    },
];

export default planning;
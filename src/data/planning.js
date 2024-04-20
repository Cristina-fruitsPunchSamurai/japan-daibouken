import tokyo from '../assets/tokyo.webp';

const planning = [
    {
        id:1,
        image : tokyo,
        city : 'Tokyo',
        day: 'Dimanche',
        date : '28 4月 2024',
        hotel: 'Via inn Akihabara',
        tags: ['#arrivée', '#jet-lag', '#découverte', '#otaku', '#balade'],
        morning :
        {
            spots : ['Aéroport Haneda', 'Hôtel'],
            description : "Depuis l'aéroport il faut prendre le Tokyo Monorail en jusqu'à Hamamatsucho 浜松町 (3€ environ) et ensuite prendre le ligne Yamanote vers Akihabara 秋葉原. Il faut pas oublier d'activer le JR Pass et le Pocket Wifi."
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
        hotel: 'Via inn Akihabara',
        tags: ['#traditionnel', '#balade', '#temple', '#kabukichō', '#gintama'],
        morning :
        {
            spots : ['Sensō-ji Asakusa','Sky tree', 'Sumida Park', 'JUMP shop', 'Asahi Super Dry Hall'],
            description : 'Journée plus traditionnelle à Asakusa avec le temple Sensō-ji, la Tokyo Skytree et le parc Sumida. Peut-être nous balader dans le quartier, selon mes souvenirs il y avait des kissaten traditionnel. On peut aussi aller au JUMP shop de la Skytree et à la brasserie Asahi pour voir le paysage (à côté de la crotte).'
        },
        afternoon :
                {
            spots : ['Animate Café', 'Porte Kabukichō 歌舞伎町', 'Tête Godzilla ゴジラヘッド', 'Donki Kabukichō', 'Dîner/ Piquer à Omoide Yokocho 思い出横丁'],
            description : 'A 17h30 RDV Animate Café Ikebukuro pour la collab Gintama. Ensuite, on par à Shinjuku. Pour reperer la porte Kabukichō, depuis la gare shinjuku sortie nord et elle est à côté de Suzuya building. Omoide Yokocho est une petite ruelle influence période Shōwa avec des bars typiques japonais mais la bouffe est généralement de la viande, parfois on peut trouver des sushis.'
        }
    },
    {
        id:3,
        image : tokyo,
        city : 'Tokyo - Odaiba',
        day: 'Mardi',
        date : '30 4月 2024',
        hotel: 'Via inn Akihabara',
        tags: ['#geek', '#retro-gaming', '#mecha'],
        morning :
        {
            spots : ['Takoyaki museum', 'Daiba 1-chome Shoutengai', 'Unko museum' , 'Deck Tokyo Beach', 'Statue Gundam', 'Statue de la Liberté'],
            description : "On part de Tokyo à Odaiba (40min) : Akihabara station vers Shimbashi 新橋 (Yamanote), puis Yurikamome jusqu'à Odaiba-kaihinkōen お台場海浜公園 (2€). On peut voir d'abord la statue Gundam et la statue de la Liberté puis ensuite le Takoyaki museum et manger un bout et si temps le Daiba 1-chome Shōtengai est une sorte de magasin retro des années 60 connue."
        },
        afternoon :
        {
            spots : ['[15h] : Café thème surprise', 'Donki Ikebukuro', 'Animate Ikebukuro', 'Onigiri Bongo'],
            description : "A 15h00 RDV Café (à Gare Ikebukuro côté higashi près d'Animate Ikebukuro ). Retour d'Obaiba (Yurikamome puis Yamanote et descendre à Gare d'Ikebukuro). On peut aller au Donki pour des souvenirs et à l'Animate pour des goodies. Pour finir on peut manger un onigiri à Onigiri Bongo (on l'avait vu sur youtube)."
        }
    },
    {
        id:4,
        image : tokyo,
        city : 'Tokyo - Niigata - Nagano',
        day: 'Mercredi',
        date : '01 5月 2024',
        hotel: 'Via inn Akihabara',
        tags: ['#uesugikenshin', '#kagetora', "#takedaShingen", "kawanakajima"],
        morning :
        {
            spots : ['Route', 'Daiba 1-chome Shoutengai', 'Unko museum' , 'Deck Tokyo Beach', 'Statue Gundam*', 'Statue de la Liberté*'],
            description : "On part de Tokyo à Odaiba (40min) : Akihabara station vers Shimbashi 新橋 (Yamanote), puis Yurikamome jusqu'à Odaiba-kaihinkōen お台場海浜公園 (2€). On peut voir d'abord la statue Gundam et la statue de la Liberté puis ensuite le Takoyaki museum et manger un bout et si temps le Daiba 1-chome Shōtengai est une sorte de magasin retro des années 60 connue."
        },
        afternoon :
        {
            spots : ['[15h] : Café thème surprise*', 'Animate Shibuya BL*', 'Mandarake*', 'Donki Ikebukuro'],
            description : "A 15h00 RDV Café (à Ikebukuro). Retour d'Obaiba (Yurikamome puis Yamanote et descendre à Gare d'Ikebukuro). Après le café on peut se balader et aller à l'Animate de Shibuya où il y a des choses de BL (peut-être même un Café Collab) puis ua Mandarake dans le même bâtiment. Et faire un tour au Donki si on a envie."
        }
    },
    {
        id:5,
        image : tokyo,
        city : 'Tokyo - Kōtō - Shibuya',
        day: 'Jeudi',
        date : '02 5月 2024',
        hotel: 'Web Hotel Tokyo Asakusabashi',
        tags: ['#traditionnel', '#mode', '#hachiko', '#BL'],
        morning :
        {
            spots : ['Fukagawa Edo Museum', 'Tsukishima Monja Street', 'Monja Mugi🍙', 'Okame Souhonen🍙' ,'Nishiki🍙'],
            description : "Réproduction d'un quartier de l'époque Edo, l'entrée coute environ 2,43€. Aparemment il est conseillé comme musée, parfois il y a des evenements et on peut louer des yukatas. Ensuite on peut aller à Tsukishima Monja Street pour manger des monjayaki. Depuis le musée c'est direct Metro Kiyosumi-shirakawa Station >  Tsukishima  Station. Certains resto sont Okame Souhonen, Monja Mugi et Nishiki."
        },
        afternoon :
        {
            spots : ['Animate Shibuya BL', 'Mandarake', 'Hachiko', 'Shibuya Crossing', 'Mega Donki', 'Uobei Sushi🍙', 'Tenkazushi Shibuya Dogenzaka🍙', 'Katsu Midori Seibu Shibuya🍙'],
            description : " Petite aprèm BL au Animate Shibuya il y a beaucoup de mangas BL et café de collab BL et ils vendent des cookies et boissons avec des perso BL imprimés. Ensuite on va au Mandarake dans le même bâtiment (B2F). La bâtiment s'appelle Shibuya Beam. Puis on prend une photo de Hachiko et Shibuya Crossing. Pour finir on peut aller au Mega Donki pour des souvenirs. On peut diner à Shibuya, il y a Uobei Sushi, Tenkazushi Shibuya Dogenzaka et Katsu Midori Seibu Shibuya."
        }
    },
    {
        id:6,
        image : tokyo,
        city : 'Tokyo - Hino',
        day: 'Vendredi',
        date : '03 5月 2024',
        hotel: 'Web Hotel Tokyo Asakusabashi',
        tags: ['#intense', '#histoire', '#culture', '#ferié'],
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

];

export default planning;
import tokyo from '../assets/tokyo.webp';

const planning = [
    {
        id:1,
        image : tokyo,
        city : 'Tokyo',
        day: 'Dimanche',
        date : '28 4月 2024',
        hotel: 'Via inn Akihabara',
        tags: ['#arrivée', '#jet-lag', '#découverte'],
        morning :
        {
            spots : ['Aéroport Haneda', 'Hôtel'],
            description : "Depuis l'aéroport il faut prendre le Tokyo Monorail en jusqu'à Hamamatsucho 浜松町 (3€ environ) et ensuite prendre le ligne Yamanote vers Akihabara 秋葉原. Il faut pas oublier d'activer le JR Pass et le Pocket Wifi."
        },
        afternoon :
        {
            spots : ['Shinjuku', 'Porte Kabukichō 歌舞伎町 ', 'Tête Godzilla ゴジラヘッド', 'Donki Kabukichō', 'Dîner/ Piquer à Omoide Yokocho 思い出横丁'],
            description : 'Pour reperer la porte Kabukichō, depuis la gare shinjuku sortie nord et elle est à côté de Suzuya building. Omoide Yokocho est une petite ruelle influence période Shōwa avec des bars typiques japonais mais la bouffe est généralement de la viande, parfois on peut trouver des sushis.'
        }
    },
    {
        id:2,
        image : tokyo,
        city : 'Tokyo',
        day: 'Lundi',
        date : '29 4月 2024',
        hotel: 'Via inn Akihabara',
        tags: ['#geek', '#otaku', '#shonen', '#akihabara', '#traditionnel', '#balade'],
        morning :
        {
            spots : ['Animate Akihabara', 'Amiami Akihabara Radio Kaikan', 'Super Potato' , 'JUMP shop Akihabara'],
            description : "Petite balade geek orienté shōnen poru commencer le voyage. Animate Akihabara pour des goodies, mangas, etc. Amiami on peut trouver des figurines d'okaz. Super Potato pour des jeux rétro. JUMP shop pour des goodies de manga shōnen, à voir s'il y a encore des restes de Gintama."
        },
        afternoon :
        {
            spots : ['Sensō-ji Asakusa','Sky tree', 'Sumida Park', 'JUMP shop', 'Skytree Asahi Super Dry Hall'],
            description : 'Après-midi plus traditionnel à Asakusa avec le temple Sensō-ji, la Tokyo Skytree et le parc Sumida. Peut-être nous balader dans le quartier, selon mes souvenirs il y avait des kissaten traditionnel. On peut aussi aller au JUMP shop de la Skytree et à la brasserie Asahi pour voir le paysage (à côté de la crotte).'
        }
    },
    // { id:2, date: '29/04', ville: 'Tokyo' },
    // { id:3, date: '30/04', ville: 'Tokyo' },
    // { id:4, date: '01/05', ville: 'Tokyo' },
    // { id:5, date: '02/05', ville: 'Tokyo' },
    // { id:6, date: '03/05', ville: 'Tokyo' },
    // { id:7, date: '04/05', ville: 'Tokyo' },
    // { id:8, date: '05/05', ville: 'Tokyo → Osaka' },
    // { id:9, date: '06/05', ville: 'Osaka' },
    // { id:10, date: '07/05', ville: 'Osaka → Tokyo' },
    // { id:11, date: '08/05', ville: 'Tokyo' },
    // { id:12, date: '09/05', ville: 'Tokyo' },
    // { id:13, date: '10/05', ville: 'Retour' }
];

export default planning;
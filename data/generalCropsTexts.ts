import { GeneralCrops } from '@/vegetable/types'

const GENERAL_CROPS_CONFIG: Record<GeneralCrops, { name: string; img: string }> = {
  [GeneralCrops.ACELGA]: {
    name: 'Acelga',
    img: 'https://cdn.pixabay.com/photo/2018/10/21/20/21/chard-3763735_960_720.jpg',
  },
  [GeneralCrops.ACHICORIA]: {
    name: 'Achicoria',
    img: 'https://cdn.pixabay.com/photo/2014/04/07/02/27/radicchio-318197_960_720.jpg',
  },
  [GeneralCrops.AJO]: {
    name: 'Ajo',
    img: 'https://cdn.pixabay.com/photo/2018/05/21/21/23/garlic-3419544_960_720.jpg',
  },
  [GeneralCrops.ALBAHACA]: {
    name: 'Albahaca',
    img: 'https://cdn.pixabay.com/photo/2018/07/12/02/32/basil-3532424_960_720.jpg',
  },
  [GeneralCrops.ALCACHOFA]: {
    name: 'Alcachofa',
    img: 'https://cdn.pixabay.com/photo/2015/05/09/14/17/artichokes-759753_960_720.jpg',
  },
  [GeneralCrops.APIO]: {
    name: 'Apio',
    img: 'https://cdn.pixabay.com/photo/2020/08/23/01/33/celery-5509677_960_720.png',
  },
  [GeneralCrops.AROMATICAS]: {
    name: 'Aromáticas',
    img: 'https://cdn.pixabay.com/photo/2017/12/17/19/00/flower-3024741_960_720.png',
  },
  [GeneralCrops.BERENJENA]: {
    name: 'Berenjena',
    img: 'https://cdn.pixabay.com/photo/2017/08/11/09/16/eggplant-2630097_960_720.png',
  },
  [GeneralCrops.BONIATO]: {
    name: 'Boniato',
    img: 'https://cdn.pixabay.com/photo/2018/05/12/00/53/sweet-potato-3392187_960_720.png',
  },
  [GeneralCrops.BORRAJA]: {
    name: 'Borraja',
    img: 'https://cdn.pixabay.com/photo/2017/09/03/06/34/indian-borage-2709425_960_720.jpg',
  },
  [GeneralCrops.BROCOLI]: {
    name: 'Brócoli',
    img: 'https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_960_720.png',
  },
  [GeneralCrops.CALABACIN]: {
    name: 'Calabacín',
    img: 'https://cdn.pixabay.com/photo/2016/09/03/20/21/zucchini-1642621_960_720.jpg',
  },
  [GeneralCrops.CALABAZA]: {
    name: 'Calabaza',
    img: 'https://cdn.pixabay.com/photo/2017/10/18/01/27/pumpkin-2862641_960_720.png',
  },
  [GeneralCrops.CALENDULA]: {
    name: 'Caléndula',
    img: 'https://cdn.pixabay.com/photo/2018/07/10/11/11/marigold-3528402_960_720.jpg',
  },
  [GeneralCrops.CANONIGOS]: {
    name: 'Canónigos',
    img: 'https://cdn.pixabay.com/photo/2014/02/12/18/11/lettuce-264826_960_720.jpg',
  },
  [GeneralCrops.CAPUCHINA]: {
    name: 'Tagete, Capuchina o Taco de Reina',
    img: 'https://cdn.pixabay.com/photo/2014/09/13/20/56/nasturtium-444387_960_720.jpg',
  },
  [GeneralCrops.CEBOLLA]: {
    name: 'Cebolla',
    img: 'https://cdn.pixabay.com/photo/2018/07/15/20/43/onion-3540502_960_720.jpg',
  },
  [GeneralCrops.CEBOLLA_VERDEO]: {
    name: 'Cebolla de Verdeo',
    img: 'https://cdn.pixabay.com/photo/2015/03/30/19/23/green-onion-699943_960_720.jpg',
  },
  [GeneralCrops.CEBOLLINO]: {
    name: 'Cebollino',
    img: 'https://cdn.pixabay.com/photo/2018/04/10/19/22/chive-3308468_960_720.jpg',
  },
  [GeneralCrops.CHIRIVIAS]: {
    name: 'Chirivias',
    img: 'https://cdn.pixabay.com/photo/2012/03/01/01/40/parsnip-20320_960_720.jpg',
  },
  [GeneralCrops.CILANTRO]: {
    name: 'Cilantro',
    img: 'https://cdn.pixabay.com/photo/2016/03/29/01/06/cilantro-1287301_960_720.jpg',
  },
  [GeneralCrops.COLES_BRUSELAS]: {
    name: 'Coles de Bruselas',
    img: 'https://cdn.pixabay.com/photo/2014/03/09/16/05/brussels-sprouts-283807_960_720.jpg',
  },
  [GeneralCrops.COLIFLOR]: {
    name: 'Coliflor',
    img: 'https://cdn.pixabay.com/photo/2015/02/27/01/08/cauliflower-651402_960_720.jpg',
  },
  [GeneralCrops.COLINABO]: {
    name: 'Colinabo',
    img: 'https://cdn.pixabay.com/photo/2013/08/28/19/04/kohlrabi-176849_960_720.jpg',
  },
  [GeneralCrops.ENELDO]: {
    name: 'Eneldo',
    img: 'https://cdn.pixabay.com/photo/2020/01/06/06/13/anethum-4744673_960_720.png',
  },
  [GeneralCrops.ESCAROLA]: {
    name: 'Escarola',
    img: 'https://cdn.pixabay.com/photo/2016/01/16/21/02/endives-1143978_960_720.jpg',
  },
  [GeneralCrops.ESPARRAGO]: {
    name: 'Espárrago',
    img: 'https://cdn.pixabay.com/photo/2018/06/15/23/49/asparagus-3477960_960_720.jpg',
  },
  [GeneralCrops.ESPINACA]: {
    name: 'Espinaca',
    img: 'https://cdn.pixabay.com/photo/2018/09/27/22/37/spinach-3708115_960_720.jpg',
  },
  [GeneralCrops.FRESA]: {
    name: 'Fresa',
    img: 'https://cdn.pixabay.com/photo/2018/07/27/02/30/strawberries-3565102_960_720.png',
  },
  [GeneralCrops.GARBANZO]: {
    name: 'Garbanzo',
    img: 'https://cdn.pixabay.com/photo/2014/04/05/11/40/chickpea-316593_960_720.jpg',
  },
  [GeneralCrops.GUISANTE]: {
    name: 'Guisante',
    img: 'https://cdn.pixabay.com/photo/2016/04/27/03/58/sweet-pea-1355929_960_720.jpg',
  },
  [GeneralCrops.HABA]: {
    name: 'Haba',
    img: 'https://cdn.pixabay.com/photo/2016/02/05/18/18/flower-1181717_960_720.jpg',
  },
  [GeneralCrops.HINOJO]: {
    name: 'Hinojo',
    img: 'https://cdn.pixabay.com/photo/2018/09/06/08/30/fennel-3657761_960_720.png',
  },
  [GeneralCrops.JUDIA]: {
    name: 'Judía',
    img: 'https://cdn.pixabay.com/photo/2022/12/17/19/11/kidney-beans-7662225_960_720.jpg',
  },
  [GeneralCrops.KALE]: {
    name: 'Kale',
    img: 'https://cdn.pixabay.com/photo/2016/09/04/19/09/kale-1644920_960_720.jpg',
  },
  [GeneralCrops.LAVANDA]: {
    name: 'Lavanda',
    img: 'https://cdn.pixabay.com/photo/2020/07/03/21/35/lavander-5367669_960_720.jpg',
  },
  [GeneralCrops.LECHUGA]: {
    name: 'Lechuga',
    img: 'https://cdn.pixabay.com/photo/2017/07/03/18/14/lettuce-2468495_960_720.png',
  },
  [GeneralCrops.LENTEJA]: {
    name: 'Lenteja',
    img: 'https://cdn.pixabay.com/photo/2017/09/26/23/33/lentils-2790516_960_720.jpg',
  },
  [GeneralCrops.LOMBARDA]: {
    name: 'Col Lombarda',
    img: 'https://cdn.pixabay.com/photo/2019/07/23/08/55/vegetable-4357039_960_720.jpg',
  },
  [GeneralCrops.MAIZ]: {
    name: 'Maiz',
    img: 'https://cdn.pixabay.com/photo/2018/09/26/21/24/corn-3705687_960_720.jpg',
  },
  [GeneralCrops.MANZANILLA]: {
    name: 'Manzanilla',
    img: 'https://cdn.pixabay.com/photo/2018/06/22/02/26/chamomile-3489847_960_720.jpg',
  },
  [GeneralCrops.MARGARITA]: {
    name: 'Margarita',
    img: 'https://cdn.pixabay.com/photo/2016/07/10/10/54/marguerite-1507550_960_720.jpg',
  },
  [GeneralCrops.MELON]: {
    name: 'Melón',
    img: 'https://cdn.pixabay.com/photo/2016/03/05/22/31/food-1239302_960_720.jpg',
  },
  [GeneralCrops.MOSTAZAS_MIZUNAS]: {
    name: 'Mostazas y mizunas',
    img: 'https://cdn.pixabay.com/photo/2022/09/29/04/23/mustard-7486519_960_720.jpg',
  },
  [GeneralCrops.NABO]: {
    name: 'Nabo',
    img: 'https://cdn.pixabay.com/photo/2017/04/04/18/00/vegetables-2202506_960_720.jpg',
  },
  [GeneralCrops.NINGUNO]: { name: '-', img: 'https://via.placeholder.com/128' },
  [GeneralCrops.OREGANO]: {
    name: 'Orégano',
    img: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_960_720.jpg',
  },
  [GeneralCrops.PATATA]: {
    name: 'Patata',
    img: 'https://cdn.pixabay.com/photo/2017/10/08/07/54/potatoes-2829118_960_720.png',
  },
  [GeneralCrops.PEPINO]: {
    name: 'Pepino',
    img: 'https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_960_720.jpg',
  },
  [GeneralCrops.PEREJIL]: {
    name: 'Perejil',
    img: 'https://cdn.pixabay.com/photo/2018/08/22/05/16/parsley-3622868_960_720.png',
  },
  [GeneralCrops.PIMIENTO]: {
    name: 'Pimiento',
    img: 'https://cdn.pixabay.com/photo/2020/04/19/01/53/peppers-5061541_960_720.png',
  },
  [GeneralCrops.PUERRO]: {
    name: 'Puerro',
    img: 'https://cdn.pixabay.com/photo/2017/04/03/21/04/leek-2199563_960_720.jpg',
  },
  [GeneralCrops.RABANITO]: {
    name: 'Rabanito',
    img: 'https://cdn.pixabay.com/photo/2019/06/11/11/54/radishes-4266807_960_720.jpg',
  },
  [GeneralCrops.REMOLACHA]: {
    name: 'Remolacha',
    img: 'https://cdn.pixabay.com/photo/2019/09/12/06/05/beet-4470670_960_720.jpg',
  },
  [GeneralCrops.REPOLLO]: {
    name: 'Col Repollo',
    img: 'https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_960_720.jpg',
  },
  [GeneralCrops.ROMERO]: {
    name: 'Romero',
    img: 'https://cdn.pixabay.com/photo/2020/05/01/13/24/herbs-5117039_960_720.jpg',
  },
  [GeneralCrops.RUCULA]: {
    name: 'Rúcula',
    img: 'https://cdn.pixabay.com/photo/2014/10/07/03/32/arugula-477090_960_720.jpg',
  },
  [GeneralCrops.SABIA]: { name: 'Sabia', img: 'https://via.placeholder.com/128' },
  [GeneralCrops.SANDIA]: {
    name: 'Sandía',
    img: 'https://cdn.pixabay.com/photo/2016/05/08/21/26/watermelon-1379990_960_720.jpg',
  },
  [GeneralCrops.TOMATE]: {
    name: 'Tomate',
    img: 'https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_960_720.jpg',
  },
  [GeneralCrops.TOMILLO]: {
    name: 'Tomillo',
    img: 'https://cdn.pixabay.com/photo/2013/06/01/03/07/thyme-115349_960_720.jpg',
  },
  [GeneralCrops.ZANAHORIA]: {
    name: 'Zanahoria',
    img: 'https://cdn.pixabay.com/photo/2014/11/30/15/49/carrot-551661_960_720.jpg',
  },
}

export default GENERAL_CROPS_CONFIG

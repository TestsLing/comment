/**
 * 常量
 */

/****************app****************/
export const APPStoreID = '985857783';
export const APKUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.pricehotel.android';

/****************接口****************/

export const apiurl = 'http://api.comment.com/';
// export const apiurl = 'http://www.lawyer-api.com/';
export const version = '1.0';
export const defaultGuid = 'ff0340e9ccab0aca99407185b3286a28';
export const platform = 2;
export const defaultToken = 'lawyer';
export const testGuid = 'f1352ee2b7b64593950ceea2d4ec7a8e';
export const servertGuid = "870cd1b8146449cd92b0f59ee1571af7";
export const imgServerUrl = "https://super-lvshi.oss-cn-beijing.aliyuncs.com/"; //图片服务器地址

export const hashRule = [
    [2, 8, 19, 25, 30, 31],
    [31, 20, 3, 25, 4, 8],
    [25, 31, 0, 9, 13, 17],
    [29, 2, 11, 17, 1, 25],
    [10, 15, 18, 29, 2, 3],
    [5, 10, 15, 17, 18, 22],
    [9, 0, 5, 2, 13, 28],
    [8, 20, 22, 27, 19, 21]
];

//token过期状态码
export const loginRule = [
    'SN005',
    // 'SN007',
    'SN009',
];
/****************颜色****************/

export const miWhite = '#ececec';
export const white = '#FFF';
export const transparentColor = '#00000000';

export const mainBackgroundColor = miWhite;
export const tabBackgroundColor = '#ffffff';
export const cardBackgroundColor = '#FFF';
export const cardShadowColor = '#000000';
export const actionBlue = '#267aff';

export const lineColor = '#42464b';

export const primaryColor = '#1296DB';              // 顶部背景颜色 default #24292e
export const primaryDarkColor = '#121917';
export const primaryLightColor = '#42464b';

export const webDraculaBackgroundColor = '#282a36';


export const selectedColor = primaryDarkColor;

export const titleTextColor = miWhite;
export const mainTextColor = primaryDarkColor;
export const subTextColor = '#959595';
export const subLightTextColor = '#c4c4c4';
export const TextColorWhite = '#FFFFFF';
export const TextColorMiWhtte = miWhite;

export const normalTextColor = '#333333';//字体颜色



export const tabSelectedColor = primaryColor;
export const tabUnSelectColor = '#a6aaaf';
export const tabViewActiveColor = '#2C88FA';
export const tabViewActiveTextColor = '#2C88FA';

export const navTintColor = '#000';
export const navTitleColor = '#000';


export const navColor = '#F0F0F0';

export const defaultColor = '#ffc612';
export const defaultLvShiColor = '#2C88FA';
export const defaultBackgroundColor = '#F4F4F4';
export const defaultBorderColor = '#f4f4f4';


/****************大小****************/
// navbar 高度
export const largetTextSize = 30;
export const bigTextSize = 23;
export const normalTextSize = 18;
export const middleTextSize = 16;
export const smallTextSize = 14;
export const minTextSize = 12;
export const veryMinTextSize = 10;


export const normalIconSize = 40;
export const bigIconSize = 50;
export const largeIconSize = 80;
export const smallIconSize = 30;
export const minIconSize = 20;
export const littleIconSize = 10;


export const normalMarginEdge = 10;
export const normalNumberOfLine = 4;

/****************图标****************/
export const nextIcon = 'chevron-right';
export const tabRecommended = 'activity';
export const tabDynamic = 'aperture';
export const tabMy = 'users';


/****************常量****************/
export const TOKEN_KEY = "token";
export const USER_GUID = "guid";
export const PW_KEY = "user-pw";
export const USER_BASIC_CODE = "user-basic-code";
export const USER_INFO = "user-info";
export const LANGUAGE_SELECT = "language-select";
export const LANGUAGE_SELECT_NAME = "language-select-name";
export const REFRESH_LANGUAGE = "refreshLanguageApp";
export const PAGE_SIZE = 2;

/*******************时间选择数据*******************/
//选择开始时间，截止时间的具体时间规则
export const timeRule = [
    ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
    ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
]

//提醒的相关时间规则
    //不同时间类型的规则
    export const timeTypeArr = [
        [0,5,10,15,20,25,30,35,40,45,50,55],//分钟
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],//小时
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],//天
    ];

    //有截止时间的时间规则
    export const hasEndTime = [
        ['任务开始前','任务截止前'],
        [0,5,10,15,20,25,30,35,40,45,50,55],
        ['分钟','时','天']
    ];

    //没有截止时间的时间规则
    export const noEndTime = [
        ['任务开始前'],
        [0,5,10,15,20,25,30,35,40,45,50,55],
        ['分钟','时','天']
    ];

/****************出价数据****************/
//房间数量
export const roomsNumList = ['一间', '两间', '三间', '四间','自定义']
//房型
export const houseTypesList = ['单人间', '标准间', '大床间', '三人间', '套间', '情侣房']
//酒店星级
export const starLevelList = ['不限星级', '二星', '三星', '四星', '五星']
//日期星期
export const weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
//价格类型
export const priceTypeList = ['单价','总价']
//网络环境
export const networkList = ['100M光纤', '10M光纤']
//订单失效时间
export const offerExpireTime = [{
    "id": 1,
    "title": "20分钟",
    "value":1200,
},{
    "id": 2,
    "title": "1小时",
    "value":3600,
}, {
    "id": 3,
    "title": "3小时",
    "value":10800,
}, {
    "id": 4,
    "title": "6小时",
    "value":21600,
}, {
    "id": 5,
    "title": "12小时",
    "value":43200,
}, {
    "id": 6,
    "title": "24小时",
    "value":86400,
},
]

/****************微信***************/
export const wexinAppID = 'wxcff4a6fc1f2c2b72'
export const wexinAppSecret = '72ac49b5e65a258a019ad34977f12c16'
export const wexinUserScope = 'snsapi_userinfo'

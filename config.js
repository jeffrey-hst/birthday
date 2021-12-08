// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "hi lisa",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "以下是你好朋友给你的祝福",  // 同上...
        "愿你18岁以后的人生充满欢愉和快乐",
        "女大十八变，姑娘十八一朵花祝你生日快乐",
        "祝你一辈子见不到白敬亭",
        "祝你18岁以后未来的日子里",
        "愿你以后越长越高",
        "乘风破浪勇往直前",
        "愿你繁华人生平安喜乐开心幸福",
        "hi北 敲开成年人的大门",
        "我们又是一个阶段的人啦",
        "无事绊心弦 所念皆如愿",
        "祝你意气风发马上到来的18岁 生日快乐！",
        "Lisa 永远走花路吧 这次指的真的是你哦～",
        "今后就是18岁的小朋友了✧*｡٩(ˊᗜˋ*)و✧*｡",
        "happy birthday",
        "lisa祝你生日快乐",
        "10-12-2021",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "以下是你好朋友给你的祝福": "./imgs/logo.jpg",
        "愿你18岁以后的人生充满欢愉和快乐": "./imgs/0185.jpg",
        "女大十八变，姑娘十八一朵花祝你生日快乐": "./imgs/0774.jpg",
        "祝你一辈子见不到白敬亭": "./imgs/0186.jpg",
        "祝你18岁以后未来的日子里": "./imgs/0775.jpg",
        "愿你以后越长越高": "./imgs/0187.jpg",
        "乘风破浪勇往直前": "./imgs/0777.jpg",
        "愿你繁华人生平安喜乐开心幸福": "./imgs/0779.jpg",
        "hi北 敲开成年人的大门": "./imgs/0780.jpg",
        "我们又是一个阶段的人啦": "./imgs/0781.jpg",
        "无事绊心弦 所念皆如愿": "./imgs/0782.jpg",
        "祝你意气风发马上到来的18岁 生日快乐！": "./imgs/0783.jpg",
        "Lisa 永远走花路吧 这次指的真的是你哦～": "./imgs/0784.jpg",
        "今后就是18岁的小朋友了✧*｡٩(ˊᗜˋ*)و✧*｡": "./imgs/0800.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};

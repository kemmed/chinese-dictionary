// === book-listening.js ===
const wordsListening = [
// Урок 6
{id: 1, hanzi:  "有", pinyin:  "yǒu", translation:  "иметь", book: 2, part: 1, lesson: 6, category:  "глаголы"},
{id: 2, hanzi:  "老师", pinyin:  "lǎoshī", translation:  "учитель", book: 2, part: 1, lesson: 6, category:  "профессии"},
{id: 3, hanzi:  "法国人", pinyin:  "Fǎguó rén", translation:  "француз", book: 2, part: 1, lesson: 6, category:  "национальности"},
{id: 4, hanzi:  "英国人", pinyin:  "Yīngguó rén", translation:  "англичанин", book: 2, part: 1, lesson: 6, category:  "национальности"},
{id: 5, hanzi:  "个", pinyin:  "gè", translation:  "счётное слово (универсальная мера)", book: 2, part: 1, lesson: 6, category:  "счётные слова"},
// Урок 7
{id: 6, hanzi:  "没有", pinyin:  "méiyǒu", translation:  "не иметь", book: 2, part: 1, lesson: 7, category:  "глаголы"},
{id: 7, hanzi:  "都", pinyin:  "dōu", translation:  "все, оба", book: 2, part: 1, lesson: 7, category:  "наречия"},
// Урок 8
{id: 8, hanzi:  "咖啡", pinyin:  "kāfēi", translation:  "кофе", book: 2, part: 1, lesson: 8, category:  "еда"},
// Урок 9
{id: 9, hanzi:  "香蕉", pinyin:  "xiāngjiāo", translation:  "банан", book: 2, part: 1, lesson: 9, category:  "еда"},
{id: 10, hanzi:  "葡萄", pinyin:  "pútao", translation:  "виноград", book: 2, part: 1, lesson: 9, category:  "еда"},
{id: 11, hanzi:  "价钱", pinyin:  "jiàqian", translation:  "цена", book: 2, part: 1, lesson: 9, category:  "деньги"},
{id: 12, hanzi:  "两", pinyin:  "liǎng", translation:  "единица веса (= 50 г)", book: 2, part: 1, lesson: 9, category:  "счётные слова"},
// Урок 10
{id: 13, hanzi:  "工商银行", pinyin:  "Gōngshāng Yínháng", translation:  "Промышленно-коммерческий банк Китая", book: 2, part: 1, lesson: 10, category:  "места"},
// Урок 12
{id: 14, hanzi:  "记者", pinyin:  "jìzhě", translation:  "репортёр, журналист", book: 2, part: 1, lesson: 12, category:  "профессии"},
{id: 15, hanzi:  "工程师", pinyin:  "gōngchéngshī", translation:  "инженер", book: 2, part: 1, lesson: 12, category:  "профессии"},
// Урок 13
{id: 16, hanzi:  "光盘", pinyin:  "guāngpán", translation:  "CD, диск", book: 2, part: 1, lesson: 13, category:  "предметы"},
{id: 17, hanzi:  "香水儿", pinyin:  "xiāngshuǐr", translation:  "духи, парфюм", book: 2, part: 1, lesson: 13, category:  "предметы"},
{id: 18, hanzi:  "包", pinyin:  "bāo", translation:  "сумка", book: 2, part: 1, lesson: 13, category:  "предметы"},
// Урок 14
{id: 19, hanzi:  "电动车", pinyin:  "diàndòngchē", translation:  "электроскутер", book: 2, part: 1, lesson: 14, category:  "транспорт"},
{id: 20, hanzi:  "摩托车", pinyin:  "mótuōchē", translation:  "мотоцикл", book: 2, part: 1, lesson: 14, category:  "транспорт"},
{id: 21, hanzi:  "胖", pinyin:  "pàng", translation:  "толстый", book: 2, part: 1, lesson: 14, category:  "прилагательные"},
{id: 22, hanzi:  "搬家", pinyin:  "bān jiā", translation:  "переезжать (в новый дом)", book: 2, part: 1, lesson: 14, category:  "глаголы"},
{id: 23, hanzi:  "那时候", pinyin:  "nà shíhou", translation:  "в то время, тогда", book: 2, part: 1, lesson: 14, category:  "время"},
// Урок 15
{id: 24, hanzi:  "拼音", pinyin:  "pīnyīn", translation:  "пиньинь (фонетическая система для транскрипции китайских иероглифов)", book: 2, part: 1, lesson: 15, category:  "языки"},
{id: 25, hanzi:  "照相机", pinyin:  "zhàoxiàngjī", translation:  "фотоаппарат, камера", book: 2, part: 1, lesson: 15, category:  "предметы"},
{id: 26, hanzi:  "世界", pinyin:  "shìjiè", translation:  "мир", book: 2, part: 1, lesson: 15, category:  "места"},
{id: 27, hanzi:  "地图", pinyin:  "dìtú", translation:  "карта", book: 2, part: 1, lesson: 15, category:  "предметы"},
{id: 28, hanzi:  "大约", pinyin:  "dàyuē", translation:  "примерно, приблизительно", book: 2, part: 1, lesson: 15, category:  "наречия"},
{id: 29, hanzi:  "服装", pinyin:  "fúzhuāng", translation:  "одежда", book: 2, part: 1, lesson: 15, category:  "одежда"},
{id: 30, hanzi:  "丈夫", pinyin:  "zhàngfu", translation:  "муж", book: 2, part: 1, lesson: 15, category:  "семья"},
{id: 31, hanzi:  "累", pinyin:  "lèi", translation:  "уставший", book: 2, part: 1, lesson: 15, category:  "прилагательные"},
{id: 32, hanzi:  "常常", pinyin:  "chángcháng", translation:  "часто", book: 2, part: 1, lesson: 15, category:  "наречия"},
// Урок 17
{id: 33, hanzi:  "节", pinyin:  "jié", translation:  "счётное слово для занятий (уроков)", book: 2, part: 1, lesson: 17, category:  "счётные слова"},
{id: 34, hanzi:  "刘", pinyin:  "Liú", translation:  "фамилия Лю", book: 2, part: 1, lesson: 17, category:  "фамилии"},
{id: 35, hanzi:  "牛", pinyin:  "Niú", translation:  "фамилия Ню", book: 2, part: 1, lesson: 17, category:  "фамилии"},
{id: 36, hanzi:  "饭馆儿", pinyin:  "fànguǎnr", translation:  "ресторан", book: 2, part: 1, lesson: 17, category:  "места"},
{id: 37, hanzi:  "送", pinyin:  "sòng", translation:  "дарить, преподносить (в подарок)", book: 2, part: 1, lesson: 17, category:  "глаголы"},
{id: 38, hanzi:  "生日", pinyin:  "shēngrì", translation:  "день рождения", book: 2, part: 1, lesson: 17, category:  "время"},
{id: 39, hanzi:  "祝", pinyin:  "zhù", translation:  "желать", book: 2, part: 1, lesson: 17, category:  "глаголы"},
{id: 40, hanzi:  "快乐", pinyin:  "kuàilè", translation:  "счастливый, радостный", book: 2, part: 1, lesson: 17, category:  "прилагательные"},
{id: 41, hanzi:  "礼物", pinyin:  "lǐwù", translation:  "подарок", book: 2, part: 1, lesson: 17, category:  "предметы"},
// Урок 18
{id: 42, hanzi:  "公共汽车", pinyin:  "gōnggòng qìchē", translation:  "автобус", book: 2, part: 1, lesson: 18, category:  "транспорт"},
{id: 43, hanzi:  "机场", pinyin:  "jīchǎng", translation:  "аэропорт", book: 2, part: 1, lesson: 18, category:  "места"},
{id: 44, hanzi:  "送", pinyin:  "sòng", translation:  "провожать (кого-либо)", book: 2, part: 1, lesson: 18, category:  "глаголы"},
// Урок 19
{id: 45, hanzi:  "票", pinyin:  "piào", translation:  "билет", book: 2, part: 1, lesson: 19, category:  "предметы"},
{id: 46, hanzi:  "晚会", pinyin:  "wǎnhuì", translation:  "вечер, вечеринка", book: 2, part: 1, lesson: 19, category:  "развлечения"},
// Урок 20
{id: 47, hanzi:  "西安", pinyin:  "Xī'ān", translation:  "Сиань (город)", book: 2, part: 1, lesson: 20, category:  "города"},
{id: 48, hanzi:  "香港", pinyin:  "Xiānggǎng", translation:  "Гонконг (город)", book: 2, part: 1, lesson: 20, category:  "города"},
// Урок 21
{id: 49, hanzi:  "早", pinyin:  "zǎo", translation:  "рано, ранний", book: 2, part: 1, lesson: 21, category:  "время"},
// Урок 22
{id: 50, hanzi:  "一直", pinyin:  "yìzhí", translation:  "всё время, постоянно", book: 2, part: 1, lesson: 22, category:  "наречия"},
{id: 51, hanzi:  "青年", pinyin:  "qīngnián", translation:  "молодёжь, молодые люди", book: 2, part: 1, lesson: 22, category:  "семья"},
{id: 52, hanzi:  "报", pinyin:  "bào", translation:  "газета", book: 2, part: 1, lesson: 22, category:  "предметы"},
{id: 53, hanzi:  "比赛", pinyin:  "bǐsài", translation:  "соревнование, конкурс; соревноваться", book: 2, part: 1, lesson: 22, category:  "развлечения"},
{id: 54, hanzi:  "歌", pinyin:  "gē", translation:  "песня", book: 2, part: 1, lesson: 22, category:  "развлечения"},
// Урок 23
{id: 55, hanzi:  "书架", pinyin:  "shūjià", translation:  "книжная полка", book: 2, part: 1, lesson: 23, category:  "предметы"},
{id: 56, hanzi:  "走路", pinyin:  "zǒu lù", translation:  "идти пешком, ходить", book: 2, part: 1, lesson: 23, category:  "глаголы"},
{id: 57, hanzi:  "桌子", pinyin:  "zhuōzi", translation:  "стол", book: 2, part: 1, lesson: 23, category:  "предметы"},
// Урок 24
{id: 58, hanzi:  "表", pinyin:  "biǎo", translation:  "часы", book: 2, part: 1, lesson: 24, category:  "предметы"},
{id: 59, hanzi:  "慢", pinyin:  "màn", translation:  "медленный", book: 2, part: 1, lesson: 24, category:  "прилагательные"},
// Урок 25
{id: 60, hanzi:  "辅导", pinyin:  "fǔdǎo", translation:  "репетиторствовать, заниматься с репетитором", book: 2, part: 1, lesson: 25, category:  "глаголы"},
{id: 61, hanzi:  "演员", pinyin:  "yǎnyuán", translation:  "актёр / актриса", book: 2, part: 1, lesson: 25, category:  "профессии"},
{id: 62, hanzi:  "了解", pinyin:  "liǎojiě", translation:  "знать, понимать, быть в курсе", book: 2, part: 1, lesson: 25, category:  "глаголы"},
{id: 63, hanzi:  "厉害", pinyin:  "lìhai", translation:  "серьёзный, сильный, крутой", book: 2, part: 1, lesson: 25, category:  "прилагательные"},
{id: 64, hanzi:  "穿", pinyin:  "chuān", translation:  "надевать, носить (одежду)", book: 2, part: 1, lesson: 25, category:  "глаголы"},
{id: 65, hanzi:  "大衣", pinyin:  "dàyī", translation:  "пальто", book: 2, part: 1, lesson: 25, category:  "одежда"},
{id: 66, hanzi:  "踢", pinyin:  "tī", translation:  "пинать, играть (в футбол)", book: 2, part: 1, lesson: 25, category:  "глаголы"}
];


const words = [
  // Western Food
  { chinese: "汉堡", pinyin: "hàn bǎo", english: "Hamburger", category: "western" },
  { chinese: "披萨", pinyin: "pī sà", english: "Pizza", category: "western" },
  { chinese: "炸鸡", pinyin: "zhá jī", english: "Fried chicken", category: "western" },
  { chinese: "三明治", pinyin: "sān míng zhì", english: "Sandwich", category: "western" },
  { chinese: "薯条", pinyin: "shǔ tiáo", english: "French fries", category: "western" },
  { chinese: "热狗", pinyin: "rè gǒu", english: "Hot dog", category: "western" },
  { chinese: "牛排", pinyin: "niú pái", english: "Steak", category: "western" },
  { chinese: "意大利面", pinyin: "yì dà lì miàn", english: "Pasta", category: "western" },
  { chinese: "烤鸡", pinyin: "kǎo jī", english: "Roast chicken", category: "western" },
  { chinese: "沙拉", pinyin: "shā lā", english: "Salad", category: "western" },
  { chinese: "奶酪", pinyin: "nǎi lào", english: "Cheese", category: "western" },
  { chinese: "面包", pinyin: "miàn bāo", english: "Bread", category: "western" },
  { chinese: "汤", pinyin: "tāng", english: "Soup", category: "western" },
  { chinese: "煎蛋", pinyin: "jiān dàn", english: "Fried egg", category: "western" },
  { chinese: "煎饼", pinyin: "jiān bǐng", english: "Pancake", category: "western" },
  { chinese: "甜甜圈", pinyin: "tián tián quān", english: "Donut", category: "western" },
  { chinese: "冰淇淋", pinyin: "bīng qí lín", english: "Ice cream", category: "western" },
  { chinese: "蛋糕", pinyin: "dàn gāo", english: "Cake", category: "western" },
  { chinese: "饼干", pinyin: "bǐng gān", english: "Cookie", category: "western" },
  { chinese: "巧克力", pinyin: "qiǎo kè lì", english: "Chocolate", category: "western" },

  // Meats & Ingredients
  { chinese: "牛肉", pinyin: "niú ròu", english: "Beef", category: "ingredients" },
  { chinese: "猪肉", pinyin: "zhū ròu", english: "Pork", category: "ingredients" },
  { chinese: "鸡肉", pinyin: "jī ròu", english: "Chicken", category: "ingredients" },
  { chinese: "羊肉", pinyin: "yáng ròu", english: "Lamb", category: "ingredients" },
  { chinese: "鱼", pinyin: "yú", english: "Fish", category: "ingredients" },
  { chinese: "虾", pinyin: "xiā", english: "Shrimp", category: "ingredients" },
  { chinese: "鸡蛋", pinyin: "jī dàn", english: "Egg", category: "ingredients" },
  { chinese: "米饭", pinyin: "mǐ fàn", english: "Cooked rice", category: "ingredients" },
  { chinese: "面条", pinyin: "miàn tiáo", english: "Noodles", category: "ingredients" },
  { chinese: "豆腐", pinyin: "dòu fu", english: "Tofu", category: "ingredients" },
  { chinese: "土豆", pinyin: "tǔ dòu", english: "Potato", category: "ingredients" },
  { chinese: "西红柿", pinyin: "xī hóng shì", english: "Tomato", category: "ingredients" },
  { chinese: "洋葱", pinyin: "yáng cōng", english: "Onion", category: "ingredients" },
  { chinese: "大蒜", pinyin: "dà suàn", english: "Garlic", category: "ingredients" },
  { chinese: "胡萝卜", pinyin: "hú luó bo", english: "Carrot", category: "ingredients" },
  { chinese: "蘑菇", pinyin: "mó gu", english: "Mushroom", category: "ingredients" },
  { chinese: "奶油", pinyin: "nǎi yóu", english: "Cream", category: "ingredients" },

  // Chinese Dishes
  { chinese: "饺子", pinyin: "jiǎo zi", english: "Dumplings", category: "chinese" },
  { chinese: "炒饭", pinyin: "chǎo fàn", english: "Fried rice", category: "chinese" },
  { chinese: "炒面", pinyin: "chǎo miàn", english: "Fried noodles", category: "chinese" },
  { chinese: "包子", pinyin: "bāo zi", english: "Steamed buns", category: "chinese" },
  { chinese: "春卷", pinyin: "chūn juǎn", english: "Spring rolls", category: "chinese" },
  { chinese: "北京烤鸭", pinyin: "běi jīng kǎo yā", english: "Peking duck", category: "chinese" },
  { chinese: "宫保鸡丁", pinyin: "gōng bǎo jī dīng", english: "Kung Pao chicken", category: "chinese" },
  { chinese: "麻婆豆腐", pinyin: "má pó dòu fu", english: "Mapo tofu", category: "chinese" },
  { chinese: "火锅", pinyin: "huǒ guō", english: "Hot pot", category: "chinese" },
  { chinese: "烤鸭", pinyin: "kǎo yā", english: "Roast duck", category: "chinese" },
  { chinese: "馄饨", pinyin: "hún tun", english: "Wontons", category: "chinese" },
  { chinese: "粥", pinyin: "zhōu", english: "Rice porridge", category: "chinese" },
  { chinese: "炒蔬菜", pinyin: "chǎo shū cài", english: "Stir-fried vegetables", category: "chinese" },
  { chinese: "糖醋排骨", pinyin: "táng cù pái gǔ", english: "Sweet and sour ribs", category: "chinese" },
  { chinese: "红烧肉", pinyin: "hóng shāo ròu", english: "Braised pork", category: "chinese" },
  { chinese: "兰州拉面", pinyin: "lán zhōu lā miàn", english: "Lanzhou beef noodles", category: "chinese" },
  { chinese: "煎饺", pinyin: "jiān jiǎo", english: "Pan-fried dumplings", category: "chinese" },
  { chinese: "烧卖", pinyin: "shāo mài", english: "Shumai", category: "chinese" },
  { chinese: "肠粉", pinyin: "cháng fěn", english: "Rice noodle rolls", category: "chinese" },
  { chinese: "叉烧", pinyin: "chā shāo", english: "Char siu pork", category: "chinese" },
  { chinese: "蛋炒饭", pinyin: "dàn chǎo fàn", english: "Egg fried rice", category: "chinese" },
  { chinese: "酸辣汤", pinyin: "suān là tāng", english: "Hot and sour soup", category: "chinese" },
  { chinese: "馒头", pinyin: "mán tou", english: "Steamed bun", category: "chinese" },
  { chinese: "烤串", pinyin: "kǎo chuàn", english: "Grilled skewers", category: "chinese" },
  { chinese: "煎蛋饼", pinyin: "jiān dàn bǐng", english: "Chinese egg pancake", category: "chinese" },

  // Fruits
  { chinese: "苹果", pinyin: "píng guǒ", english: "Apple", category: "fruits" },
  { chinese: "香蕉", pinyin: "xiāng jiāo", english: "Banana", category: "fruits" },
  { chinese: "橙子", pinyin: "chéng zi", english: "Orange", category: "fruits" },
  { chinese: "葡萄", pinyin: "pú tao", english: "Grapes", category: "fruits" },
  { chinese: "西瓜", pinyin: "xī guā", english: "Watermelon", category: "fruits" },
  { chinese: "芒果", pinyin: "máng guǒ", english: "Mango", category: "fruits" },
  { chinese: "菠萝", pinyin: "bō luó", english: "Pineapple", category: "fruits" },
  { chinese: "草莓", pinyin: "cǎo méi", english: "Strawberry", category: "fruits" },
  { chinese: "桃子", pinyin: "táo zi", english: "Peach", category: "fruits" },
  { chinese: "梨", pinyin: "lí", english: "Pear", category: "fruits" },
  { chinese: "樱桃", pinyin: "yīng táo", english: "Cherry", category: "fruits" },
  { chinese: "柠檬", pinyin: "níng méng", english: "Lemon", category: "fruits" },
  { chinese: "椰子", pinyin: "yē zi", english: "Coconut", category: "fruits" },
  { chinese: "木瓜", pinyin: "mù guā", english: "Papaya", category: "fruits" },
  { chinese: "猕猴桃", pinyin: "mí hóu táo", english: "Kiwi", category: "fruits" },
  { chinese: "石榴", pinyin: "shí liu", english: "Pomegranate", category: "fruits" },
  { chinese: "蓝莓", pinyin: "lán méi", english: "Blueberry", category: "fruits" },
  { chinese: "哈密瓜", pinyin: "hā mì guā", english: "Hami melon", category: "fruits" },
  { chinese: "柚子", pinyin: "yòu zi", english: "Pomelo", category: "fruits" },
  { chinese: "荔枝", pinyin: "lì zhī", english: "Lychee", category: "fruits" },
  { chinese: "龙眼", pinyin: "lóng yǎn", english: "Longan", category: "fruits" },
  { chinese: "火龙果", pinyin: "huǒ lóng guǒ", english: "Dragon fruit", category: "fruits" },
  { chinese: "山竹", pinyin: "shān zhú", english: "Mangosteen", category: "fruits" },
  { chinese: "榴莲", pinyin: "liú lián", english: "Durian", category: "fruits" },
  
  // PRIMARY COLORS
  { chinese: "红色", pinyin: "hóng sè", english: "Red", category: "colors" },
  { chinese: "黄色", pinyin: "huáng sè", english: "Yellow", category: "colors" },
  { chinese: "蓝色", pinyin: "lán sè", english: "Blue", category: "colors" },

  // COMMON COLORS
  { chinese: "绿色", pinyin: "lǜ sè", english: "Green", category: "colors" },
  { chinese: "橙色", pinyin: "chéng sè", english: "Orange", category: "colors" },
  { chinese: "紫色", pinyin: "zǐ sè", english: "Purple", category: "colors" },
  { chinese: "粉色", pinyin: "fěn sè", english: "Pink", category: "colors" },
  { chinese: "黑色", pinyin: "hēi sè", english: "Black", category: "colors" },
  { chinese: "白色", pinyin: "bái sè", english: "White", category: "colors" },
  { chinese: "灰色", pinyin: "huī sè", english: "Gray", category: "colors" },
  { chinese: "棕色", pinyin: "zōng sè", english: "Brown", category: "colors" },
  { chinese: "浅蓝色", pinyin: "qiǎn lán sè", english: "Light blue", category: "colors" },
  { chinese: "深蓝色", pinyin: "shēn lán sè", english: "Dark blue", category: "colors" },
  { chinese: "深绿色", pinyin: "shēn lǜ sè", english: "Dark green", category: "colors" },
  { chinese: "米色", pinyin: "mǐ sè", english: "Beige", category: "colors" },
  { chinese: "金色", pinyin: "jīn sè", english: "Gold", category: "colors" },
  { chinese: "银色", pinyin: "yín sè", english: "Silver", category: "colors" },

  // COMMON PHRASES
  { chinese: "请问，这个多少钱？", pinyin: "qǐng wèn, zhè ge duō shao qián?", english: "Excuse me, how much is this?", category: "phrases" },
  { chinese: "你好，早上好。", pinyin: "nǐ hǎo, zǎo shang hǎo", english: "Hello, good morning.", category: "phrases" },
  { chinese: "你好，下午好。", pinyin: "nǐ hǎo, xià wǔ hǎo", english: "Hello, good afternoon.", category: "phrases" },
  { chinese: "你好，晚上好。", pinyin: "nǐ hǎo, wǎn shang hǎo", english: "Hello, good evening.", category: "phrases" },
  { chinese: "对不起，我不明白。", pinyin: "duì bu qǐ, Wǒ tīng bù dǒng", english: "Sorry, I don't understand.", category: "phrases" },
  { chinese: "请再说一遍，好吗？", pinyin: "qǐng zài shuō yí biàn, hǎo ma?", english: "Could you say that again, please?", category: "phrases" },
  { chinese: "你会说英语吗？", pinyin: "nǐ huì shuō Yīng yǔ ma?", english: "Can you speak English?", category: "phrases" },
  { chinese: "请问，洗手间在哪里？", pinyin: "qǐng wèn, Cèsuǒ zài nǎlǐ?", english: "Excuse me, where is the bathroom?", category: "phrases" },
  { chinese: "没关系。", pinyin: "méi guān xi", english: "It's okay / No problem.", category: "phrases" },
  { chinese: "我们要点菜。", pinyin: "wǒ men yào diǎn cài", english: "We want to order.", category: "phrases" },
  { chinese: "请给我们菜单。", pinyin: "qǐng gěi wǒ men cài dān", english: "Please give us a menu.", category: "phrases" },
  { chinese: "我们有预订。", pinyin: "wǒ men yǒu yù dìng", english: "We have a reservation.", category: "phrases" },
  { chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zi?", english: "What is your name?", category: "phrases" },
  { chinese: "不要辣", pinyin: "bú yào là, qǐng", english: "Not spicy, please", category: "phrases" },
  { chinese: "这里很热", pinyin: "zhè lǐ hěn rè", english: "It's very hot here", category: "phrases" },
  { chinese: "请稍后", pinyin: "qǐng shāo hòu", english: "Please hold on / Please wait a moment", category: "phrases" },
  { chinese: "请帮帮我", pinyin: "qǐng bāng bang wǒ", english: "Please help me", category: "phrases" },

  // COMMON VERBS — 25 WORDS
  { chinese: "给", pinyin: "gěi", english: "Give", category: "verbs" },
  { chinese: "看", pinyin: "kàn", english: "See / Look / Watch", category: "verbs" },
  { chinese: "要", pinyin: "yào", english: "Want / Need", category: "verbs" },
  { chinese: "说", pinyin: "shuō", english: "Speak / Say", category: "verbs" },
  { chinese: "吃", pinyin: "chī", english: "Eat", category: "verbs" },
  { chinese: "喝", pinyin: "hē", english: "Drink", category: "verbs" },
  { chinese: "去", pinyin: "qù", english: "Go", category: "verbs" },
  { chinese: "来", pinyin: "lái", english: "Come", category: "verbs" },
  { chinese: "买", pinyin: "mǎi", english: "Buy", category: "verbs" },
  { chinese: "卖", pinyin: "mài", english: "Sell", category: "verbs" },
  { chinese: "做", pinyin: "zuò", english: "Do / Make", category: "verbs" },
  { chinese: "用", pinyin: "yòng", english: "Use", category: "verbs" },
  { chinese: "有", pinyin: "yǒu", english: "Have / There is", category: "verbs" },
  { chinese: "是", pinyin: "shì", english: "Be / Is / Am / Are", category: "verbs" },
  { chinese: "找", pinyin: "zhǎo", english: "Look for / Find", category: "verbs" },
  { chinese: "知道", pinyin: "zhī dào", english: "To know a fact, piece of information, or location", category: "verbs" },
  { chinese: "认识", pinyin: "rèn shi", english: "Know / Be acquainted with", category: "verbs" },
  { chinese: "喜欢", pinyin: "xǐ huan", english: "Like", category: "verbs" },
  { chinese: "爱", pinyin: "ài", english: "Love", category: "verbs" },
  { chinese: "想", pinyin: "xiǎng", english: "Want / Would like / Think", category: "verbs" },
  { chinese: "听", pinyin: "tīng", english: "Listen / Hear", category: "verbs" },
  { chinese: "学", pinyin: "xué", english: "Learn / Study", category: "verbs" },
  { chinese: "工作", pinyin: "gōng zuò", english: "Work", category: "verbs" },
  { chinese: "等", pinyin: "děng", english: "Wait", category: "verbs" },
  { chinese: "帮助", pinyin: "bāng zhù", english: "Help", category: "verbs" },
  { chinese: "懂", pinyin: "dǒng", english: "To know the how and why", category: "verbs" },
  { chinese: "写", pinyin: "xiě", english: "Write", category: "verbs" },
{ chinese: "记得", pinyin: "jì de", english: "Remember", category: "verbs" },
{ chinese: "忘记", pinyin: "wàng jì", english: "Forget", category: "verbs" },
{ chinese: "解释", pinyin: "jiě shì", english: "Explain", category: "verbs" },
{ chinese: "决定", pinyin: "jué dìng", english: "Decide", category: "verbs" },
{ chinese: "选择", pinyin: "xuǎn zé", english: "Choose", category: "verbs" },
{ chinese: "检查", pinyin: "jiǎn chá", english: "Check / Inspect", category: "verbs" },
{ chinese: "比较", pinyin: "bǐ jiào", english: "Compare", category: "verbs" },
{ chinese: "准备", pinyin: "zhǔn bèi", english: "Prepare", category: "verbs" },
{ chinese: "开始", pinyin: "kāi shǐ", english: "Begin / Start", category: "verbs" },
{ chinese: "结束", pinyin: "jié shù", english: "Finish / End", category: "verbs" },
{ chinese: "发现", pinyin: "fā xiàn", english: "Discover / Notice", category: "verbs" },
{ chinese: "解决", pinyin: "jiě jué", english: "Solve / Resolve", category: "verbs" },
{ chinese: "联系", pinyin: "lián xì", english: "Contact", category: "verbs" },
{ chinese: "参加", pinyin: "cān jiā", english: "Participate / Attend", category: "verbs" },
{ chinese: "提高", pinyin: "tí gāo", english: "Improve / Raise", category: "verbs" },
{ chinese: "降低", pinyin: "jiàng dī", english: "Lower / Reduce", category: "verbs" },
{ chinese: "继续", pinyin: "jì xù", english: "Continue", category: "verbs" },
{ chinese: "停止", pinyin: "tíng zhǐ", english: "Stop", category: "verbs" },
{ chinese: "同意", pinyin: "tóng yì", english: "Agree", category: "verbs" },
{ chinese: "拒绝", pinyin: "jù jué", english: "Refuse / Reject", category: "verbs" },
{ chinese: "走路", pinyin: "zǒu lù", english: "Walk", category: "verbs" },
{ chinese: "坐下", pinyin: "zuò xià", english: "Sit down", category: "verbs" },
// Time & Locations
{ chinese: "今天", pinyin: "jīn tiān", english: "Today", category: "timeLocation" },
{ chinese: "明天", pinyin: "míng tiān", english: "Tomorrow", category: "timeLocation" },
{ chinese: "昨天", pinyin: "zuó tiān", english: "Yesterday", category: "timeLocation" },
{ chinese: "后面", pinyin: "hòu miàn", english: "At the back / Behind", category: "timeLocation" },
{ chinese: "前面", pinyin: "qián miàn", english: "In front", category: "timeLocation" },
{ chinese: "旁边", pinyin: "páng biān", english: "Beside / Next to", category: "timeLocation" },
{ chinese: "附近", pinyin: "fù jìn", english: "Near / Nearby", category: "timeLocation" },
// Days of the Week
{ chinese: "星期一", pinyin: "xīng qī yī", english: "Monday", category: "timeLocation" },
{ chinese: "星期二", pinyin: "xīng qī èr", english: "Tuesday", category: "timeLocation" },
{ chinese: "星期三", pinyin: "xīng qī sān", english: "Wednesday", category: "timeLocation" },
{ chinese: "星期四", pinyin: "xīng qī sì", english: "Thursday", category: "timeLocation" },
{ chinese: "星期五", pinyin: "xīng qī wǔ", english: "Friday", category: "timeLocation" },
{ chinese: "星期六", pinyin: "xīng qī liù", english: "Saturday", category: "timeLocation" },
{ chinese: "星期日", pinyin: "xīng qī rì", english: "Sunday", category: "timeLocation" },
// Common Words
{ chinese: "这", pinyin: "zhè", english: "This", category: "phrases" },
{ chinese: "那", pinyin: "nà", english: "That", category: "phrases" },
{ chinese: "这里", pinyin: "zhè lǐ", english: "Here", category: "phrases" },
{ chinese: "那里", pinyin: "nà lǐ", english: "There", category: "phrases" },
{ chinese: "什么", pinyin: "shén me", english: "What", category: "phrases" },
{ chinese: "谁", pinyin: "shéi", english: "Who", category: "phrases" },
{ chinese: "哪里", pinyin: "nǎ lǐ", english: "Where", category: "phrases" },
{ chinese: "什么时候", pinyin: "shén me shí hou", english: "When", category: "phrases" },
{ chinese: "为什么", pinyin: "wèi shén me", english: "Why", category: "phrases" },
{ chinese: "怎么", pinyin: "zěn me", english: "How", category: "phrases" },
{ chinese: "现在", pinyin: "xiàn zài", english: "Now / Right now", category: "phrases" },
];

const chineseEl = document.getElementById("chinese");
const pinyinEl = document.getElementById("pinyin");
const englishEl = document.getElementById("english");
const flashcardEl = document.getElementById("flashcard");
const categorySelect = document.getElementById("categorySelect");
const nextButton = document.getElementById("nextButton");
const hintEl = document.getElementById("hint");
const progressEl = document.getElementById("progress");

let deck = [];
let currentIndex = 0;
let revealed = false;

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function createDeck() {
  const selectedCategory = categorySelect.value;

  const filteredWords = selectedCategory === "all"
    ? words
    : words.filter(word => word.category === selectedCategory);

  deck = shuffle(filteredWords);
  currentIndex = 0;
  revealed = false;

  renderCard();
}

function renderCard() {
  if (deck.length === 0) {
    chineseEl.textContent = "没有单词";
    pinyinEl.textContent = "méi yǒu dān cí";
    englishEl.textContent = "No words found";
    progressEl.textContent = "";
    hintEl.textContent = "";
    return;
  }

  const word = deck[currentIndex];

  chineseEl.textContent = word.chinese;
  pinyinEl.textContent = word.pinyin;
  englishEl.textContent = revealed ? word.english : "";

  hintEl.textContent = revealed
    ? "Tap Next Word to continue."
    : "Tap the card to reveal the English translation.";

  progressEl.textContent =
    `Word ${currentIndex + 1} of ${deck.length}`;
}

function revealAnswer() {
  if (deck.length === 0 || revealed) return;

  revealed = true;
  renderCard();
}

function nextWord() {
  if (deck.length === 0) return;

  if (currentIndex < deck.length - 1) {
    currentIndex++;
  } else {
    // All words have been shown. Shuffle for a new round.
    deck = shuffle(deck);
    currentIndex = 0;
  }

  revealed = false;
  renderCard();
}

flashcardEl.addEventListener("click", () => {
  if (revealed) {
    nextWord();
  } else {
    revealAnswer();
  }
});

flashcardEl.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealAnswer();
  }
});

nextButton.addEventListener("click", nextWord);

categorySelect.addEventListener("change", createDeck);

// Start the app.
createDeck();

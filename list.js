var music_list=[];
var start_from=0;

// 华语歌曲
music_list.push(['莫艳琳 - 爱一点','hua yu ge qu/ai yi dian.mp3']);
music_list.push(['小沈阳,高进 - 我的好兄弟','hua yu ge qu/wo de hao xiong di.mp3']);
music_list.push(['庞龙 - 兄弟抱一下','hua yu ge qu/xiong di bao yi xia.mp3']);
music_list.push(['刘惜君 - 我很快乐','hua yu ge qu/wo hen kuai le.mp3']);
music_list.push(['四个女生 - 心愿','hua yu ge qu/xin yuan.mp3']);
music_list.push(['阿兰 - 栀子花开(中文版)','hua yu ge qu/zhi zi hua kai.mp3']);
music_list.push(['周迅 - 飘摇','hua yu ge qu/piao yao.mp3']);
music_list.push(['张靓颖 - 如果这就是爱情','hua yu ge qu/ru guo zhe jiu shi ai qing.mp3']);
music_list.push(['牛奶咖啡 - 越长大越孤单','hua yu ge qu/yue zhang da yue gu dan.mp3']);
music_list.push(['汪峰 - 怒放的生命','hua yu ge qu/nu fang de sheng ming.mp3']);
music_list.push(['郝云 - 活着','hua yu ge qu/huo zhe.mp3']);
music_list.push(['范玮琪 - 最初的梦想','hua yu ge qu/zui chu de meng xiang.mp3']);
music_list.push(['张韶涵 - 隐形的翅膀','hua yu ge qu/yin xin de chi bang.mp3']);
music_list.push(['陈瑞 - 白狐','hua yu ge qu/bai hu.mp3']);
music_list.push(['许巍 - 蓝莲花','hua yu ge qu/lan lian hua.mp3']);
music_list.push(['逃跑计划 - 夜空中最亮的星','hua yu ge qu/ye kong zhong zui liang de xing.mp3']);
music_list.push(['李琛 - 窗外','hua yu ge qu/chuang wai.mp3']);
music_list.push(['田震 - 风雨彩虹铿锵玫瑰','hua yu ge qu/feng yu cai hong keng qiang mei gui.mp3']);
music_list.push(['杨宗纬 - 一次就好','hua yu ge qu/yi ci jiu hao.mp3']);
music_list.push(['江珊 - 梦里水乡','hua yu ge qu/meng li shui xiang.mp3']);
music_list.push(['孙燕姿 - 遇见','hua yu ge qu/yu jian.mp3']);

//泰语歌曲
music_list.push(['Sara Nusara Poongprasert - 即使知道要见面','tai yu ge qu/ji shi zhi dao yao jian mian.mp3']);

// 韩语歌曲
music_list.push(['泰仁 - 那男人的谎言','han yu ge qu/na nan ren de huang yan.mp3']);

// 英语歌曲
music_list.push(['Nana - Lonely','ying yu ge qu/Nana - Lonely.mp3']);
music_list.push(['Ann Winsborn - La La Love On My Mind','ying yu ge qu/Ann Winsborn - La La Love On My Mind.mp3']);
music_list.push(['圣女合唱团 - Stop! Stop! Stop!','ying yu ge qu/Stop! Stop! Stop!.mp3']);
music_list.push(['Sarah Connor,Natural - Just One Last Dance','ying yu ge qu/Sarah Connor,Natural - Just One Last Dance.mp3']);
music_list.push(['A＊Teens - Firefly','ying yu ge qu/A Teens - Firefly.mp3']);
music_list.push(['Various Artists - TEENAGE LIFE','ying yu ge qu/Various Artists - TEENAGE LIFE.mp3']);
music_list.push(['M2M - Pretty Boy','ying yu ge qu/M2M - Pretty Boy.mp3']);
music_list.push(['Deutschland sucht den Superstar,Various Artists - Cry On My Shoulder','ying yu ge qu/Deutschland sucht den Superstar,Various Artists - Cry On My Shoulder.mp3']);

// 振奋人心
music_list.push(['Audio Machine - Breath and Life','zhen fen ren xin/Audio Machine - Breath and Life.mp3']);
music_list.push(['Era - The Mass','zhen fen ren xin/Era - The Mass.mp3']);
music_list.push(['Immediate Music - Tales of the Electric Romeo','zhen fen ren xin/Immediate Music - Tales of the Electric Romeo.mp3']);
music_list.push(['Mark Petrie - Go Time','zhen fen ren xin/Mark Petrie - Go Time.mp3']);
music_list.push(['Two Steps From Hell - Victory','zhen fen ren xin/Two Steps From Hell - Victory.mp3']);

// 纯音乐
music_list.push(['羽肿 - 花火が瞬く夜に','pure/hua huo shun ye.mp3']);
music_list.push(['Tears 眼泪','pure/Tears.mp3']);
music_list.push(['一个人的时光','pure/yi ge ren de shi guang.mp3']);
music_list.push(['记得','pure/ji de.mp3']);
music_list.push(['赵海洋 - 《瞬间的永恒》夜色钢琴曲','pure/shun jian de yong heng.mp3']);
music_list.push(['Pianoboy - The Truth That You Leave','pure/Pianoboy - The Truth That You Leave.mp3']);
music_list.push(['天之痕','pure/tian zhi hen.mp3']);
music_list.push(['夜的钢琴曲五','pure/ye de gang qing qu 5.mp3']);
music_list.push(['DJ OKAWARI - Flower Dance','pure/DJ OKAWARI - Flower Dance.mp3']);

var ul=document.getElementById('ul');
music_list.forEach(function(ele)
{
    var li=document.createElement('li');
    li.innerText=ele[0];
    ul.appendChild(li);
    li.onclick=function()
    {
        var data=ele;
        switch_music(data);
    }
});
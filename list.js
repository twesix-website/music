var music_list=[];
music_list.push(['Sara Nusara Poongprasert - 即使知道要见面','ji shi zhi dao yao jian mian.mp3']);
music_list.push(['江珊 - 梦里水乡','meng li shui xiang.mp3']);
music_list.push(['Nana - Lonely','Nana - Lonely.mp3']);
music_list.push(['Two Steps From Hell - Victory.mp3']);

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
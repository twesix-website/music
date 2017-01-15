var music_list=[];
music_list.push('Nana - Lonely.mp3');
music_list.push('Sara Nusara Poongprasert - เจอกับตัวเอง...ถึงรู้（即使知道要见面）.mp3');
music_list.push('Two Steps From Hell - Victory.mp3');
music_list.push('江珊 - 梦里水乡.mp3');

var ul=document.getElementById('ul');
music_list.forEach(function(ele)
{
    var li=document.createElement('li');
    li.innerText=ele;
    ul.appendChild(li);
    li.onclick=function()
    {
        var name=ele;
        switch_music(name);
    }
});
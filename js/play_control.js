var canvas=document.getElementById('canvas');
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
var ctx=canvas.getContext('2d');
var c_width=canvas.width;
var c_height=canvas.height;
var meter_width=20;
var gap_width=2;
var meter_num=parseInt(c_width)/(meter_width+gap_width);
var cap_height=2;
var cap_fall_speed=3;
var cap_style='#fff';
var cap_positions=[];

var gradient=ctx.createLinearGradient(0,0,0,1600);
gradient.addColorStop(1,'#0f0');
gradient.addColorStop(0.5,'#ff0');
gradient.addColorStop(0,'#f00');

var control_panel=document.getElementById('control_panel');
control_panel.onclick=function(e)
{
    // e.preventBubble();
    e.preventDefault();
    e.stopPropagation();
    if(player.paused)
    {
        player.play()
    }
    else
    {
        player.pause();
    }
};
var info=document.getElementById('info');
var player=document.getElementById('audio');
var visualizer=new Visualizer(player,ctx);

player.addEventListener('canplay',function()
{
    info.innerText=info.innerText.split('(正在加载，请稍候...)')[0];
});

var base='assets/audio/';
function switch_music(data)
{
    player.src=base+data[1];
    info.innerText=data[0]+'(正在加载，请稍候...)';
    player.play();
}

switch_music(music_list[0]);
// $('.on').each(function () {
// $(this).on('click',function () {
//   $(this).css({'color':'red','backgroundColor':'black'})
// })
// });
//一元秒杀
$('.navtab li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#f71b3f'});
  $('.seckill ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//东南亚
$('.navtab2 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#c1b319'});
  $('.line_part1 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//日本
$('.navtab3 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#f71b3f'});
  $('.line_part2 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//华东
$('.navtab4 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#758cfa'});
  $('.line_part3 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//华北
$('.navtab5 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#b66f11'});
  $('.line_part4 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//华中
$('.navtab6 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#3d71ae'});
  $('.line_part5 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//华南
$('.navtab9 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#666633'});
  $('.line_part6 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//西南
$('.navtab7 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#168bc8'});
  $('.line_part7 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});
//西北
$('.navtab8 li').on('click',function () {
  $(this).css({'color':'#454444','background':'#fff'}).siblings().css({'color':'#fff','background':'#db7b09'});
  $('.line_part8 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
});

$('.bottom_navfix li').on('click',function () {
  $(this).css('background','#eb6100').siblings().css('background','#eb0048')
});


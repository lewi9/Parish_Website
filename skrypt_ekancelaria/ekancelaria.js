$(document).ready(function(){
$('#r1 a').click(function(){
$('#page').css({
  'opacity' : '0.1'
});
$('body').append('<div id="ekf"></div>');
/*$('#ekf').css({
  'opacity' : '1',
  'width': '70%',
  'height': '80%',
  'background-color': '#e6f2ff',
  'position' : 'fixed',
  'left': '15%',
  'top': '10%',
  'font-size' : '2vw',
});*/
$('#ekf').append('<h2>Zgłoszenie E-kancelaria</h2>');
/*$('#ekf h2').css({
  'margin-top': '0px',
  'text-align': 'center',
  'background-color': '#001a33',
  'color': 'white',
  'height': '5vw',
  'font-size': '4vw',
  'line-height' : '5vw'
});*/
$('#ekf').append('<button type="button" id="xbut">X</button>');
/*$('#xbut').css({
  'cursor': 'pointer',
  'position' : 'absolute',
  'right' : '1vw',
  'top' : '0.5vw',
  'height': '4vw',
  'width' : '4vw',
  'color' : 'red',
  'font-size': '3vw',
  'border' : '0px'
});*/
$('#ekf').append('<div id="formk"></div>')
/*$('#formk').css({
  'margin-left' : '8vw',
  'margin-right' : '4vw',
  'display' : 'grid',
  'grid-template-columns': '1fr 3fr',
  'grid-template-rows' : '1fr 1fr 1fr 1fr',
  'column-gap' : '1vw',
  'row-gap' : '0.5vw',
});*/
$('#formk').append('<label style="grid-row:1;" for="godnosc">Imię i nazwisko: </label><input style="grid-row:1;" type="text" name="godnosc" id="godnosc">');
$('#formk').append('<label style="grid-row:2;" for="telefon">Numer kontaktowy: </label><input style="grid-row:2;" type="text" name="telefon" id="telefon" placeholder="xxx-xxx-xxx">');
$('#formk').append('<label style="grid-row:3;" for="E-mail">E-mail(nieobowiązkowe): </label><input style="grid-row:3;" type="text" name="E-mail" id="E-mail">');
/*$('#formk input').css({
  'width' : '80%',
  'height' : '2vw',
  'font-size' : '1.5vw',
  'grid-column' : '2',
  'border' : '0px'
});*/
/*$('#formk label').css({
  'grid-column' : '1'
});*/
$('#formk').append('<label style="grid-row:4;" for="zgloszenie"><b>Zgłoszenie:</b> </label>');
$('#ekf').append('<textarea type="text" name="zgloszenie" id="zgloszenie"></textarea>');
/*$('#zgloszenie').css({
  'margin-top' : '1vw',
  'margin-left' : '8vw',
  'margin-right' : '12vw',
  'width': '50.5vw',
  'font-size' : '2vw',
  'height' : '10vw',
  'line-height' : '2vw',
  'border' : '0px'
});*/
$('#ekf').append('<button type="button" id="submit">Wyślij zgłoszenie</button>');
/*$('#submit').css({
  'cursor': 'pointer',
  'left': '50%',
  'top' : '85%',
  'border' : '0px',
  'position': 'absolute',
  '-ms-transform': 'translateX(-50%)',
  'transform': 'translateX(-50%)',
  'width' : '10vw',
  'height' : '4vw',
  'font-size' : '1vw',
  'background-color': '#0056b3',
  'color' : 'White',
});*/
});//end of click

$(document).on( 'click', '#xbut', function(){
$(this).parents('div').remove();
$('#page').css({
  'opacity' : '1'
});
});//end of click

$(document).on( 'click', '#submit', function(){
if($('#godnosc').val() == "")
{
  alert("Nie podano imienia i nazwiska");
  return false;
}
if($('#telefon').val() == "")
{
  alert("Nie podano numeru telefonu");
  return false;
}
else
{
  let nrt = $('#telefon').val();
  const pattern = /^[0-9]{3}-{1}[0-9]{3}-{1}[0-9]{3}$/;
  if(pattern.test(nrt) == false)
  {
    alert('Podany numer telefonu jest niepoprawny, podaj go w formacie "XXX-XXX-XXX"');
    return false;
  }
}
if($('#zgloszenie').val() == "")
{
  alert("Zgłoszenie jest puste");
  return false;
}
$(this).parents('div').remove();
$('#page').css({
  'opacity' : '1'
});
alert("Zgłoszenie zostało wysłane");
});//end of click

});//end of script

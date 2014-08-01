Ti.UI.setBackgroundColor('white');
var win = Ti.UI.createWindow({  
  title: 'Click window to test',
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false
});

win.addEventListener('click', function(e){
  alert('The file has been deleted');
});
win.open();
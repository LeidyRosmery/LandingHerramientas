$(window).load( function() {
  //width: 100% mobile container
  var width = window.innerWidth || document.body.clientWidth || window.outerWidth;

    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="0px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="0px";
    document.querySelector('#main.newMainSection > .container').style.width="100%";

});

$(window).resize( function() {
  //width: 100% mobile container
  var width = window.innerWidth || document.body.clientWidth || window.outerWidth;

    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="0px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="0px";
  document.querySelector('#main.newMainSection > .container').style.width="100%";

});

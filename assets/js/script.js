
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
  sURLVariables = sPageURL.split('&'),
  sParameterName,
  i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

var layout_page = new Vue({
  el: '#app',
  data: {
    seen:{
      model: false,
    },
    markdown: {
      home: {
        title: "Introduction",
        index: "readme.md",
        content: "",
      },
      stretchis: {
        title: "strechix",
        index: "stretchis.md",
        content: "",
      },
      screenPrinting: {
        title: "Introduction",
        index: "screenPrinting.md",
        content: "",
      },
      printScreen: {
        title: "Introduction",
        index: "printScreen.md",
        content: "",
      },
    },
  },
  computed: {
    get_document: function() {
      // console.log(getUrlParameter('page'));
      if(getUrlParameter('page') == null ) {
        return this.markdown.home.content
      } else {
        return this.markdown[getUrlParameter('page')].content

      }
      // console.log(this.markdown[my_url].content);
    },
  },
  methods: {

  },
})

// Counting my pages numbers
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var size = Object.size(layout_page.markdown);
var control_stop = 0;
// loading of every markdown pages from md_files referenced in this.markdown
$.each( layout_page.markdown, function(name, value) {
  $.get( 'assets/md/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    console.alert('Mauvais chargement des docs')
  }).done(function( ) {
    // Modal Img Creation
    if( control_stop < size ){
      var images = $('.markdown-body').find('img')
      // console.log(images);
      images.each(function(){
        $(this).on('click', function(){
          layout_page.template.imgSrc_modal = this.src;
          layout_page.seen.modal = true;
        })
      })
      control_stop++
    }
  })
});
// console.log(getUrlParameter('page'));

// Aside Navigation
var display = window.innerWidth
if( display > 600){
    $('.nav-offcanvas').addClass('open');
} else {
  $('#offCanvas').on('click', function () {
    $('.nav-offcanvas').addClass('open');
    $('.offcanvas-overlay').addClass('on');
  });
  $('#offCanvasClose, .offcanvas-overlay').on('click', function () {
    $('.nav-offcanvas').removeClass('open');
    $('.offcanvas-overlay').removeClass('on');
  });

}

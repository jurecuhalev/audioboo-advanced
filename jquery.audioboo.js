jQuery.fn.audioboo = function(clip_id) {

    /* IE caches too much */
    var date = new Date();
    var _this = this;
    jQuery.ajax({
      'url': 'http://api.audioboo.fm/audio_clips/'+clip_id+'.jsonp?_='+date.getTime(),
      'dataType': 'jsonp',
      cache: false,
      contentType: "application/json",
      success: function(data){
        _this.flash({
          'swf': 'http://boos.audioboo.fm/swf/fullsize_player.swf',
          'height': 129,
          'width': 300,
          'flashvars': {
              'scale': 'noscale',
              'salign': 'lt',
              'bgColor': '#000000',
              'allowScriptAccess': 'always',
              'wmode': 'window',
              'mp3': data.body.audio_clip.urls.high_mp3,
              'mp3Title': data.body.audio_clip.title,
              'mp3LinkURL': data.body.audio_clip.urls.high_mp3,
              'rootID': 'boo_player_1',
              'mp3Author': data.body.audio_clip.user.username
          }
        });
      }
    });
}
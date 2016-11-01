// Copyright (C) 2014 Brian Poteat
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

Meteor.subscribe('video');
Meteor.subscribe('videos');
Meteor.subscribe('audio');
Meteor.subscribe('audios');
Meteor.subscribe('users');

window.URL = window.URL ||
    window.webkitURL;

Template.showVideo.onLoad = function () {
    console.log("Template.showVideo.onLoad");
};

Template.showVideo.hasUser = function() {
    console.log("Template.showVideo.hasVideo");
    if (!this || !this.userId) {
        console.log("No user");
        return false;
    }
    return true;
}

Template.showVideo.hasVideo = function() {
    if (!this.audio || !this.video) {
        console.log("No video or audio");
        return false;
    }

    return true;
}

Template.showVideo.userEmail = function () {
    console.log("Template.showVideo.userTitle: " + this.userId);
    if (!this.userId) {
        return "";
    }

    var user = Meteor.users.findOne({ _id: this.userId });
    return user.emails[0].address;
};

// Template.showVideo.userVideo = function () {
//     console.log("Template.record.userVideo: " + this.userId);
//     if (!this.video) {
//         return "";
//     }

//     var blob = new Blob([this.video.video.file], {type: this.video.video.type});
//     return window.URL.createObjectURL(blob);
// };

var check = 0;

Template.showVideo.userAudio = function () {

    console.log("Template.showVideo.userAudio: " + this.userId + " Audio length"  + this.audio.length);
    if (!this.audio) {
        console.log("empty");
        return "";
    }

    //console.log("this.audio.audio.file" + JSON.stringify(this.audio[0].audio));

var blob = [];

var i=0;

    for (  i ; i < this.audio.length ; i++){



    blob[i] = new Blob([this.audio[i].audio.file], {type: this.audio[i].audio.type});



console.log(" HAHAH " + window.URL.createObjectURL(blob[i]));

// var h =document.getElementById('review_audio');
// document.body.insertAdjacentHTML( 'afterend', '<audio id="review_audio"  controls src=' + window.URL.createObjectURL(blob[i]) + '></audio><br>')



}






    //return window.URL.createObjectURL(blob[2]);
};

Template.showVideo.audio = function () {
   






    return this.audio;
};

Template.showVideo.audioList = function () {
    console.log("Template.home.userList");
    return UserAudios.find().fetch();
};


Template.showVideo.events = {
    'click #play-recording': function (e) {
        console.log("click #play-recording");

        //document.getElementById("review_video").play();
        document.getElementById("review_audio").play();

        
    },

    'click .name': function(e,t){
console.log(this.audio.type);

var blob = new Blob([this.audio.file], {type: this.audio.type});

var src1 = window.URL.createObjectURL(blob);

var h =document.getElementById('review_audio');

h.src= src1;


}
};
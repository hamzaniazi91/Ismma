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

Template.home.userList = function () {
    console.log("Template.home.userList");
    return Meteor.users.find();
};

Template.home.audioList = function () {
    console.log("Template.home.userList");
    return UserAudios.find().fetch();
};

Template.userVideo.email = function () {
    console.log("Template.userVideo.email");
    if (!this._id) {
        return "";
    }

    var user = Meteor.users.findOne({ _id: this._id });
    //console.log(JSON.stringify(user));
    return user.emails[0].address;
}


Template.header.userId = function () {
    return Meteor.userId();
}


Template.userVideo2.All = function () {


	 console.log("All Audios" + UserAudios.find().fetch());
    return UserAudios.find().fetch();
}

Template.userVideo2.email2 = function () {
    console.log("Template.userVideo2.email");
    if (!this._id) {
        return "";
    }

    var user = Meteor.users.findOne({ _id: this._id });
    //console.log(JSON.stringify(user));
    return user.emails[0].address;
}

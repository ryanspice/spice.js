export default {
    //	//To ensure your data is filled, use a callback return your response data.
    //	var facebook = function(){ return App.user.pull();};
    //
    //	//Your facebook ID, callback function(){}
    //	App.user.fbconnect(id, facebook)
    name		:"",
    id			:"",
    locale		:"",
    gender		:"",
    updated_time:"",
    timezone	:"",
    quotes		:"",
    response	:{},

    //returns the response object
    get:function(){return this.response;},

    //facebook connection
    fbconnect:function con(appid,callback){
            window.fbAsyncInit = function() {
            FB.init({
            appId      : appid,
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
            });
            FB.login(function(){
                FB.api('/me/feed', 'post', {message: 'Hello, world!'});}, {scope: 'publish_actions'});
            };

          // Load the SDK asynchronously
          (function(d){
           var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement('script'); js.id = id; js.async = true;
           js.src = "//connect.facebook.net/en_US/all.js";
           ref.parentNode.insertBefore(js, ref);
          }(document));

          // Here we run a very simple Flappy of the Graph API after login is successful.
          // This testAPI() function is only called in those cases.

          /*
          function testAPI() {
        console.log('Welcome!  Fetching your information.... ');

            FB.api('/me', function(response) {
                App.user.facebook(response);
                callback(response);
              log('Good to see you, ' + response.name + '.');
            });
          }


          */
        },

    //facebook callback
    facebook:function(response){
        this.response = response;
        this.name = this.response.name;
        this.id = this.response.id;
        this.locale = this.response.locale;
        this.gender = this.response.gender;
        this.updated_time = this.response.updated_time;
        this.timezone = this.response.timezone;
        this.quotes = this.response.quotes;
    }

};

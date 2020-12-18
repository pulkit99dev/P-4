module.exports.signup = function(req, res){
    return res.render('sign-up', {
        title: 'Sign-up'
    });
};

module.exports.signin = function(req, res){
    return res.render('sign-in',{
        title: 'Sign-in'
    });
};

module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title : 'Profile Page'
    })
}
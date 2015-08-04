exports.index = function(req, res){
  res.render('index');
};

exports.about = function(req, res){
  res.render('index', { title: 'About Us' });
};

exports.contact = function(req, res){
  res.render('index', {title: 'Contact Us' });
};

exports.nsn = function(req, res){
  res.render('nsn', { title: 'NSN Search Results' });
};
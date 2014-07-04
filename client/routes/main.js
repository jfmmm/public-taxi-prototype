
Router.configure({
	layoutTemplate: 'main',
	yieldTemplates: {
		'header':	{to: 'header'},
		'map':		{to: 'map'},
		'footer':	{to: 'footer'}
	},
    notFoundTemplate: 'notFound'
});

//home
Router.map(function(){
	this.route('home', {
		path: '/'
	});
});
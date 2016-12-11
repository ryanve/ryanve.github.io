$.get('https://api.github.com/users/ryanve/repos?sort=pushed&per_page=200', function(repos) {

  repos = repos.filter(function(o) {
    return !o.fork && !o.private && o.language && o.homepage && o.description && o.name !== 'ryanve.github.io'
  }).map(function(o) {
    return {
      name: o.name,
      description: o.description,
      href: o.has_pages ? o.homepage : o.html_url
    }
  }).map(function(o) {
    return '<li><a href="' + o.href + '"><b>' + o.name + '</b>: ' +  o.description + '</a></li>'
  });

  $('[data-ajax=repos]').html(repos.join(''))

}, 'json');

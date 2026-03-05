// redirect happens via meta refresh — this just adds a countdown if wanted
// and handles the case where meta refresh is blocked
setTimeout(() => {
  window.location.replace('/api');
}, 2000);

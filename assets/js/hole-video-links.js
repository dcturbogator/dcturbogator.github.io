(function () {
  var player = document.querySelector('.post-video iframe');
  if (!player) return;

  document.querySelectorAll('[data-video-start]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Preserve normal browser behavior for opening links in another tab.
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      var seconds = Number(link.dataset.videoStart);
      if (!Number.isInteger(seconds) || seconds < 0) return;

      var videoUrl = new URL(player.src);
      videoUrl.searchParams.set('start', seconds);
      videoUrl.searchParams.set('autoplay', '1');
      player.allow = player.allow ? player.allow + '; autoplay' : 'autoplay';
      player.src = videoUrl.href;
      event.preventDefault();
      player.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'center'
      });
    });
  });
}());

// Auto-scroll both image sliders
document.querySelectorAll('.scroll-gallery').forEach(gallery => {
    setInterval(() => {
      gallery.scrollBy({ left: 1, behavior: 'smooth' });
      if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 30); // Adjust speed here if needed
  });
  
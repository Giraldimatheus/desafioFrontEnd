document.addEventListener('DOMContentLoaded', function() {
    var btnTopo = document.getElementById('btn-topo');
  
    btnTopo.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
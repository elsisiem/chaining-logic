// script.js
document.querySelectorAll('[data-explanation]').forEach(function(element) {
  element.addEventListener('mouseover', function() {
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = element.getAttribute('data-explanation');
    element.appendChild(tooltip);
  });
  element.addEventListener('mouseout', function() {
    let tooltip = element.querySelector('.tooltip');
    if (tooltip) {
      element.removeChild(tooltip);
    }
  });
});
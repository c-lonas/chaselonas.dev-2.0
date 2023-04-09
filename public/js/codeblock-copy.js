// Select all code blocks on the page
const codeBlocks = document.querySelectorAll('pre code');

// Add a "click to copy" button to each code block
codeBlocks.forEach(function(block) {
  const button = document.createElement('button');
  button.innerHTML = 'Copy';
  button.classList.add('copy-button');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
    const code = block.innerText;
    navigator.clipboard.writeText(code)
      .then(function() {
        button.innerHTML = 'Copied!';
        setTimeout(function() {
          button.innerHTML = 'Copy';
        }, 2000);
      })
      .catch(function(error) {
        console.error('Failed to copy code: ', error);
      });
  });

  // Append the button to the code block
  block.parentNode.insertBefore(button, block);
});
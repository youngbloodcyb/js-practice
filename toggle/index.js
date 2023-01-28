console.log('test');

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const question = e.currentTarget.parentElement.parentElement;
      question.classList.toggle('show-text');
    })
})

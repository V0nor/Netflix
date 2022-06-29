const faqQuestion = document.querySelectorAll('.faq__question');
const faqAnswer = document.querySelectorAll('.faq__answer');
for (let i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener('click', () => {
    faqAnswer[i].classList.toggle('active');
    faqQuestion[i].classList.toggle('active');
  });
}

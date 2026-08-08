// CTAボタンのスムーズスクロール
document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.hero__cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(ctaButton.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // フォーム送信処理
  const form = document.getElementById('register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('登録完了！');
    });
  }
});

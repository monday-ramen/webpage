// 画像スライドショー
document.addEventListener('DOMContentLoaded', function () {
    // ヒーローセクションのスライダー
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        // 現在のスライドから active クラスを削除
        slides[currentSlide].classList.remove('active');

        // 次のスライドへ移動（最後まで行ったら最初に戻る）
        currentSlide = (currentSlide + 1) % slides.length;

        // 新しいスライドに active クラスを追加
        slides[currentSlide].classList.add('active');
    }

    // 5秒ごとに次のスライドへ自動切り替え
    setInterval(nextSlide, 5000);
});

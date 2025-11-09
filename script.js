// 画像スライドショー
let currentMenuSlide = 0;
let menuAutoSlide;

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

    // メニューセクションの自動スライダーを開始
    startMenuAutoSlide();
});

// メニュースライダーの表示を更新
function updateMenuSlider() {
    const menuSlides = document.querySelectorAll('.menu-slide');
    const dots = document.querySelectorAll('.dot');

    menuSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentMenuSlide) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentMenuSlide) {
            dot.classList.add('active');
        }
    });
}

// メニュースライドを変更（前後ボタン用）
function changeMenuSlide(direction) {
    const menuSlides = document.querySelectorAll('.menu-slide');
    currentMenuSlide = (currentMenuSlide + direction + menuSlides.length) % menuSlides.length;
    updateMenuSlider();

    // 手動操作時は自動スライドをリセット
    resetMenuAutoSlide();
}

// 特定のスライドへ移動（ドット用）
function goToMenuSlide(index) {
    currentMenuSlide = index;
    updateMenuSlider();

    // 手動操作時は自動スライドをリセット
    resetMenuAutoSlide();
}

// 自動スライドを開始
function startMenuAutoSlide() {
    menuAutoSlide = setInterval(() => {
        const menuSlides = document.querySelectorAll('.menu-slide');
        currentMenuSlide = (currentMenuSlide + 1) % menuSlides.length;
        updateMenuSlider();
    }, 4000);
}

// 自動スライドをリセット（手動操作後に再開）
function resetMenuAutoSlide() {
    clearInterval(menuAutoSlide);
    startMenuAutoSlide();
}

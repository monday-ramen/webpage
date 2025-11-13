// 画像スライドショー
document.addEventListener('DOMContentLoaded', function () {
    // ヒーローセクションのスライダー
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // 遅延読み込み: data-bg属性から背景画像をロード
    slides.forEach((slide, index) => {
        if (index > 0 && slide.dataset.bg) {
            const img = new Image();
            img.onload = () => {
                slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
            };
            img.src = slide.dataset.bg;
        }
    });

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

// Google Maps の遅延読み込み
function loadMap() {
    const mapContainer = document.getElementById('map-container');
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1614.9517138385947!2d139.8750312983948!3d35.9493323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601899598003f481%3A0x796712540813f5a1!2z5pyI5puc44Gg44GR44Gu44Op44O844Oh44Oz5bGLIH5SQU1FTiBNT05EQVl-!5e0!3m2!1sja!2sus!4v1762670785661!5m2!1sja!2sus";
    iframe.width = "400";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    mapContainer.innerHTML = '';
    mapContainer.appendChild(iframe);
}

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

// メニューモーダルの機能
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('menuModal');
    const modalImage = document.getElementById('modalImage');
    const modalComment = document.getElementById('modalComment');
    const closeBtn = document.querySelector('.modal-close');
    const menuItems = document.querySelectorAll('.menu-item');

    // メニューアイテムをクリックしたときの処理
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const comment = this.getAttribute('data-comment');

            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalComment.textContent = comment;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // スクロールを無効化
        });

        // カーソルをポインターに変更
        item.style.cursor = 'pointer';
    });

    // 閉じるボタンをクリックしたときの処理
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // スクロールを有効化
    });

    // モーダルの外側をクリックしたときの処理
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // スクロールを有効化
        }
    });

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // スクロールを有効化
        }
    });

    // About セクションに到達したら omoi.png を下からスライドアップ表示する
    const aboutSection = document.getElementById('About');
    const overlayOmoi = document.querySelector('.overlay-omoi');
    if (aboutSection && overlayOmoi && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    overlayOmoi.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        io.observe(aboutSection);
    } else if (overlayOmoi) {
        // フォールバック: ページロード後にすぐ表示
        overlayOmoi.classList.add('visible');
    }
});

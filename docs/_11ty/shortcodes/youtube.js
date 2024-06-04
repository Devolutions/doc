module.exports = (id) => `<div class="video">
    <div class="video-container">
        <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/${encodeURIComponent(id)}"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    </div>
</div>`;
(function() {
    const imagesUrl = 'http://img-9gag-fun.9cache.com/photo/';
    const bigImagePostfix = '_700b.jpg';
    const smallImagePostfix = '_460s.jpg';

    showNSFWPosts();
    setInterval(showNSFWPosts, 1000);

    function showNSFWPosts() {
        const nsfwPosts = [...document.querySelectorAll('div.nsfw-post')];

        nsfwPosts.map(showImage);
    }

    function showImage(post) {
        const parent = post.parentNode;

        const idImage = getIdImage(parent);
        const imageSrc = getImageSrc(idImage);
        const image = createImage(imageSrc);

        parent.classList.remove('badge-nsfw-entry-cover');
        parent.removeChild(post);
        parent.appendChild(image);
    }

    function getIdImage(post) {
        const urlArr = post.getAttribute('href').split('/');

        return urlArr.pop();
    }

    function getUrlPostfix() {
        return window.location.href.indexOf('/gag/') !== -1? bigImagePostfix: smallImagePostfix;
    }

    function getImageSrc(idImage) {
        const postfix = getUrlPostfix();

        return imagesUrl + idImage + postfix;
    }

    function createImage(src) {
        const image = document.createElement('img');

        image.classList.add('badge-item-img');
        image.setAttribute('alt', 'nsfw image');
        image.setAttribute('src', src);

        return image;
    }
})();

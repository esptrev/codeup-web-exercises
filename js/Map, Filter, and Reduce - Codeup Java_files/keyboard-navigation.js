(function(){
    const keys = {
        left: 37,
        right: 39,
    };

    const links = {
        prev: document.querySelector('a[rel=prev]'),
        next: document.querySelector('a[rel=next]')
    };

    document.addEventListener('keyup', function(e) {
        const keyCode = e.which || e.keyCode;

        if (keyCode === keys.left && links.prev) {
            links.prev.click();
        } else if (keyCode === keys.right && links.next) {
            links.next.click();
        }
    })
})();

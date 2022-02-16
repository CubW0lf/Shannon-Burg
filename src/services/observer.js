const ratio = 0.6;
const spies = document.querySelectorAll("[data-spy]");

/**
 *
 * @param {HTMLElement} elem
 */
const activate = (elem) => {
    console.log(elem);
    //   ajouter ou toggle la class active aux loaders vu
    elem.classList.add("active");
};

/**
 *
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            activate(entry.target);
        }
    });
};

if (spies.length > 0) {
    const y = Math.round(window.innerHeight * ratio);
    const observer = new IntersectionObserver(callback, {
        // rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,
    });
    spies.forEach((spy) => {
        observer.observe(spy);
    });
}

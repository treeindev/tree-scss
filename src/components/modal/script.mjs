// Modal Component
//

class Component__Modal {

    constructor() {
    }

    showModal(content, classes = ['', '', '']) {
        // Dynamically create DOM elements but do not create node structure.
        const modal = document.createElement("div");
        const frame = document.createElement("div");
        const container = document.createElement("div");

        // Each element class can be set by sending a custom array of strings.
        modal.className = 'cmp__modal ' + classes[0];
        frame.className = 'frame ' + classes[1];
        container.className = 'container ' + classes[2];

        // The modal content gets passed as string. Is then appended to the DOM.
        container.innerHTML = content;
        frame.appendChild(container);
        modal.appendChild(frame);
        modal.style.display = 'block';
        document.body.appendChild(modal);

        setTimeout(function () {
            modal.style.opacity = 1;
        }, 300);
    }
}

export default Component__Modal;

// Image Gallery Component
//
// This component has the following dependencies:
//      - Component__Modals
//

class Component__ImageGallery {

    constructor(modals) {
        this.modals = modals;

        setTimeout(function () {
            modals.showModal('<div class="arrows prev"></div><div class="arrows next"></div><img src="https://i.pinimg.com/236x/54/84/e2/5484e289c5af5c3414a30cb14a768ea8--winding-road-the-road.jpg"/>', ['cmp__image-gallery', '', '']);
        }, 2000);
    }
}

export default Component__ImageGallery;

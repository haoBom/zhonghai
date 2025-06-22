import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('.p_gallery .c_item img', {
    groupAll: true,
    Image: {
        wheel: "slide",
    },
});

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Video: {
            autoplay: true,
        },
    },
});
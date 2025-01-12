// Type definitions for stick 1.6.0
// Project: http://kenwheeler.github.io/slick/
// Definitions by: John Gouigouix <https://github.com/Gouigouix>
//                 Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQuerySlick extends JQuerySlickInitials {
    defaults: JQuerySlickOptions;
    options: JQuerySlickOptions;
    originalSettings: JQuerySlickOptions;
    initials: JQuerySlickInitials;

    /**
     * Default: null
     */
    activeBreakpoint: number | null;

    /**
     * Default: null
     */
    animType: "OTransform" | "MozTransform" | "webkitTransform" | "msTransform" | "transform" | false | null;

    /**
     * Default: null
     */
    animProp: null;

    /**
     * Default: []
     */
    breakpoints: number[];

    /**
     * Default: {}
     */
    breakpointSettings: { [breakpoint: number]: JQuerySlickOptions };

    /**
     * Default: false
     */
    cssTransitions: boolean;

    /**
     * Default: false
     */
    focussed: boolean;

    /**
     * Default: false
     */
    interrupted: boolean;

    /**
     * Default: 'hidden'
     */
    hidden: "mozHidden" | "webkitHidden" | "hidden";

    /**
     * Default: true
     */
    paused: boolean;

    /**
     * Default: null
     */
    positionProp: "top" | "left" | null;

    /**
     * Default: null
     */
    respondTo: "window" | "slider" | "min" | null;

    /**
     * Default: 1
     */
    rowCount: number;

    /**
     * Default: true
     */
    shouldClick: boolean;

    /**
     * Default: $(element)
     */
    $slider: JQuery;

    /**
     * Default: null
     */
    $slidesCache: JQuery | null;

    /**
     * Default: null
     */
    transformType: "-o-transform" | "-moz-transform" | "-webkit-transform" | "-ms-transform" | "transition" | null;

    /**
     * Default: null
     */
    transitionType: "OTransition" | "MozTransition" | "webkitTransition" | "msTransition" | "transition" | null;

    /**
     * Default: 'visibilitychange'
     */
    visibilityChange: "visibilitychange" | "mozvisibilitychange" | "webkitvisibilitychange";

    /**
     * Default: 0
     */
    windowWidth: number;

    /**
     * Default: null
     */
    windowTimer: number | null;
}

interface JQuerySlickOptions {
    /**
     * Enables tabbing and arrow key navigation
     * Default: true
     */
    accessibility?: boolean | undefined;

    /**
     * Enables adaptive height for single slide horizontal carousels.
     * Default: false
     */
    adaptiveHeight?: boolean | undefined;

    /**
     * Enables Autoplay
     * Default: false
     */
    autoplay?: boolean | undefined;

    /**
     * Autoplay Speed in milliseconds
     * Default: 3000
     */
    autoplaySpeed?: number | undefined;

    /**
     * Prev/Next Arrows
     * Default: true
     */
    arrows?: boolean | undefined;

    /**
     * Set the slider to be the navigation of other slider
     * Default: null
     */
    asNavFor?: Element | JQuery | string | undefined;

    /**
     * Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
     * `false` will prevent arrows from being created/appended
     * Default: $(element)
     */
    appendArrows?: Element | Element[] | JQuery | string | boolean | undefined;

    /**
     * Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
     * Default: $(element)
     */
    appendDots?: Element | Element[] | JQuery | string | undefined;

    /**
     * Allows you to select a node or customize the HTML for the "Previous" arrow.
     * Default: <button type="button" class="slick-prev">Previous</button>
     */
    prevArrow?: Element | JQuery | string | undefined;

    /**
     * Allows you to select a node or customize the HTML for the "Next" arrow.
     * Default: <button type="button" class="slick-next">Next</button>
     */
    nextArrow?: Element | JQuery | string | undefined;

    /**
     * Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
     * Default: false
     */
    centerMode?: boolean | undefined;

    /**
     * Side padding when in center mode (px or %)
     * Default: '50px'
     */
    centerPadding?: string | undefined;

    /**
     * CSS3 Animation Easing
     * Default: 'ease'
     */
    cssEase?: string | undefined;

    /**
     * Custom paging templates. See source for use example.
     * Default: n/a
     */
    customPaging?: ((slider: any, i: number) => string) | undefined;

    /**
     * Show dot indicators
     * Default: false
     */
    dots?: boolean | undefined;

    /**
     * Class for slide indicator dots container
     * Default: 'slick-dots'
     */
    dotsClass?: string | undefined;

    /**
     * Enable mouse dragging
     * Default: true
     */
    draggable?: boolean | undefined;

    /**
     * Enable fade
     * Default: false
     */
    fade?: boolean | undefined;

    /**
     * Puts focus on slide after change
     * Default: false
     */
    focusOnChange?: boolean | undefined;

    /**
     * Enable focus on selected element (click)
     * Default: false
     */
    focusOnSelect?: boolean | undefined;

    /**
     * Add easing for jQuery animate. Use with easing libraries or default easing methods
     * Default: 'linear'
     */
    easing?: string | undefined;

    /**
     * Resistance when swiping edges of non-infinite carousels
     * Default: 0.15
     */
    edgeFriction?: number | undefined;

    /**
     * Infinite loop sliding
     * Default: true
     */
    infinite?: boolean | undefined;

    /**
     * Slide to start on
     * Default: 0
     */
    initialSlide?: number | undefined;

    /**
     * Set lazy loading technique. Accepts 'ondemand' or 'progressive'.
     * Default: 'ondemand'
     */
    lazyLoad?: string | undefined;

    /**
     * Responsive settings use mobile first calculation
     * Default: false
     */
    mobileFirst?: boolean | undefined;

    /**
     * Pause Autoplay On Focus
     * Default: true
     */
    pauseOnFocus?: boolean | undefined;

    /**
     * Pause Autoplay On Hover
     * Default: true
     */
    pauseOnHover?: boolean | undefined;

    /**
     * Pause Autoplay when a dot is hovered
     * Default: false
     */
    pauseOnDotsHover?: boolean | undefined;

    /**
     * Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
     * Default: 'window'
     */
    respondTo?: string | undefined;

    /**
     * Object containing breakpoints and settings objects (see demo).
     * Enables settings sets at given screen width.
     * Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
     * Default: none
     */
    responsive?: Object | undefined;

    /**
     * Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
     * Default: 1
     */
    rows?: number | undefined;

    /**
     * Element query to use as slide
     * Default: 'div'
     */
    slide?: string | undefined;

    /**
     * With grid mode intialized via the rows option, this sets how many slides are in each grid row.
     * Default: 1
     */
    slidesPerRow?: number | undefined;

    /**
     * # of slides to show
     * Default: 1
     */
    slidesToShow?: number | undefined;

    /**
     * # of slides to scroll
     * Default: 1
     */
    slidesToScroll?: number | undefined;

    /**
     * Slide/Fade animation speed (ms)
     * Default: 300
     */
    speed?: number | undefined;

    /**
     * Enable swiping
     * Default: true
     */
    swipe?: boolean | undefined;

    /**
     * Allow users to drag or swipe directly to a slide irrespective of slidesToScroll.
     * Default: false
     */
    swipeToSlide?: boolean | undefined;

    /**
     * Enable slide motion with touch
     * Default: true
     */
    touchMove?: boolean | undefined;

    /**
     * To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
     * Default: 5
     */
    touchThreshold?: number | undefined;

    /**
     * Enable/Disable CSS Transitions
     * Default: true
     */
    useCSS?: boolean | undefined;

    /**
     * Enable/Disable CSS Transforms
     * Default: true
     */
    useTransform?: boolean | undefined;

    /**
     * Variable width slides.
     * Default: false
     */
    variableWidth?: boolean | undefined;

    /**
     * Vertical slide mode
     * Default: false
     */
    vertical?: boolean | undefined;

    /**
     * Vertical swipe mode
     * Default: false
     */
    verticalSwiping?: boolean | undefined;

    /**
     * Change the slider's direction to become right-to-left
     * Default: false
     */
    rtl?: boolean | undefined;

    /**
     * Change the slider's direction to become right-to-left
     * Default: false
     */
    waitForAnimate?: boolean | undefined;

    /**
     * Set the zIndex values for slides, useful for IE9 and lower
     * Default: 1000
     */
    zIndex?: number | undefined;
}

interface JQuerySlickInitials {
    /**
     * When there is an animation running.
     * Default: false
     */
    animating: boolean;

    /**
     * When they user is dragging a slide.
     * Default: false
     */
    dragging: boolean;

    /**
     * Internal `setInterval` identifier.
     * Default: null
     */
    autoPlayTimer: number | null;

    /**
     * The current direction (`0` for left and down, `1` for right and up).
     * Default: 0
     */
    currentDirection: number;

    /**
     * Default: null
     */
    currentLeft: number | null;

    /**
     * The index of the current slide.
     * Default: 0
     */
    currentSlide: number;

    /**
     * The direction (`0` for left and down, `1` for right and up).
     * Default: null
     */
    direction: number;

    /**
     * jQuery instance that contains the "dots".
     * Default: null
     */
    $dots: JQuery | null;

    /**
     * The list's width in pixels.
     * Default: null
     */
    listWidth: number | null;

    /**
     * The list's height in pixels.
     * Default: null
     */
    listHeight: number | null;

    /**
     * (actually it's not used in Slick, so I don't know what it is...)
     * Default: 0
     */
    loadIndex: number;

    /**
     * jQuery instance that contains the "next arrow".
     * Default: null
     */
    $nextArrow: JQuery | null;

    /**
     * jQuery instance that contains the "prev arrow".
     * Default: null
     */
    $prevArrow: JQuery | null;

    /**
     * When they user is scrolling a slide.
     * Default: false
     */
    scrolling: boolean;

    /**
     * The number of slides.
     * Default: null
     */
    slideCount: number | null;

    /**
     * The slide's width in pixels.
     * Default: null
     */
    slideWidth: Number | null;

    /**
     * jQuery instance that contains the "slide track".
     * Default: null
     */
    $slideTrack: JQuery | null;

    /**
     * jQuery instance that contains the "slides".
     * Default: null
     */
    $slides: JQuery | null;

    /**
     * When the slider is sliding.
     * Default: false
     */
    sliding: boolean;

    /**
     * Slide offset in pixels.
     * Default: 0
     */
    slideOffset: number;

    /**
     * Default: null
     */
    swipeLeft: number | null;

    /**
     * Default: false
     */
    swiping: boolean;

    /**
     * jQuery instance that contains the "list".
     * Default: null
     */
    $list: null;

    /**
     * Object that contains properties relative to "touch" behavior.
     */
    touchObject: {
        startX?: number | undefined;
        startY?: number | undefined;
        curX?: number | undefined;
        curY?: number | undefined;
        swipeLength?: number | undefined;
        edgeHit?: boolean | undefined;
        minSwipe?: number | undefined;
        fingerCount?: number | undefined;
        verticalSwiping?: boolean | undefined;
    };

    /**
     * Default: false
     */
    transformsEnabled: boolean;

    /**
     * Default: false
     */
    unslicked: boolean;
}

interface JQuery {
    /**
     * Create slick component
     */
    slick(): JQuery;
    slick(options: JQuerySlickOptions): JQuery;

    /**
     * Trigger non-specialized signature method
     * @param methodName
     * @param arg
     */
    slick(methodName: string, ...arg: any[]): any;

    /**
     * Returns the current slide index
     * @param methodName The name of the method
     */
    slick(methodName: "slickCurrentSlide"): number;

    /**
     * Navigates to a slide by index
     * @param methodName The name of the method
     * @param slide
     * @param dontAnimate
     */
    slick(methodName: "slickGoTo", slide: number, dontAnimate?: boolean): JQuery;

    /**
     * Navigates to the next slide
     * @param methodName The name of the method
     */
    slick(methodName: "slickNext"): JQuery;

    /**
     * Navigates to the previous slide
     * @param methodName The name of the method
     */
    slick(methodName: "slickPrev"): JQuery;

    /**
     * Pauses autoplay
     * @param methodName The name of the method
     */
    slick(methodName: "slickPause"): JQuery;

    /**
     * Starts autoplay
     * @param methodName The name of the method
     */
    slick(methodName: "slickPlay"): JQuery;

    /**
     * Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided,
     * add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
     * @param methodName The name of the method
     * @param html
     * @param index/div>
     * @param addBefore
     */
    slick(methodName: "slickAdd", html: string | Object, index?: number, addBefore?: number): JQuery;

    /**
     * Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified.
     * If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
     * @param methodName The name of the method
     * @param index
     * @param removeBefore
     */
    slick(methodName: "slickRemove", index: number, removeBefore?: number): JQuery;

    /**
     * Filters slides using jQuery .filter()
     * @param methodName The name of the method
     * @param selector
     */
    slick(methodName: "slickFilter", selector: string): JQuery;

    /**
     * Filters slides using jQuery .filter()
     * @param methodName The name of the method
     * @param func
     */
    slick(methodName: "slickFilter", func: (index: number, element: Element) => any): JQuery;

    /**
     * Removes applied filtering
     * @param methodName The name of the method
     * @param index
     */
    slick(methodName: "slickUnfilter", index: number): JQuery;

    /**
     * Sets an individual value live. Set refresh to true if it's a UI update.
     * @param methodName The name of the method
     * @param option The option name
     */
    slick(methodName: "slickGetOption", option: any): JQuerySlickOptions;

    /**
     * Sets an individual value live. Set refresh to true if it's a UI update.
     * @param methodName The name of the method
     * @param option The option name
     * @param value depends on option
     * @param refresh
     */
    slick(methodName: "slickSetOption", option: string, value: JQuerySlickOptions, refresh?: boolean): JQuery;

    /**
     * Deconstructs slick
     * @param methodName The name of the method
     */
    slick(methodName: "unslick"): JQuery;

    /**
     * Get Slick Object
     * @param methodName The name of the method
     */
    slick(methodName: "getSlick"): JQuerySlick;
}

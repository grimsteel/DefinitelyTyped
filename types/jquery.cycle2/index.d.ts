// Type definitions for jQuery Cycle2 version 2.1
// Project: http://jquery.malsup.com/cycle2/
//          https://github.com/malsup/cycle2
// Definitions by: Donny Nadolny <https://github.com/dnadolny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQuery {
    cycle: JQueryCycle2.Cycle2;

    on(
        methodName: "cycle-after",
        callback: (
            event: JQueryEventObject,
            optionHash: JQueryCycle2.OptionsWithState,
            outgoingSlideEl: Element,
            incomingSlideEl: Element,
            forwardFlag: boolean,
        ) => void,
    ): JQuery;
    on(
        methodName: "cycle-before",
        callback: (
            event: JQueryEventObject,
            optionHash: JQueryCycle2.OptionsWithState,
            outgoingSlideEl: Element,
            incomingSlideEl: Element,
            forwardFlag: boolean,
        ) => void,
    ): JQuery;
    on(
        methodName: "cycle-bootstrap",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState, API: JQueryCycle2.API) => void,
    ): JQuery;
    on(
        methodName: "cycle-destroyed",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-finished",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-initialized",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-next",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-pager-activated",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-paused",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-post-initialize",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-pre-initialize",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-prev",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-resumed",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-slide-added",
        callback: (event: JQueryEventObject, jQueryWrappedSlideEl: JQuery) => void,
    ): JQuery;
    on(
        methodName: "cycle-slide-removed",
        callback: (event: JQueryEventObject, indexOfSlideRemoved: number, removedSlideEl: Element) => void,
    ): JQuery;
    on(
        methodName: "cycle-stopped",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-transition-stopped",
        callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void,
    ): JQuery;
    on(
        methodName: "cycle-update-view",
        callback: (
            event: JQueryEventObject,
            optionHash: JQueryCycle2.OptionsWithState,
            slideOptionsHash: JQueryCycle2.OptionsWithState,
            currentSlideEl: Element,
        ) => void,
    ): JQuery;
}

declare namespace JQueryCycle2 {
    interface Cycle2 {
        (options?: Options): JQuery;
        (methodName: "add", newSlide: any): JQuery; // string or JQuery
        (methodName: "destroy"): JQuery;
        (methodName: "goto", index: number): JQuery;
        (methodName: "next"): JQuery;
        (methodName: "pause"): JQuery;
        (methodName: "prev"): JQuery;
        (methodName: "reinit"): JQuery;
        (methodName: "remove", index: number): JQuery;
        (methodName: "resume"): JQuery;
        (methodName: "stop"): JQuery;
        (methodNameDontCallMe: string, arg1DontCallMe: any, arg2DontCallMe: any): JQuery; // catch-all, shouldn't ever be called though
    }

    interface Options {
        allowWrap?: boolean | undefined;
        autoHeight?: any; // number or string
        autoSelector?: string | undefined;
        caption?: string | undefined;
        captionTemplate?: string | undefined;
        continueAuto?: boolean | undefined;
        delay?: number | undefined;
        disabledClass?: string | undefined;
        easing?: string | undefined;
        fx?: string | undefined;
        hideNonActive?: boolean | undefined;
        loader?: any; // boolean or 'wait'
        log?: boolean | undefined;
        loop?: number | undefined;
        manualSpeed?: number | undefined;
        manualTrump?: boolean | undefined;
        next?: string | undefined;
        nextEvent?: string | undefined;
        overlay?: string | undefined;
        overlayTemplate?: string | undefined;
        pager?: string | undefined;
        pagerActivateClass?: string | undefined;
        pagerEvent?: string | undefined;
        pagerTemplate?: string | undefined;
        pauseOnHover?: any; // boolean or string
        paused?: boolean | undefined;
        prev?: string | undefined;
        prevEvent?: string | undefined;
        progressive?: string | undefined;
        random?: boolean | undefined;
        reverse?: boolean | undefined;
        slideActiveClass?: string | undefined;
        slideCss?: any;
        slideClass?: string | undefined;
        slides?: string | undefined;
        speed?: number | undefined;
        startingSlide?: number | undefined;
        swipe?: boolean | undefined;
        sync?: boolean | undefined;
        timeout?: number | undefined;
        tmplRegex?: string | undefined;
        updateView?: number | undefined;
    }

    interface OptionsWithState extends Options {
        busy: boolean;
        currSlide: number;
        nextSlide: number;
        paused: boolean;
        slideNum: number;
        slideCount: number;
    }

    interface API {
        add(slides: any, prepend?: boolean): void; // string or array or JQuery
        addInitialSlides(): void;
        advanceSlide(numberOfOpositions: number): boolean; // always false
        buildPagerLink(slideOptionHash: Options, slide: any /*not sure*/): void;
        buildSlideOpts(slide: any /*not sure*/): Options;
        calcFirstSlide(): void;
        calcNextSlide(): void;
        calcTx(slideOptions: Options, manual: boolean): Transition;
        destroy(): void;
        doTransition(
            slideOptions: Options,
            currEl: Element,
            nextEl: Element,
            fwdFlag: boolean,
            callback: Function,
        ): void;
        getComponent(nameOfComponent: string): JQuery;
        getSlideIndex(slideElement: Element): number;
        getSlideOpts(slideIndex: number): Options;
        goto(index: number): void;
        initSlide(slideOptions: Options, slide: any, /*not sure*/ suggestedZindex: number): void;
        initSlideshow(): void;
        log(...args: any[]): void;
        next(): void;
        page(pagerEl: Element, targetEl: Element): void;
        pause(): void;
        postInitSlideshow(): void;
        preInitSlideshow(): void;
        prepareTx(manualFlag: boolean, fwdFlag: boolean): void;
        prev(): void;
        queueTransition(slideOptions: Options): void;
        reinit(): void;
        remove(slideIndexToRemove: number): void;
        resume(): void;
        stackSlides(currEl: Element, nextEl: Element, fwdFlag: boolean): void;
        stop(): void;
        stopTransition(): void;
        tmpl(templateString: string, optionHash: Options, slideEl: Element): void;
        trigger(eventName: String, ...args: any[]): void;
        updateView(): void;
    }

    interface Transition {
        before(opts: Options, curr: Element, next: Element, fwd: boolean): void;
    }
}

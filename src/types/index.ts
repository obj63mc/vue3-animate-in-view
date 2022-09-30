import { Ref } from "vue"
export interface AnimationParams extends Object{
    animation?: string
    up?: string
    down?: string
    options?: object
}

export declare type intersectionCallback = (entry: IntersectionObserverEntry, isInView: Ref<boolean>) => void

export declare type scrollDetectionCallback = (lastScrollPosition: number, currentScrollPodsition: number) => void

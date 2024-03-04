/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RapidAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface RapidAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface RapidAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface RapidAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRapidAmbulanceWlEditorElement;
}
export interface RapidAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRapidAmbulanceWlListElement;
}
declare global {
    interface HTMLRapidAmbulanceWlAppElement extends Components.RapidAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLRapidAmbulanceWlAppElement: {
        prototype: HTMLRapidAmbulanceWlAppElement;
        new (): HTMLRapidAmbulanceWlAppElement;
    };
    interface HTMLRapidAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLRapidAmbulanceWlEditorElement extends Components.RapidAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRapidAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLRapidAmbulanceWlEditorElement, ev: RapidAmbulanceWlEditorCustomEvent<HTMLRapidAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRapidAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLRapidAmbulanceWlEditorElement, ev: RapidAmbulanceWlEditorCustomEvent<HTMLRapidAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRapidAmbulanceWlEditorElement: {
        prototype: HTMLRapidAmbulanceWlEditorElement;
        new (): HTMLRapidAmbulanceWlEditorElement;
    };
    interface HTMLRapidAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLRapidAmbulanceWlListElement extends Components.RapidAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRapidAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLRapidAmbulanceWlListElement, ev: RapidAmbulanceWlListCustomEvent<HTMLRapidAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRapidAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLRapidAmbulanceWlListElement, ev: RapidAmbulanceWlListCustomEvent<HTMLRapidAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRapidAmbulanceWlListElement: {
        prototype: HTMLRapidAmbulanceWlListElement;
        new (): HTMLRapidAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "rapid-ambulance-wl-app": HTMLRapidAmbulanceWlAppElement;
        "rapid-ambulance-wl-editor": HTMLRapidAmbulanceWlEditorElement;
        "rapid-ambulance-wl-list": HTMLRapidAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface RapidAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface RapidAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: RapidAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface RapidAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: RapidAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "rapid-ambulance-wl-app": RapidAmbulanceWlApp;
        "rapid-ambulance-wl-editor": RapidAmbulanceWlEditor;
        "rapid-ambulance-wl-list": RapidAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rapid-ambulance-wl-app": LocalJSX.RapidAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLRapidAmbulanceWlAppElement>;
            "rapid-ambulance-wl-editor": LocalJSX.RapidAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLRapidAmbulanceWlEditorElement>;
            "rapid-ambulance-wl-list": LocalJSX.RapidAmbulanceWlList & JSXBase.HTMLAttributes<HTMLRapidAmbulanceWlListElement>;
        }
    }
}

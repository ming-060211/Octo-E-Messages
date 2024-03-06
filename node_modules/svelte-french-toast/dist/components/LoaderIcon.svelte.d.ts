import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        primary?: string | undefined;
        secondary?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoaderIconProps = typeof __propDef.props;
export type LoaderIconEvents = typeof __propDef.events;
export type LoaderIconSlots = typeof __propDef.slots;
export default class LoaderIcon extends SvelteComponentTyped<LoaderIconProps, LoaderIconEvents, LoaderIconSlots> {
}
export {};

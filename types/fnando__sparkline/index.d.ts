// Type definitions for @fnando/sparkline 0.3
// Project: https://github.com/fnando/sparkline
// Definitions by: Gábor Balogh <https://github.com/grabofus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

type SparklineNativeEntry = number | { value: number };

type SparklineDatapoint<TEntry> = TEntry extends number ? { x: number; y: number; index: number; value: number }
    : TEntry & { x: number; y: number; index: number };

interface SparklineOptionsFetch<TEntry> {
    /**
     * Use this function to return the value if you have a different data structure that's not natively supported by sparkline.
     */
    fetch: (entry: TEntry) => number;
}

interface SparklineOptions<TEntry> {
    /**
     * By setting this callback function, you'll enable the interactive mode (unless you set options.interactive to false).
     */
    onmousemove?: ((event: MouseEvent, datapoint: SparklineDatapoint<TEntry>) => void) | undefined;

    /**
     * This callback function is called every time the mouse leaves the SVG area. You can use it to hide things like tooltips.
     */
    onmouseout?: ((event: MouseEvent) => void) | undefined;

    /**
     * Set the spot radius. The default is 2.
     */
    spotRadius?: number | undefined;

    /**
     * Set the cursor width. The default is 2.
     */
    cursorwidth?: number | undefined;

    /**
     * When true, this enables the interactive mode. You don't have to set this option if you're providing a onmousemove callback.
     */
    interactive?: boolean | undefined;
}

type SparklineNativeOptions<TEntry> = SparklineOptions<TEntry> | Partial<SparklineOptionsFetch<TEntry>>;
type SparklineNonNativeOptions<TEntry> = SparklineOptions<TEntry> | SparklineOptionsFetch<TEntry>;

/**
 * Generate SVG sparklines with JavaScript without any external dependency.
 * @param svg This is a <svg> reference that must contain three required attributes (width, height, and stroke-width). These attributes are used to calculate the drawing area.
 * @param entries You can either provide an array of numbers or an array of objects that respond to .value. If you have a different data structure, see options.fetch.
 * @param options This optional argument allows you to further customize the sparkline.
 */
export function sparkline<TEntry extends SparklineNativeEntry>(
    svg: SVGSVGElement,
    entries: TEntry[],
    options?: SparklineNativeOptions<TEntry>,
): string;
export function sparkline<TEntry>(
    svg: SVGSVGElement,
    entries: TEntry[],
    options: SparklineNonNativeOptions<TEntry>,
): string;

export default sparkline;

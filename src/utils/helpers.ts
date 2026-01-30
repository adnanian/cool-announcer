/**
 * An object representing a text line with an ID and content.
 */
export interface TLObj {
  /** The unique identifier of the text line. */
  id: number;
  /** The actual text content. */
  content: string;
}

/**
 * Generates a random integer from 0 to max - 1.
 *
 * @param max
 * @returns
 */
export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

/**
 * Gets a random element from an array.
 *
 * @param arr the array to get the element from.
 * @returns a random element from the array.
 */
export function randomArrayElement<T>(arr: T[]): T {
  const randomIndex = getRandomInt(arr.length);
  return arr[randomIndex];
}

/**
 * Asynchronously plays an audio file from the client.
 *
 * @param src the filepath.
 */
export async function playClientAudioAsync(src: string): Promise<void> {
  const audio = new Audio(`${import.meta.env.BASE_URL}sounds/${src}`);
  audio.play();
  await new Promise<void>((resolve) => {
    audio.onended = () => resolve();
  });
}

/**
 * Asynchronously plays the button hover sound.
 */
export async function playButtonHoverSound(): Promise<void> {
  await playClientAudioAsync("hover-button.wav");
}

/**
 * Asynchronously plays the button click sound.
 */
export async function playButtonClickSound(): Promise<void> {
  await playClientAudioAsync("click-button.wav");
}

/**
 * Asynchronously plays the keystroke sound.
 */
export async function playKeystrokeSound(): Promise<void> {
  await playClientAudioAsync("keystroke.wav");
}

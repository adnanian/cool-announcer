export interface TLObj {
  id: number;
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
  const audio = new Audio(src);
  audio.play();
  await new Promise<void>((resolve) => {
    audio.onended = () => resolve();
  });
}

export async function playButtonHover(): Promise<void> {
  await playClientAudioAsync("/sounds/hover-button.wav");
}

/**
 * Minions Audio-tests SDK
 *
 * Voice interaction configs, TTS/STT pipeline settings, and audio samples
 *
 * @module @minions-audio-tests/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Audio-tests.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

/**
 * @module @minions-audio-tests/sdk/schemas
 * Custom MinionType schemas for Minions Audio-tests.
 */

import type { MinionType } from 'minions-sdk';

export const audiotestconfigType: MinionType = {
  id: 'audio-tests-audio-test-config',
  name: 'Audio test config',
  slug: 'audio-test-config',
  description: 'Configuration for a voice interaction test.',
  icon: '🎤',
  schema: [
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'mode', type: 'select', label: 'mode' },
    { name: 'ttsProvider', type: 'select', label: 'ttsProvider' },
    { name: 'sttProvider', type: 'select', label: 'sttProvider' },
    { name: 'language', type: 'string', label: 'language' },
    { name: 'sampleRate', type: 'number', label: 'sampleRate' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const audiosampleType: MinionType = {
  id: 'audio-tests-audio-sample',
  name: 'Audio sample',
  slug: 'audio-sample',
  description: 'A recorded or generated audio sample for testing.',
  icon: '🔊',
  schema: [
    { name: 'configId', type: 'string', label: 'configId' },
    { name: 'transcript', type: 'string', label: 'transcript' },
    { name: 'audioUrl', type: 'string', label: 'audioUrl' },
    { name: 'durationMs', type: 'number', label: 'durationMs' },
    { name: 'sttResult', type: 'string', label: 'sttResult' },
    { name: 'accuracy', type: 'number', label: 'accuracy' },
  ],
};

export const customTypes: MinionType[] = [
  audiotestconfigType,
  audiosampleType,
];


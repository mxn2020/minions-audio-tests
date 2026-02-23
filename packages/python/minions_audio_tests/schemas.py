"""
Minions Audio-tests SDK — Type Schemas
Custom MinionType schemas for Minions Audio-tests.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

audio_test_config_type = MinionType(
    id="audio-tests-audio-test-config",
    name="Audio test config",
    slug="audio-test-config",
    description="Configuration for a voice interaction test.",
    icon="🎤",
    schema=[
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="mode", type="select", label="mode"),
        FieldDefinition(name="ttsProvider", type="select", label="ttsProvider"),
        FieldDefinition(name="sttProvider", type="select", label="sttProvider"),
        FieldDefinition(name="language", type="string", label="language"),
        FieldDefinition(name="sampleRate", type="number", label="sampleRate"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

audio_sample_type = MinionType(
    id="audio-tests-audio-sample",
    name="Audio sample",
    slug="audio-sample",
    description="A recorded or generated audio sample for testing.",
    icon="🔊",
    schema=[
        FieldDefinition(name="configId", type="string", label="configId"),
        FieldDefinition(name="transcript", type="string", label="transcript"),
        FieldDefinition(name="audioUrl", type="string", label="audioUrl"),
        FieldDefinition(name="durationMs", type="number", label="durationMs"),
        FieldDefinition(name="sttResult", type="string", label="sttResult"),
        FieldDefinition(name="accuracy", type="number", label="accuracy"),
    ],
)

custom_types: list[MinionType] = [
    audio_test_config_type,
    audio_sample_type,
]


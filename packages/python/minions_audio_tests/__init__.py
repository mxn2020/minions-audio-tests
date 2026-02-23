"""
Minions Audio-tests Python SDK

Voice interaction configs, TTS/STT pipeline settings, and audio samples
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Audio-tests.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *

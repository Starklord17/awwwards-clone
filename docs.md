# Docs

## Functions Explanations

### Hero.jsx

```const upcomingVideoIndex = (currentIndex % totalVideos) + 1;```
The code snippet provided calculates the index of the next video to be played in a sequence. This is useful for looping through a playlist of videos continuously.

The comments above the code explain the calculation with different values of `currentIndex`. The expression `currentIndex % totalVideos` uses the modulo operator `%` to get the remainder of the division of `currentIndex` by `totalVideos`. This ensures the result is always within the range of `0` to `totalVideos - 1`. By adding `1` to this result, the code adjusts the index to be within the range of `1` to `totalVideos`, which might be more intuitive for applications where indices start at `1` instead of `0`.

For example, if `totalVideos` is `4`:

- When `currentIndex` is `0`, `(0 % 4) + 1` results in `1`.
- When `currentIndex` is `1`, `(1 % 4) + 1` results in `2`.
- When `currentIndex` is `2`, `(2 % 4) + 1` results in `3`.
- When `currentIndex` is `3`, `(3 % 4) + 1` results in `4`.
- When `currentIndex` is `4`, `(4 % 4) + 1` results in `1` again, thus looping back to the start of the sequence.

This approach ensures that the `upcomingVideoIndex` cycles through the available videos in a circular manner, making it ideal for creating a seamless looping playlist.
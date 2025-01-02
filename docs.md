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

---

### **`useGSAP` Hook Documentation**

#### **First `useGSAP` Hook**
This hook animates the transition between the current video and the next video when a user interacts with the component.

##### **Purpose**
- Makes the next video visible and animates it into view while scaling the current video out of view.

##### **Key Steps**
1. **Set Visibility:**
   - The next video (`#next-video`) is initially hidden. When a user clicks, its visibility is set to `visible` using `gsap.set`.

2. **Animate the Next Video:**
   - The `gsap.to` function animates the next video from its initial state to occupy the full container with the following properties:
     - `transformOrigin`: Defines the center as the origin for scaling.
     - `scale`: Scales the video to its normal size.
     - `width` and `height`: Expands the video to occupy the full dimensions of the container.
     - `duration`: The animation runs for 1 second.
     - `ease`: Easing function (`power1.inOut`) for a smooth animation.
     - `onStart`: Starts playback of the next video.

3. **Scale Out the Current Video:**
   - The `gsap.from` function shrinks the current video to zero scale, giving the impression that it collapses into the container.

##### **Parameters**
- **Dependencies:** 
  - React's `useGSAP` hook depends on the `currentIndex` state. When `currentIndex` changes, the animation logic re-runs.
- **Options:**
  - `revertOnUpdate`: Ensures that animations reset when dependencies change.

---

#### **Second `useGSAP` Hook**
This hook adds a visual effect to the video frame, animating its `clipPath` and `borderRadius` when the page scrolls.

##### **Purpose**
- Creates a dynamic effect on the video frame as the user scrolls, enhancing visual appeal.

##### **Key Steps**
1. **Initial Setup:**
   - `gsap.set` configures the initial state of the video frame (`#video-frame`) with:
     - `clipPath`: A polygonal shape defining how the frame is clipped.
     - `borderRadius`: Gives the frame rounded corners.

2. **Scroll Animation:**
   - `gsap.from` animates the frame's `clipPath` and `borderRadius` as the user scrolls:
     - The animation transitions from a rectangular shape to the polygonal shape set initially.
     - `ease`: The easing function (`power1.inOut`) ensures smooth transitions.

3. **ScrollTrigger Integration:**
   - **`trigger`:** Sets the video frame (`#video-frame`) as the trigger element.
   - **`start` and `end`:** Defines the start and end points of the animation in relation to the viewport.
     - Start: When the element reaches the center of the viewport.
     - End: When the bottom of the element reaches the center of the viewport.
   - **`scrub`:** Synchronizes the animation with scrolling, creating a responsive effect.

---

### **Example Usage**

#### **When User Clicks**
- The first hook:
  - Makes the next video visible.
  - Animates the current video out and the next video in.

#### **When User Scrolls**
- The second hook:
  - Animates the frame shape and border dynamically as the page scrolls.

---

### **Benefits of GSAP in this Context**
- Smooth and hardware-accelerated animations.
- Fine control over animations and transitions.
- Scroll-triggered effects for an immersive user experience.

---

## How do you embed multimedia elements (audio/video) in HTML?

>[!TIP]
>Embedding multimedia elements like audio and video in HTML is straightforward, thanks to the <audio> and <video> tags introduced in HTML5. Here's how to use them:

### Embedding Audio
The <audio> tag allows you to embed sound content, such as music or podcasts.
sytax:
```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  <source src="audio-file.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```
Attributes
- controls: Adds play, pause, volume, and other default controls for the user.
- autoplay: Automatically starts playing the audio when the page loads.
- loop: Repeats the audio indefinitely.
- muted: Starts the audio in a muted state.
- preload: Specifies how the browser loads the audio (values: auto, metadata, none).

Example
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
### Embedding Video
The <video> tag is used for embedding videos in a web page.
syntax:
```html
<video controls width="640" height="360">
  <source src="video-file.mp4" type="video/mp4">
  <source src="video-file.ogg" type="video/ogg">
  Your browser does not support the video element.
</video>
```
Attributes
- controls: Adds play, pause, and volume controls.
- autoplay: Automatically plays the video when the page loads.
- loop: Repeats the video indefinitely.
- muted: Starts the video in a muted state.
- poster: Specifies an image to show while the video is loading or until the user presses play.
- preload: Controls video preloading (auto, metadata, none).

example
```html
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```
### Advanced Usage
1. Adding Subtitles or Captions
Use the <track> tag inside the <video> element to add captions or subtitles.
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
</video>
```
2.2. Embedding with Custom Controls
You can hide the default controls and create custom ones using JavaScript:
```html
<video id="myVideo" width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
</video>
<button onclick="document.getElementById('myVideo').play()">Play</button>
<button onclick="document.getElementById('myVideo').pause()">Pause</button>
```
### Best Practices
- Provide multiple formats (mp4, ogg, etc.) to ensure compatibility across browsers.
- Use the controls attribute to give users an easy way to interact with the media.
- Include a fallback message for browsers that don't support the <audio> or <video> tags.
- Optimize media files for web usage to reduce load times and bandwidth usage.

twemojify
=========

We all know Emoji doesn't work in Chrome, and that bug is assigned to me, and I don't know how to fix it, and I really like emoji. So I made a bookmarklet and a Chrome extension that uses Twitter's new open source [emoji](https://blog.twitter.com/2014/open-sourcing-twitter-emoji-for-everyone) api and fixes the Internet. Ok? Ok.

There are two things you can use. I recommend the extension for an out-of-sight-out-of-mind emoji immersive experience.

### A Chrome extension
Before you panic: yes, the extension uses `*` permissions. This is because you want emoji always, right?

0. Clone this repo somewhere
1. Go to chrome://extensions
2. Check `Developer mode` and click on `Load unpacked extension`
3. Select the `extension` folder in the repo you just cloned.
4. Go to the emoji [wikipedia](http://en.wikipedia.org/wiki/Emoji) page and cry with joy.

### A bookmarklet

Create a bookmark (`emojify!` is a great name for it, p.s.) and set its url to:

```
javascript:var i,s,ss=['//twemoji.maxcdn.com/twemoji.min.js','//rawgit.com/notwaldorf/twemojify/master/bookmarklet/twemojify.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
```

twemojify
=========

We all know Emoji don't work in Chrome, and that bug is assigned to me, and I haven't fixed it, and I really like emoji. So I made a bookmarklet and a Chrome extension that uses Twitter's new open source [emoji](https://blog.twitter.com/2014/open-sourcing-twitter-emoji-for-everyone) api and fixes the Internet. Ok? Ok. ❤️
Choose your poison:
### A bookmarklet

Create a bookmark (`emojify!` is a great name for it, p.s.) and set its url to:

```
javascript:var i,s,ss=['//twemoji.maxcdn.com/twemoji.min.js','//rawgit.com/notwaldorf/twemojify/master/twemojify-bookmarklet.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
```

### A Chrome extension

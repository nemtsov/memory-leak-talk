# Memory Leak Talk

Hey there! These files are from a memory leak lightning talk
I gave here at Adobe | Behance on the 31st of Jan, 2019.

As long as you're familiar with JS, you should be able to follow along.
I recommend looking through these in the order prescribed by the folder index. It's your call, of course.

The `1-gc` is naive and incorrect implementation of a very simple garbage collector.
It's here simply to illustrate the idea that as long as there's a reference to an object
it will not be garbage collected, and thus its memory will not be cleared up.

In my opinion, the misunderstanding of that simple concept is a cause of frustration.

`2-node-modules` illustrates a simple `require()` method and exposes the caching
that it has internally. Misunderstanding of that cache, I've found, is the second
popular cause of memory leaks.

`3-basic` contains a very simple memory leak.

`4-basic-server` is one common way for a memory leak to emerge from what seemes
like a working optimization followed by a new feature.

I hope you find these useful.

Enjoy!

- Y

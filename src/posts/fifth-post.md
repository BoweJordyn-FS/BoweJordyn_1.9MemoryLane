---
title: 'React Native Was Expected But HArder Than I Hoped'
date: 'June 22, 2026'
excerpt: 'This week was my first time working with React Native. When I saw that it’s what we were learning about this week, I was excited. I have a ton of app ideas I want to do in the future, and now I am finally learning about them. But once I started, I realized it wasn't going to be as easy as I’d hoped.'
heroImage: '/brett-jordan-ZVhbwDfLtYU-unsplash.jpg'
---

This week was my first time working with React Native. When I saw that it’s what we were learning about this week, I was excited. I have a ton of app ideas I want to do in the future, and now I am finally learning about them. But once I started, I realized it wasn't going to be as easy as I’d hoped. If you’ve read the other blog posts, I have mentioned that I love React. It reactivated my love for coding, and maybe that’s why I had such a hard time with the slight learning curve. I figured the foundation I had with React would carry me most of the way. And in some ways, it did for the most part. But I underestimated how much of what I knew was actually web-specific knowledge dressed up as React knowledge.

### Goodbye HTML

The change that surprised me the most wasn’t complicated or hard to understand; it was the components themselves. In React, you’re writing JSX, which is pretty much HTML. A` <div>` is a` <div>`. A `<p>` is a `<p>`. Muscle memory takes over fast. In React Native, none of that exists. Instead, you’re working with components like `<View>`, `<Text>`, `<ScrollView>`, `<TouchableOpacity>`, and `<FlatList>`. Which, in a sense, should be easier, but I’m so used to the other way that I had a hard time adjusting. In retrospect, the mapping makes sense. `<View>` is a` <div>`, `<Text>` is your `<p>` or `<span>`. But in practice, constantly translating was more annoying than I expected. I’d start typing a` <div>` out of habit, catch myself, and lose my flow. Or when I was making the filter button that would usually be a simple `<select><option></option></select>`, but with RN I used a `<Pressable>` and mapping through options with `<Text>`. It wasn’t a dealbreaker, but it was a persistent small annoyance that added up over the course of the project.

### The Win: Expo Made Deployment Surprisingly Easy

Because the learning curve put me in a negative mindset, I just assumed deploying would be a nightmare. Expo completely flipped that expectation.

With Expo, you can deploy your site all from the terminal. No configuring, no credit card numbers, no hassle at all. I went from a working app on my emulator to something I could share and run on a real device in a few commands.
I ran npx expo export --platform web, then npx eas deploy --prod, and just like that, I had a shareable version of it up and running almost instantly. For a school project, it's perfect, no Apple Developer account, no review process, just a URL.

### Would I Do It Again?

Of course, I would. I definitely want to improve my skills. The learning curve has been tough and frustrating at times, but it wasn’t impossible. Now that I’ve adjusted to the React Native way of thinking, I can see a clear path ahead. Building my own apps feels like a realistic goal rather than just a distant dream.

Trying something new is always challenging, and React Native was no different. However, it has a strong foundation and a mature ecosystem. With tools like Expo, it's easier than ever to create something real and share it with the world.

It’s definitely worth the effort.

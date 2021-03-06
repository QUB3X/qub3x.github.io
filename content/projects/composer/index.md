---
title: Composer
date: "2020"
description: "A client-only web app I made as a university project with ReactJS + ReduxJS that allows to create scripted actions for robots."
---

This project took me and [@chiarabia](https://github.com/chiarabia) a semester to complete, and there are still some issue that one day I'll iron out.

The idea was to make a software that allowed users to obtain a runnable code to be used on robots, in our case, an Arduino-powered device able to play sounds. It provides a rather intuitive interface where you can edit musical notes, activate motors and turn on LEDs. Users can then export their sequence as JSON or an Arduino Sketch (basically C, and at the time I had zero idea of how a compiler worked internally).

It was made with extendability in mind, written and documented in TypeScript, and with standard libraries. It's been a good occasion to learn ReactJS and Redux, along with some good design patterns.

Here's a [live demo](https://github.com/QUB3X/composer) of the project, hosted on Netlify.

![Screenshot](screen1.png)
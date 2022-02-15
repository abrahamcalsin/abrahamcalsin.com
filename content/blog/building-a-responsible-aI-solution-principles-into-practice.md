---
title: 'Building a Responsible AI Solution - Principles into Practice'
description: 'Translating responsible AI principles to create VerifyML. User feedback, design decisions and architecture choices in creating our responsible AI solution.'
date: '02/10/2022'
---

## Introduction

This is part 2 of my series of posts on fairness in AI, reflections from a participant in the Monetary Authority of Singapore's (MAS) Global Veritas Challenge. In my first post, I discussed the need to adopt a human-centric approach when dealing with issues of fairness in AI systems. After hours of brainstorming, user interviews and smashing bits of code together, we created VerifyML, an open-source framework to help organisations build fair and responsible models. The solution was one of the three winning submissions of the Veritas challenge!

My teammates have written about VerifyML in detail, so if you are interested in giving it a spin, check out the following introductory posts:

- Introducing VerifyML
- A Quickstart Guide to VerifyML Part 1
- A Quickstart Guide to VerifyML Part 2
- Comparing VerifyML, AI Fairness 360 and Fairlearn

In this post, I take a step back and share some of the things I have learned while developing this solution. I start from the user interviews and feedback that we have gathered, before discussing existing tools in the model governance space, and concluding with how we designed a solution that addresses the problem.

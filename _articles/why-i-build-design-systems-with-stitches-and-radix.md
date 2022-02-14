---
title: 'Why I Build Design Systems with Stitches and Radix'
description: 'I ve built design systems with CSS, Sass, Stylus, css-modules, styled-components, emotion, system-components and styled-system. Ive used BEM, scoped CSS, atomic CSS, and even made up conventions.'
date: '02/14/2022'
---

I've built design systems with CSS, Sass, Stylus, css-modules, styled-components, emotion, system-components and styled-system. I've used BEM, scoped CSS, atomic CSS, and even made up conventions.

But they never felt quite right—some were too laborious and too error-prone. Others were too slow and too opinionated.

I've lost count of how many times I've been asked to build complex components from scratch—dialogs, tooltips, dropdown menus, popovers, sheets, tabs.

But they were all flawed and lacked fundamental accessibility features. When working against a deadline, it's almost impossible to build them correctly.

So for the last couple of years, we at Modulz worked hard to facilitate how teams can build, maintain and scale their design systems—all whilst adhering to the WAI-ARIA design pattern.

If you've never heard of Stitches or Radix Primitives before, here's a little background.

Stitches
Stitches is a styling solution focusing on component architecture and developer experience.

It introduces a first-class variant API, enabling design system authors to express their intent better. It's fully typed, catching potential mistakes and improving the scalability of design systems. It's lightweight, coming in at less than 5kb. And finally, it's a breeze to get up and running with it.

## Step1: Radix Primitives

Radix Primitives is a low-level UI component library focusing on accessibility, customisation and developer experience. It's a comprehensive library of unstyled, and accessible components, with over twenty-five to choose from.

All its components adhere to the WAI-ARIA design patterns. They can be the base layer of your design system or adopted incrementally.

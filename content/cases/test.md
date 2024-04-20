---
title: 'TESTY'
finalImages: '[
  { "src": "/img/boka-final-1@2x.png", "alt": "a zoomed in view of the top-left part of the dashboard"},
  { "src": "/img/boka-final-2@2x.png", "alt": "a zoomed in view of the top-left part of the dashboard with image covers turned on"},
  { "src": "/img/boka-final-3@2x.png", "alt": "a modal that is showed when clicking on a book"},
  { "src": "/img/boka-final-4@2x.png", "alt": "a zoomed in view of the bottom-right part of the dashboard"},
  { "src": "/img/boka-final-5@2x.png", "alt": "a zoomed in view of the bottom-left part of the dashboard"}
]'
---
# Hello test

GUI examination · Design a system that help librarians and sales people put together suggestions of up to ten books in packages for different request.

::CaseSectionGeneral{:below='true' className='mt-16'}
#title
Context.

#default
### Function specification:
* Format: no more than 1850 x 1000 pixels, everything must be visible at all times, no dialogs, dropdowns, scolling or etc is allowed. (with one exception)
* The user must be able to put together packages of up to 10 books
* The user needs to be able to always see at least 300 books
* 100 of these 300 must visualize the following 4 properties:
  * genre
  * type
  * target group
  * popularity
* The remaining 200 must visualize at least 2 properties
* All books have tags, and the system should be able to show if books have mutual tags
* People with color blindness should be able to use the system
* The user needs to be able to read all the detailed information about a book. (Exception: This can be done with a pop-up)
::

::CaseSectionSteps{}
Steps
::

::CaseSectionFinal{:images="finalImages"}
Final
:::img{src='/img/boka-final-1@2x.png' alt='a zoomed in view of the top-left part of the dashboard'}
::

::CaseSectionGeneral{:below='true' className='mt-16'}
#title
Retrospective.

#default
## Challenges.
The biggest challenge with this project was definitely to fit everything in this small area and still keep the feeling tidy and structured. After quite some time sketching and wireframing I also realized that I had missed one bullet in the funcion specification \"no scrolling, overlays or etc. is allowed\" which I was competely stunned by (to me it felt obvious to use scolling and overlays for menus, hints and so on, but our teacher really wanted to challenge us, and she succeded). By the time I realized my mistake I had lost quite some time which meant that I also had to fight with the time for the rest of the project. *Lesson learned* — I will always read the brief thoroughly to never miss out on details like this.

## What can be improved.
Looking back on the project there are a few things I would like to improve, the text search is one of those things. I see now that it's not super clear how it works and it could need some refinement. The second thing is of course to change the icons for target group, as I know that they are all very similar to one another and hard to tell apart.

I could also see that it might be useful with a function to save one search filtration for later, to make it easier when the user uses the service the next time. I would also perhaps want to include a tool for the user to get recommendations on common search filtrations and book packages for different themes and groups of people, for example.
In retrospect I would also like to add a \"clear filter\" button to reset the filtrations altogheter to make it easy to start on a clean search slate.
In my project I tried to make a visualization of how many books in total and how many books in diffrent genres are in the bock package list (in the bottom) but I feel that it's not as clear as it could be and I'd love to work some more on that.
::

ABOVE THIS
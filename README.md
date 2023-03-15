# ms-test

## Summary

A test assignment project that is built to be run on a SharePoint page. No SharePoint technologies were used,
though enough TypeScript was used for the project to run (my familiarity with TypeScript are minimal).

## Known issues

I encountered a number of issues during the development of this:

-   I am not very well-versed when it comes to date calculations and business side of dates;
-   When you are not friends with TypeScript, it tends to feel like it is bullying you into submission;
-   Microsoft's documentation regarding the Fluent UI part seemed lackluster at the time of development (hence why none of its functionalities were used).

Currently standing issues regarding how the project runs right now:

-   Calculating weeks is less than ideal. I use one strategy to count the weeks in a month, but resorted to some online help with calculating the week numbers all-in-all. Those two algorithms do not play nicely.
-   There is not much data validation. Theoretically you could enter a start date that is later than the end date and nothing would break, but the results would be unexpected.

What I would like to change:

-   The design is an afterthought - I am definitely not happy with how little attention the design part got, but functionality was burning a lot more.
-   For my own comfort, an internal constant starts counting months from the 1st element of the array. Javascript - however - enjoys using index 0 for January. If I planned to rewrite this, I would probably try and not fight with Javascript on this one.
-   With enough thinking and planning, I would probably be able to figure out why the week counting is as broken as it is.
-   If I would do this again in SharePoint, I would probably try and use the calendar functions Microsoft provides with Fluent UI.
-   I would probably like to try out creating a SharePoint package of this and see how that works.
-   Add validation.
-   Get to know TypeScript much better than I do right now.

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16.1-green.svg)

## Applies to

-   [SharePoint Framework](https://aka.ms/spfx)
-   [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

-   Clone this repository
-   Ensure that you are at the solution folder
-   Change the initialPage field in config/serve.json to fit a test page that is available to you
-   in the command-line run:
    -   **npm install**
    -   **gulp serve**

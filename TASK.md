Your objective is to perform the following changes to the website. Please note that many of these changes will involve third-party tools and libraries, such as shadcnblocks or 21st.dev. I have shadcnblocks PRO plan (API key in .env file) and documentation providing guidance on how to use/implement from shadcnblocks can be found in `shadcnblocks/` folder.
- Replace current hero section with "Hero 197" from shadcnblocks (link: https://www.shadcnblocks.com/block/hero197 ) 
- This new hero section contains large empty space on the right half. In this empty space, implement this typewriter effect from 21st.dev (link: https://21st.dev/community/components/aliimam/typewriter/default ) that displays the following three different messages in order: 1. "AI that solves real problems." 2. "Turn your data into decisions." 3. "Build once. Scale infinitely."
- Remove all the contents of the 'Impact' section (all content and the chart). Instead, replace it with placeholder text saying: "Insert Mark Cuban Video Here" and below that small line of text, add a Video Embedding placeholder. My partner will later add a specific YouTube video that should be playable from the website in this section. I want you to focus on implementing a Well designed, completely professional, good looking, and really good functioning YouTube video embedding placeholder that is going to make it really easy for him to quickly add the video later on. 
- In the "Solutions" section, We have already implemented a section that includes five different options and when a user clicks on each option, it rotates between a visual in the area to the right of it. I have 5 custom lottie animations that I want to use for each of these 5 solution options respectfully. Located in the `public/lottie/` folder, implement each option with the lottie files as follows:
`public/lottie/blocks_1.json` for "AI Strategy & Roadmap" option
`public/lottie/blocks_4.json` for "Custom Solution Development" option
`public/lottie/blocks_3.json` for "Data Engineering & Machine Learning" option
`public/lottie/blocks_5.json` for "Agentic AI Automation" option
`public/lottie/blocks_2.json` for "AI Enablement & Governance" option
Additionally you should confirm this before proceeding but I'm pretty sure each of the Lottie animations has both a beginning and ending sequence, right? For basically the animation to fade in and fade out, it is two different motions. Keep this in mind and you might want to or have to change the section code a bit to accommodate for this. Ultimately it should make it so that when the option first is selected or is loading in, the first animation should play. When the user selects another option it should play the exiting animation accordingly before switching and then playing the entering animation for the new one. You might have to speed up a lot of animations to make this feel seamless. 

Before the company has been called "Prism" or "Prism AI Solutions". I just changed the name to "Aiscend". Go ahead and change everywhere around the website that currently still saying either "Prism" or "Prism AI Solutions" to "Aiscend" as necessary.


Change to Black & White palette



# Objective
You are a senior frontend engineer tasked with updating the current website significantly as follows.

Follow standard best practices. There is no need to fill in or change and content/copy yet, feel free to leave all content as is or fill in with lorum ipsum if needed.

# Section Changes:

## Hero

## Impact

## Solutions

## About

## Contact

---


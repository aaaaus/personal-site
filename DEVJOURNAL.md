## ISSUES ENCOUNTERED

## Relative linking to images

Images can be imported (like the react logo) but this is somewhat cumbersome when there are many images to import. Further, I intend on using an array of objects with local relative paths pointing to the location of the images, as each photo has additional data I want to use.

React has a built in public folder; creating an /images directory allows you to use that path. You do not need to back out of your current directory (src/components) to get there... you can simply enter the path found within the public directory and it will find the file.

React uses something called Webpack that will give imported photos a different URL, so it is not possible to use relative linking within a React project to point to a photo (the way you may do it traditionally)

## ARROW FUNCTIONS

The function 'handleThumbClick' is sent down to the Photo component. If it is a standard function, 'this' refers to the photo instance. If an arrow function, 'this' will be the App component.

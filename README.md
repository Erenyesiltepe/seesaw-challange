# Seasaw challange
## Thought Process And Design Decisions
### Thought Process
Since it is asked to make small commits, I wanted to keep it simple and started with the basic layout in the given example. Then I divided the idea into steps as follows:
1) Init: Static files like main.js, index.html and main.css with static holder and seasaw plank.
2) Add click handler and bind to html in main.js
3) Add addBall/renderBall logic
4) Write the global state and use the state in addBall function
5) Add animation and torque functionality
6) Add saveState and loadState functions
7) Add ball color with weight and weight labels
8) Add reset button
9) Add turret pointer

### Design Decisions
I tried to write the functions based of seperation of concerns and single responsibility principles. Each JavaScript file follows the single responsibility principle and avoids exceeding its designated purpose.
Basicly the files and what they do:
1) animation.js => torque calculation and plank animation
2) ballHandler.js => all operations about balls including weight color assignment, weight labels, style updates, ball loading and adding new balls
3) localStorageHandler.js => read ball data from storage and writes to it
4) mouseListeners.js => binding and defining mouse events
5) state.js => global state. I wanted to keep it extendable in case I use in later stages in the project but only keeps ball data
6) weightViewer => calculates weights for each side and updates the necessary component. could have calculated in addBall function but to keep the code simpler and readable I made it a different file

## Tradeoff And Limitations
1) As it is mentioned earlier, I could do weight calculation for each side in addBall function but it would complicate it. I run one more loop now but code is more readable
2) I wanted to make this more like a game with the turret but I had to change the structure of the project a lot. Thats why I avoided it

## AI Usage
I built the project 80% myself and only used ai for the syntax and to figure out some logical bugs.
1) In turret pointer, I asked AI about the getBoundingClientRect function and its use
2) In clickListener, there were a glitch related to ball offset. I asked how to fix it

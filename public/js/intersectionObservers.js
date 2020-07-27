const fromYAxis = document.querySelectorAll('.from-y-axis');
const fromXAxis = document.querySelectorAll('.from-x-axis');
const scaleUps = document.querySelectorAll('.scale-up');
const xWigglers = document.querySelectorAll('.wiggle-x');
const yWigglers = document.querySelectorAll('.wiggle-y');

let animationObjects  = [];
animationObjects.push.apply(animationObjects, fromYAxis);//refer https://stackoverflow.com/questions/14665295/merging-two-object-nodelist-arrays-in-javascript to learn this method functionality
animationObjects.push.apply(animationObjects, fromXAxis);
animationObjects.push.apply(animationObjects, scaleUps);
animationObjects.push.apply(animationObjects, xWigglers);
animationObjects.push.apply(animationObjects, yWigglers);
console.log(animationObjects);

let observerOptions = {// refer https://youtu.be/huVJW23JHKQ for basics on intObs
    threshold  : 0,
    rootMargin: "-50px 0px 0px 0px",
};
const intObsObserver = new IntersectionObserver(
    (entries, intObsObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){//if not intersecting
                return; //The return exits the current function, but the iterations keeps on, so you get the "next" item
            }
            else{
                console.log(entry.target);
                entry.target.classList.add("appear");
                intObsObserver.unobserve(entry.target);
            }
        });
    },
    observerOptions
);

animationObjects.forEach(animationObjectEntry => {
    intObsObserver.observe(animationObjectEntry);
});
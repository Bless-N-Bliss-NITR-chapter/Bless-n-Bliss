const fromBottoms = document.querySelectorAll('.from-bottom');
const fromLefts = document.querySelectorAll('.from-left');
const fromTops = document.querySelectorAll('.from-top');
const fromRights = document.querySelectorAll('.from-right');

let slideIns  = [];
slideIns.push.apply(slideIns, fromBottoms);//refer https://stackoverflow.com/questions/14665295/merging-two-object-nodelist-arrays-in-javascript to learn this method functionality
slideIns.push.apply(slideIns, fromLefts);
slideIns.push.apply(slideIns, fromTops);
slideIns.push.apply(slideIns, fromRights);
console.log(slideIns);

let observerOptions = {// refer https://youtu.be/huVJW23JHKQ for basics on intObs
    threshold  : 0,
    rootMargin: "-200px 0px 0px 0px",
};
const intObsObserver = new IntersectionObserver(
    (entries, intObsObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){//if not intersecting
                return; //The return exits the current function, but the iterations keeps on, so you get the "next" item
            }
            else{
                //console.log(entry.target);
                entry.target.classList.add("appear");
                intObsObserver.unobserve(entry.target);
            }
        });
    },
    observerOptions
);

slideIns.forEach(slideInEntry => {
    intObsObserver.observe(slideInEntry);
});
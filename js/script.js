let categories = [
    'MAGIC EFFECTS',
    'BLING',
    'STATIC EFFECTS',
    'S EFFECTS OUT',
    'PERSPECTIVE',
    'ROTATE',
    'SLIDE',
    'MATH',
    'TIN',
    'BOMB',
    'BOING',
    'ON THE SPACE'
]

let labelsCategories = document.querySelectorAll('.cards-categories__item');
let animationTitle = document.querySelector('h1[name="animation_title"]');


labelsCategories.forEach(function(label, index) {
    label.innerHTML = categories[index];
})

labelsCategories.forEach(function(label, index) {
    label.addEventListener('click', function() {
        animationTitle.textContent = label.textContent;
    })
})

console.log(categories);


/*
| MAGIC EFFECTS | BLING     | STATIC EFFECTS      | STATIC EFFECTS OUT | PERSPECTIVE            | ROTATE      |
|---------------|-----------|---------------------|--------------------|------------------------|-------------|
| magic         | puffIn    | openDownLeft        | openDownLeftOut    | perspectiveDown        | rotateDown  |
| twisterInDown | puffOut   | openDownRight       | openDownRightOut   | perspectiveUp          | rotateUp    |
| twisterInUp   | vanishIn  | openUpLeft          | openUpLeftOut      | perspectiveLeft        | rotateLeft  |
| swap          | vanishOut | openUpRight         | openUpRightOut     | perspectiveRight       | rotateRight |
|               |           | openDownLeftReturn  |                    | perspectiveDownReturn  |             |
|               |           | openDownRightReturn |                    | perspectiveUpReturn    |             |
|               |           | openUpLeftReturn    |                    | perspectiveLeftReturn  |             |
|               |           | openUpRightReturn   |                    | perspectiveRightReturn |             |


| SLIDE            | MATH      | TIN         | BOMB         | BOING        | ON THE SPACE  |
|------------------|-----------|-------------|--------------|--------------|---------------|
| slideDown        | swashOut  | tinRightOut | bombRightOut | boingInUp    | spaceOutUp    |
| slideUp          | swashIn   | tinLeftOut  | bombLeftOut  | boingOutDown | spaceOutRight |
| slideLeft        | foolishIn | tinUpOut    |              |              | spaceOutDown  |
| slideRight       | holeOut   | tinDownOut  |              |              | spaceOutLeft  |
| slideDownReturn  |           | tinRightIn  |              |              | spaceInUp     |
| slideUpReturn    |           | tinLeftIn   |              |              | spaceInRight  |
| slideLeftReturn  |           | tinUpIn     |              |              | spaceInDown   |
| slideRightReturn |           | tinDownIn   |              |              | spaceInLeft   |
*/
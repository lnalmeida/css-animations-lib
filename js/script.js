const categories = [
    'MAGIC',
    'BLING',
    'STATIC',
    'STATIC OUT',
    'PERSPECTIVE',
    'ROTATE',
    'SLIDE',
    'MATH',
    'TIN',
    'BOMB',
    'BOING',
    'ON THE SPACE'
]

const magicEffectsArray = [
    'magic',
    'twisterInDown',
    'twisterInUp',
    'swap'
]

const blingEffectsArray = [
    'puffIn',   
    'puffOut',  
    'vanishIn', 
    'vanishOut'
]

const staticEffectsArray = [
    'openDownLeft',
    'openDownRight',
    'openUpLeft',
    'openUpRight',
    'openDownLeftReturn',
    'openDownRightReturn',
    'openUpLeftReturn',
    'openUpRightReturn'
]

const staticEffectsOutArray =[
    'openDownLeftOut',
    'openDownRightOut',
    'openUpLeftOut',
    'openUpRightOut'
]

const perspectiveEffectsArray = [
    'perspectiveDown',
    'perspectiveUp',
    'perspectiveLeft',
    'perspectiveRight',
    'perspectiveDownReturn',
    'perspectiveUpReturn',
    'perspectiveLeftReturn',
    'perspectiveRightReturn'
]

const rotateEffectsArray = [
    'rotateDown',
    'rotateUp',
    'rotateLeft',
    'rotateRight'
]

const slideEffectsArray = [
    'slideDown',
    'slideUp',
    'slideLeft',
    'slideRight',
    'slideDownReturn',
    'slideUpReturn',
    'slideLeftReturn',
    'slideRightReturn'
]

const mathEffectsArray = [
    'swashOut',
    'swashIn',
    'foolishIn',
    'holeOut'
]

const tinEffectsArray = [
    'tinRightOut',
    'tinLeftOut',
    'tinUpOut',
    'tinDownOut',
    'tinRightIn',
    'tinLeftIn',
    'tinUpIn',
    'tinDownIn'
]

const bombEffectsArray = [
    'bombRightOut',
    'bombLeftOut'
]

const boingEffectsArray = [
    'boingInUp',
    'boingOutDown'
]

const onTheSpaceEffectsArray = [
    'spaceOutUp',
    'spaceOutRight',
    'spaceOutDown',
    'spaceOutLeft',
    'spaceInUp',
    'spaceInRight',
    'spaceInDown',
    'spaceInLeft'
]

const allEffects = [
    magicEffectsArray,
    blingEffectsArray,
    staticEffectsArray,
    staticEffectsOutArray,
    perspectiveEffectsArray,
    rotateEffectsArray,
    slideEffectsArray,
    mathEffectsArray,
    tinEffectsArray,
    bombEffectsArray,
    boingEffectsArray,
    onTheSpaceEffectsArray
]

const cardsEffects = document.querySelector('.cards-effects');
const labelsEffects = document.querySelectorAll('.cards-effects__item');
const labelsCategories = document.querySelectorAll('.cards-categories__item');
const animationTitle = document.querySelector('h1[name="animation_title"]');

var selectedCategory = 0;
var selectedEffect = 0;

labelsCategories.forEach(function(labelCategory, index) {
    labelCategory.innerHTML = categories[index];
})


labelsCategories.forEach(function(labelCategory, index) {
    labelCategory.addEventListener('click', function() {
        selectedCategory = index;
        animationTitle.textContent = labelCategory.textContent;
        allEffects.forEach((effect, index) => {
            if (index === selectedCategory) {
                cardsEffects.innerHTML = '';
                effect.forEach(effect => {
                    cardsEffects.appendChild(createDOMCardsEffects(allEffects[selectedCategory][index]));
                })
                
            } 
        })
    })
})

// function selectCategory(){
//     var selectedCategory = 0;
//     labelsCategories.forEach(function(labelCategory, index) {
//         labelCategory.addEventListener('click', function() {
//             selectedCategory = index;
//             animationTitle.textContent = labelCategory.textContent;
//             allEffects.forEach((effect, index) => {
//                 cardsEffects.appendChild(createDOMCardsEffects(allEffects[selectedCategory()][index]));
//             })
//         })
//     })
//     return selectedCategory;
// }


labelsEffects.forEach(function(labelEffect, index) {
    labelEffect.textContent = allEffects[selectedCategory][index];
})





function createDOMCardsEffects(effect) {
    let card = document.createElement('div');
    let cardContent = document.createElement('a');
    card.appendChild(cardContent);
    cardContent.innerText = effect;
    card.classList.add('cards-effects__item');
    return card;
}


// allEffects.forEach((effect, index) => {
//     cardsEffects.appendChild(createDOMCardsEffects(allEffects[selectCategory()][index]));
// })







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
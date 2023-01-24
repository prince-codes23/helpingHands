var a = $('.boxesnumber').length;

var data = [
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    },
    {
        "line1": "400 OFF",
        "line2": "HELPING HANDS",
        "imagehelp": "https://raw.githubusercontent.com/shrey714/helping-hands/2a69cdd73223fd1b0b2d604bee60c01429a4e9cb/public/images/helping%20hand.svg"
    }
]
// let boxnumber = document.getElementById("boxnumber").value;
let rewards=document.querySelector(".rewards");
for (let i = 0; i < a; i++) {
    rewards.innerHTML += `        
    <div class="rewardbox">
    <span class="rewardamount">${data[i].line1}</span>
    <span class="rewardbrand">${data[i].line2}</span>
    <div class="rewardlogo"><img src="${data[i].imagehelp}"></div>
    </div>
`;
}


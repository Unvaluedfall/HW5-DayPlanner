// CurrentDate El and Text Content
var currentDateEl = document.querySelector(".currentDate")
currentDateEl.textContent = (moment().format('LLLL'));
// TimeBlock Container
var timeBlockContainerTableBody = document.querySelector("#timeBlockContainerTableBody");



// The Working Hours Var
var times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]


var now = moment().format()
console.log(now)
var theHour = moment().hour()
console.log(theHour)




// creates the table for the Planner
for(var i = 0; i < times.length; i++){
    // Table Row
        var timeBlockRow = document.createElement("tr")
    // Table Col Time, Creating and appending, has an ID hour-times[i]
    var timeBlockColTime = document.createElement("td");
        timeBlockColTime.setAttribute("class", "timeBlock")
        timeBlockColTime.setAttribute("id", "hour-" + times[i])
        timeBlockColTime.setAttribute("data-time", times[i])
    var cellTextTime = document.createTextNode(moment(times[i],'HH').format("h A"));
        timeBlockColTime.append(cellTextTime)
    // Table Col Input, Creating and appending, has an ID hour-times[i], has data-input - times[i]
    var timeBlockColInput = document.createElement("td");
        // timeBlockColInput.setAttribute("class", "b")
        timeBlockColInput.setAttribute("id", "input-" + times[i])
        timeBlockColInput.setAttribute("data-input", times[i]);
    var cellTextInput = document.createTextNode("", createInput());
        timeBlockColInput.append(cellTextInput)
    // Table Col Button, Creating and appending, has an ID hour-times[i]
    var timeBlockColButton = document.createElement("td");
        timeBlockColButton.setAttribute("id", "button-" + times[i])
        timeBlockColButton.setAttribute("data-button", times[i])
    var cellTextButton = document.createTextNode("", createButton());
        timeBlockColButton.append(cellTextButton)

    // Appends the Time, Input, an
    timeBlockRow.append(timeBlockColTime, timeBlockColInput, timeBlockColButton)
    timeBlockContainerTableBody.append(timeBlockRow) 
}

timeBlockContainerTableBody.addEventListener("click", function(event){
    var clickedTimeBlock = event.target;
    var clickedTimeBlockParent = event.target.parentNode
    var clickedTimeBlockPParent = event.target.parentNode.parentNode
    
    console.log(clickedTimeBlockParent)
    // console.log(clickedTimeBlockPParent)
    
    if(clickedTimeBlock.matches("button") === true){
        // Gets the Button that was click and its input
        var colButton = clickedTimeBlockParent.children[0]
        var colInput = clickedTimeBlockPParent.children[1].children[0]
        console.log(colButton)
        console.log(colInput)
        
        // var buttonColor =  colInput.getAttribute("class", "btn-success")
        var buttonValue =  colButton.getAttribute("data-value")
        var inputBlockText = colInput.value;
        
        console.log(inputBlockText)
        // console.log(buttonValue)



        // Doesnt Let you enter Nothing
        if(inputBlockText === null || inputBlockText === ""){
    
        }else {
            // Turns Unlocked Button to Locked
            if(buttonValue === "unlocked"){
                colButton.setAttribute("data-value" ,"locked");     
                chaingingBackGround();
                saveData();
            // Turns Locked Button to Unlocked 
            } else if(buttonValue === "locked"){
                colButton.setAttribute("data-value" ,"unlocked");     
                chaingingBackGround();
            }
        }
    }
    chaingingBackGround();
})


// Creates the Input Box in the Table
function createInput(){
    var timeInput = document.createElement("input");
    timeInput.setAttribute("class", "b input-group input-group-lg");
    timeInput.setAttribute("type", "text");
    timeBlockColInput.append(timeInput);
}
// Creates the Button in the Table
function createButton(){
    var timeButton = document.createElement("button")
    timeButton.setAttribute("class", 'b btn btn-success btn-block')
    timeButton.setAttribute("data-value", 'unlocked')
    timeButton.setAttribute("type", 'button')
    timeBlockColButton.append(timeButton)
}
// Follows the time and Changes the background grey(Past Time), green(Unlocked), red(Locked)
function chaingingBackGround(){

        // Tracks the Working time Block
        for(i = 8; i <= times.length + 7; i++){
            var checkInputId = document.querySelector("#input-"+i)
            var checkButtonId = document.querySelector("#button-"+i).children[0]
            var checkButtonValue = checkButtonId.getAttribute("data-value")
        // If theHour is out the bounds of i, background is Grey, Set the grey Button class 
        if(theHour > i){
            checkInputId.style.background = "grey";
            checkButtonId.setAttribute("class", "b btn btn-secondary btn-block .disabled");
            checkButtonId.textContent = "Maybe Tomorrow"
         
        }
        // Else Locked or Unlocked
        else{

            // If checkButtonValue is locked, background is red, Set the button red, locked symbol
            if(checkButtonValue === "locked"){
                checkButtonId.setAttribute("class", "b btn btn-danger btn-block fas fa-lock");
                checkInputId.style.background = "red";
                // saveData();
            }
            // If checkButtonValue is unlocked, background is green, Set the button green, unlocked symbol
            if(checkButtonValue === "unlocked"){
                checkButtonId.setAttribute("class", "b btn btn-success btn-block fas fa-unlock");
                checkInputId.style.background = "green";
                // deleteData();
            }         
        }
    }   
}

function saveData(){
    for(i = 8; i <= times.length + 7; i++){
        var checkInputId = document.querySelector("#input-"+i)
        
        var inputValue = checkInputId.children[0].value
console.log(checkInputId)
        var savedInputData = [];
            savedInputData.push(inputValue)
    }
    
   console.log(savedInputData)

    


}

function deleteData(){

}



function startPage(){
    chaingingBackGround();
}
startPage();
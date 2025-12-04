const upperBodyWorkouts = ["tricep dips", "arm circles", "pushups", "arm front raises", "arm lateral raises"]
const legWorkouts = ["bodyweight squats", "lunge/reverse lunges", "calf raises", "step ups", "straight leg raises"]
const abWorkouts = ["situps", "curl up/crunches", "oblique heel touches", "mountain climbers", "Russian Twist"]
const cardioEnduranceWorkouts = ["high knees", "jog(in place)", "upper arm plank", "forearm plank", "squat hold"]
const flexibilityWorkouts = ["hamstring stretch", "downward dog", "quad stretch", "butterfly stretch", "hip stretch"]
//each array has 3 levels of difficulty
//arms, legs, abs, cardio, flexibility
const bodySectionCheckboxes = document.getElementsByName("bodySections")
let bodySectionCheckedCount = 0;
let selectedBodySections = [];
const maxBodySectionCheckables = 3;
const intensityLevel = document.getElementsByName("workoutIntensity")
let selectedIntensityValue;
let numReps;
let numExercises;
let finalWorkout;
const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")
const para3 = document.getElementById("para3")

for (const bodySectionCheckbox of bodySectionCheckboxes) { //finds what values are selected from the checkbox and puts it into an array for future usage 
    bodySectionCheckbox.addEventListener("change", function () {
        if (this.checked) {
            if (selectedBodySections.length >= maxBodySectionCheckables) {
                this.checked = false;
                alert(`You can only select up to ${maxBodySectionCheckables} options.`);
                return;
            }
            selectedBodySections.push(this.value);
        } else {
            selectedBodySections = selectedBodySections.filter(value => value !== this.value); // Remove from array if unchecked, for each value if the value doesn't equal the value that is checked/ want to remove
            //it will evaluate to true and those that are true and put it into a new array, which will then be assigned to the same selectedBodySections array. 
        }
        console.log(selectedBodySections);
    });
}
function getValues() {
    let selectedIntensity = document.querySelector('input[name="workoutIntensity"]:checked')
    if (selectedIntensity) {
        selectedIntensityValue = selectedIntensity.value;
    }
    if (selectedIntensity && !selectedBodySections.length == 0) {
        return true
    }
    else {
        alert("Please fill out the whole form");
        return false
    }
}
function generateWorkout() {
    if (!getValues()) {
        return
    }
    switch (selectedIntensityValue) {
        case "low":
            numReps = 5
            numExercises = 1
            break
        case "medium":
            numReps = 15
            numExercises = 3
            break
        case "high":
            numReps = 25
            numExercises = 5
            break
    }
    let tempArray = []
    let tempValue;
    let feederWorkout
    let numGenerated = 0
    let paraNum;
    for (let section of selectedBodySections) {
        numGenerated += 1
        switch (section) {
            case "upperBody":
                feederWorkout = upperBodyWorkouts
                break
            case "legs":
                feederWorkout = legWorkouts
                break
            case "abs":
                feederWorkout = abWorkouts
                break
            case "endurance":
                feederWorkout = cardioEnduranceWorkouts
                break
            case "flexibility":
                feederWorkout = flexibilityWorkouts
                break
        }
        let lenArray = feederWorkout.length
        for (let i = 0; i < lenArray; i++){
            tempValue = feederWorkout[Math.floor(Math.random()*feederWorkout.length)]
            tempArray.push(tempValue)
            feederWorkout = feederWorkout.filter(value => value !== tempValue)
        }
        for (let i = 0; i < numExercises; i++){
            feederWorkout.push(tempArray.pop())
            console.log(feederWorkout)
        }
        switch (numGenerated){
            case "1":
                paraNum = para1
                break
            case "2":
                paraNum = para2
                break
            case "3":
                paraNum = para3
                break
        }
    }
}
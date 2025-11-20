const armWorkouts = []
const legWorkouts = []
const abWorkouts = []
const cardioWorkouts = []
const flexibilityWorkouts = []
//each array has 3 levels of difficulty
//arms, legs, abs, cardio, flexibility
const bodySectionCheckboxes = document.getElementsByName("bodySections")
let bodySectionCheckedCount = 0;
let selectedBodySections = [];
const maxBodySectionCheckables = 3;
const intensityLevel = document.getElementsByName("workoutIntensity")
let selectedIntensityValue;

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
    const selectedIntensity = document.querySelector('input[name="workoutIntensity"]:checked')
    if (selectedIntensity){
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
    if (!getValues()){
        return
    }
    console.log(`Successful Execution of generateWorkout ${selectedBodySections}, ${selectedIntensityValue}`)
}
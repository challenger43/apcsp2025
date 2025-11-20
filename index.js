const bodySectionCheckboxes = document.getElementsByName("bodySections")
let bodySectionCheckedCount = 0;
let selectedBodySections = [];
const maxBodySectionCheckables = 3;

for (const bodySectionCheckbox of bodySectionCheckboxes) {
    bodySectionCheckbox.addEventListener("change", function () {
        if (this.checked) {
            if (selectedBodySections.length >= maxBodySectionCheckables) {
                this.checked = false;
                alert(`You can only select up to ${maxBodySectionCheckables} options.`);
                return;
            }
            selectedBodySections.push(this.value); 
        } else {
            selectedBodySections = selectedBodySections.filter(value => value !== this.value); // Remove from array if unchecked
        }
        console.log(selectedBodySections);
    });
}

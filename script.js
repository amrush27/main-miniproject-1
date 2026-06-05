const input = document.getElementById("input");
const output = document.getElementById("output");
function updatePreview() {
    output.innerHTML = marked.parse(input.value);
}
input.addEventListener("input", updatePreview);

// Show preview when page loads
updatePreview();
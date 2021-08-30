const showPastedImage = (img) => {
    const fileReader = new FileReader(); //used to read file as a base 64 data url to input it to form
    fileReader.readAsDataURL(img);
    fileReader.onload = () => { //this will be run when the file is read
        const container = document.getElementById("text-container"); 
        let img = document.createElement("img"); 
        img.src = fileReader.result;
        container.append(img)

    } 

}

const pasteEventHandler = (event) => {
    if (event.clipboardData.files.length > 0) { //check whether there are files. 
        if (event.clipboardData.files[0].type.startsWith("image/")) {
            const fileInput = document.getElementById("myFile"); 
            fileInput.files = event.clipboardData.files; //put the file from the clipboard into the form.
            showPastedImage(fileInput.files[0]);
        }
    }
}

addEventListener("paste", pasteEventHandler);
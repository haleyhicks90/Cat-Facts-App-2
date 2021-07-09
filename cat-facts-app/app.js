$(() => {

// start of fact container

//below: an event listener that listens for a click on the submit button
$(".submit").on("click", (event) => {
    event.preventDefault()
//below: reset the info in the fact container every time the submit button is clicked
    $(".fact-container").empty()

//below: naming a variable "inputNum" and setting it to whatever input value the user types into the input field
    const inputNum = $("input[type='text']").val()

//below: 5 is the dafault amount of facts I want returned if the user doesn't enter a valid number
    let limit = 5
    if (inputNum) {
        limit = inputNum
    }


$.ajax({
        url: "https://cat-fact.herokuapp.com/facts/random",
        type: "GET",
        data: {
            "amount" : limit,

        }
    }).then(
        (data) => {
            console.log(data);

//below: created one ul to have something to attach our li to
            const $ul = $("<ul>")

//below: a loop that iterates through
        for (let i = 0; i < data.length; i++) {
            const $li = $("<li>")
            const $factsdiv = $("<div>").text(data[i].text)

            $li.append($factsdiv)
            $ul.append($li)
        }

        $(".fact-container").append($ul)
    }),
    () => {
        console.log("bad request");
    }
});
// end of fact container



// start of carousel container
let currentImgIndex = 0
let numOfImages = $(".carousel-images").children().length - 1

// below: event listener for next button
$(".next").on("click", () => {
    $(".carousel-images").children().eq(currentImgIndex).css("display", "none")
    if(currentImgIndex < numOfImages) {
        currentImgIndex++
    } else {
        currentImgIndex = 0
    }

    $(".carousel-images").children().eq(currentImgIndex).css("display", "block")

})

// below: event listener for previous button
$(".previous").on("click", () => {
    $(".carousel-images").children().eq(currentImgIndex).css("display", "none")
    if(currentImgIndex > 0) {
        currentImgIndex--
    } else {
        currentImgIndex = numOfImages
    }

    $(".carousel-images").children().eq(currentImgIndex).css("display", "block")

})

// below: closing brackets for window.onload
})

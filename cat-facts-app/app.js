$(() => {

// start of fact container
$(".submit").on("click", (event) => {
    event.preventDefault()
    $(".fact-container").empty()

    const inputNum = $("input[type='text']").val()

    let limit = 5
    if (inputNum) {
        limit = inputNum
    }


$.ajax({
        url: "https://cat-fact.herokuapp.com/facts",
        type: "GET",
        data: {
            "$limit" : limit,

        }
    }).then(
        (data) => {
            console.log(data);


            const $ul = $("<ul>")

        for (let i = 0; i <data.length; i++) {
            const $li = $("<li>")
            const $factsdiv = $("<div>").append(data[i])
            $li.append([$factsdiv])
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

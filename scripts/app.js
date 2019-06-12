// printing the data by getting the stored values
const resultDiv = document.querySelector('#results');

// setting up function here
const printData = (data) => {

    let output = '';
    var id = 0;

    data.forEach((item) => {
        id++;
        let listData = item.data()
        output += `
          <tr class="table table-bordered">
          <td id = 'uniqueID'>${id}</td>
            <td>${listData.Name}</td>
            <td>${listData.Address}</td>
            <td>${listData.Phone}</td>
            <td>${listData.BloodGroup}</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#donarDetails" id="getDetails">Details</button></td>
          </tr>`
    })
    resultDiv.innerHTML = output;
}



// getting the tapped result of donor here
const getDataDonor = document.querySelector('#results');


// adding listener here using event delegation here
getDataDonor.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn')) {

        // getting the clicked item id here
        let element = e.target.parentElement.parentElement;
        console.log(element)
        //     let element = document.querySelector('#uniqueID');

        //     const makingArray = (element) => {
        //         // making siblings array list here
        //         let siblings = [];
        //         let sibling = element.parentNode.firstChild;

        //         // Loop through each sibling and push to the array
        //         while (sibling) {
        //             if (sibling.nodeType === 1 && sibling !== element) {
        //                 siblings.push(sibling);
        //             }
        //             sibling = sibling.innerHTML;
        //         }

        //         return siblings;
        //     }

        //     console.log(makingArray(element))
        // }
    }
})

// animation here
const mainText = document.querySelector('.introSection');
const init = () => {
    setTimeout(() => {
        // mainText.style.display = 'block';
        mainText.style.opacity = 1;

    }, 1400);

}
init()
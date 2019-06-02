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
          <td>${id}</td>
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
getDataDonor.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        console.log('milgaya')
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
// printing the data by getting the stored values
const resultDiv = document.querySelector('#results');

// setting up function here
const printData = (data) => {

    let output = '';
    var id = 0;

    data.forEach((item) => {
        id++
        let listData = item.data()
        output += `
          <tr>
          <td>${id}</td>
            <td>${listData.Name}</td>
            <td>${listData.Address}</td>
            <td>${listData.Phone}</td>
            <td>${listData.BloodGroup}</td>
            <td><button class = 'btn btn-success' id='donarDetails'>Details</button></td>
          </tr>`
    })
    resultDiv.innerHTML = output
}
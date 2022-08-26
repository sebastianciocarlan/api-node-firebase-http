fetch('https://us-central1-apiprueba-72530.cloudfunctions.net/widgets/api/data').then(response => response.text())
    .then(data => {
        let json = JSON.parse(data)

        let table = document.getElementById('values')
        json.forEach(element => {
            try {
                element.data.forEach(el => {
                    table.appendChild(createTablerow(el))
                })
            } catch (e) {

            }

        });
    });

const createTablerow = (data, id) => {
    let row = document.createElement('tr')
    row.className = 'row100 body'
    row.appendChild(createCell(data.id, 1))
    row.appendChild(createCell(data.type, 2))
    row.appendChild(createCell(data.value, 3))
    row.appendChild(createCell(data.timestamp, 4))
    return row
}
const createCell = (value, i) => {
    let cell = document.createElement('td')
    cell.className = 'cell100 column' + i
    cell.innerHTML = value
    return cell
}